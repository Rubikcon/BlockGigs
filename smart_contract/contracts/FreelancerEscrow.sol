// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
 import "@openzeppelin/contracts/security/ReentrancyGuard.sol"

contract FreelancerEscrow is ReentrancyGuard {
    IERC20 public token; // ERC20 token used for payments

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress); // Set ERC20 token address
    }

    // Freelancer Profile
    struct Freelancer {
        string name;
        address walletAddress;
        bool isRegistered;
    }

    // Job Details
    struct Job {
        address client; // Client posting the job
        string description;
        uint256 amount; // Amount locked for the job
        address assignedFreelancer; // Assigned freelancer
        bool isCompleted;
        bool isPaidOut;
    }

    // Mappings
    mapping(address => Freelancer) public freelancers; // Stores registered freelancers
    mapping(uint256 => Job) public jobs; // Job ID to job mapping
    uint256 public jobCounter; // Tracks job count

    /** Freelancer Registration **/
    function registerFreelancer(string memory _name) public {
        require(!freelancers[msg.sender].isRegistered, "Already registered");

        freelancers[msg.sender] = Freelancer({
            name: _name,
            walletAddress: msg.sender,
            isRegistered: true
        });
    }

    /** Client Posts a Job with Locked Funds **/
    function postJob(
        string memory _description,
        uint256 _amount
    ) external nonReentrant {
        require(_amount > 0, "Amount must be greater than zero");

        // Transfer and lock the funds in the contract
        require(
            token.transferFrom(msg.sender, address(this), _amount),
            "Token transfer failed"
        );

        jobs[jobCounter] = Job({
            client: msg.sender,
            description: _description,
            amount: _amount,
            assignedFreelancer: address(0),
            isCompleted: false,
            isPaidOut: false
        });

        jobCounter++; // Increment job count
    }

    /** Assign a Freelancer to the Job **/
    function assignFreelancer(uint256 _jobId, address _freelancer) external {
        Job storage job = jobs[_jobId];

        require(msg.sender == job.client, "Only client can assign freelancer");
        require(
            freelancers[_freelancer].isRegistered,
            "Freelancer not registered"
        );
        require(
            job.assignedFreelancer == address(0),
            "Freelancer already assigned"
        );

        job.assignedFreelancer = _freelancer;
    }

    /** Freelancer Marks Job as Completed **/
    function completeJob(uint256 _jobId) external {
        Job storage job = jobs[_jobId];

        require(
            msg.sender == job.assignedFreelancer,
            "Only assigned freelancer can complete job"
        );
        require(!job.isCompleted, "Job already completed");

        job.isCompleted = true;
    }

    /** Client Approves and Releases Payment **/
    function releasePayment(uint256 _jobId) external nonReentrant {
        Job storage job = jobs[_jobId];

        require(msg.sender == job.client, "Only client can release payment");
        require(job.isCompleted, "Job is not completed");
        require(!job.isPaidOut, "Payment already released");

        job.isPaidOut = true;

        // Transfer funds to freelancer
        require(
            token.transfer(job.assignedFreelancer, job.amount),
            "Token transfer failed"
        );
    }
}
