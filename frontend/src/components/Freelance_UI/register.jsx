import { useState } from "react";
import { Contract } from "ethers";
import { BrowserProvider } from "ethers";
import CONTRACT_ABI from "./contractDetails/contractABI.json";
import ConnectWallet from "./ConnectWallet";
import AddFreelancer from "./AddFreelancer";
import PostJob from "./PostJob";
import ApproveMilestone from "./ApproveMilestone";
import CompleteJob from "./CompleteJob";
// import contractABI from "./contractDetails/contractABI";

const CONTRACT_ADDRESS = "0xbC66956Dd11EFbB01296107A23AfA3635d192035";

function Register() {
  const [signer, setSigner] = useState(null);
  const contract = signer
    ? new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
    : null;

  return (
    <div className="p-6">
      <ConnectWallet setSigner={setSigner} />
      <AddFreelancer contract={contract} signer={signer} />
      <PostJob contract={contract} />
      <ApproveMilestone contract={contract} />
      <CompleteJob contract={contract} />
    </div>
  );
}

export default Register;
