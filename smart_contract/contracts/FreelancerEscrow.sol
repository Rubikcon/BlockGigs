// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title FreelancerEscrow
 * @dev A smart contract for managing freelancer jobs using ERC20 tokens.
 *      Clients can post jobs, assign freelancers, and release payments after job completion.
 */
contract FreelancerEscrow is ReentrancyGuard {
    IERC20 public token; // ERC20 token used for payments

    // Constructor sets the token address during deployment
    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    /**
     * @dev Structure to store freelancer details.
     * @param name Name of the freelancer.
     * @param walletAddress Wallet address of the freelancer.
     * @param isRegistered Status to check if freelancer is registered.
     */
    struct Freelancer {
        string name;
        address walletAddress;
        bool isRegistered;
    }

    /**
     * @dev Structure to store job details.
     * @param client Address of the client posting the job.
     * @param description Description of the job.
     * @param amount Payment amount locked in contract.
     * @param assignedFreelancer Address of the freelancer assigned to the job.
     * @param isCompleted Status to check if the job is completed.
     * @param isPaidOut Status to check if payment has been released.
     */
    struct Job {
        address client;
        string description;
        uint256 amount;
        address assignedFreelancer;
        bool isCompleted;
        bool isPaidOut;
    }

    // Mapping to store registered freelancers
    mapping(address => Freelancer) public freelancers;

    // Mapping to store jobs with job ID as the key
    mapping(uint256 => Job) public jobs;

    // Counter to track the total number of jobs
    uint256 public jobCounter;

    /** Events for frontend tracking **/
    event FreelancerRegistered(address indexed freelancer, string name);
    event JobPosted(
        uint256 indexed jobId,
        address indexed client,
        string description,
        uint256 amount
    );
    event FreelancerAssigned(uint256 indexed jobId, address indexed freelancer);
    event JobCompleted(uint256 indexed jobId);
    event PaymentReleased(
        uint256 indexed jobId,
        address indexed freelancer,
        uint256 amount
    );

    /**
     * @dev Registers a freelancer with their wallet address.
     * @param _name Name of the freelancer.
     */
    function registerFreelancer(string memory _name) public {
        require(!freelancers[msg.sender].isRegistered, "Already registered");

        freelancers[msg.sender] = Freelancer({
            name: _name,
            walletAddress: msg.sender,
            isRegistered: true
        });

        emit FreelancerRegistered(msg.sender, _name); // Emit event for frontend tracking
    }

    /**
     * @dev Allows a client to post a job by locking funds in the contract.
     * @param _description Description of the job.
     * @param _amount Amount to be locked for payment.
     */
    function postJob(
        string memory _description,
        uint256 _amount
    ) external nonReentrant {
        require(_amount > 0, "Amount must be greater than zero");

        // Transfer tokens from the client to the contract (approval required)
        require(
            token.transferFrom(msg.sender, address(this), _amount),
            "Token transfer failed"
        );

        // Store the job details
        jobs[jobCounter] = Job({
            client: msg.sender,
            description: _description,
            amount: _amount,
            assignedFreelancer: address(0),
            isCompleted: false,
            isPaidOut: false
        });

        emit JobPosted(jobCounter, msg.sender, _description, _amount); // Emit event

        jobCounter++; // Increment job counter
    }

    /**
     * @dev Allows a client to assign a freelancer to a job.
     * @param _jobId ID of the job.
     * @param _freelancer Address of the freelancer.
     */
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

        emit FreelancerAssigned(_jobId, _freelancer); // Emit event
    }

    /**
     * @dev Allows an assigned freelancer to mark a job as completed.
     * @param _jobId ID of the job.
     */
    function completeJob(uint256 _jobId) external {
        Job storage job = jobs[_jobId];

        require(
            freelancers[msg.sender].isRegistered,
            "Only registered freelancers can complete jobs"
        );
        require(
            msg.sender == job.assignedFreelancer,
            "Only assigned freelancer can complete job"
        );
        require(!job.isCompleted, "Job already completed");

        job.isCompleted = true;

        emit JobCompleted(_jobId); // Emit event
    }

    /**
     * @dev Allows the client to release payment to the freelancer after job completion.
     * @param _jobId ID of the job.
     */
    function releasePayment(uint256 _jobId) external nonReentrant {
        Job storage job = jobs[_jobId];

        require(msg.sender == job.client, "Only client can release payment");
        require(job.isCompleted, "Job is not completed");
        require(!job.isPaidOut, "Payment already released");

        job.isPaidOut = true;

        // Transfer the locked funds to the assigned freelancer
        require(
            token.transfer(job.assignedFreelancer, job.amount),
            "Token transfer failed"
        );

        emit PaymentReleased(_jobId, job.assignedFreelancer, job.amount); // Emit event
    }
}
