import ConnectWallet from "../ConnectWallet";
// import RegisterClient from "../RegisterClient";
// import RegisterFreelancer from "../RegisterFreelancer";
// import PostJob from "../PostJob";
// import AssignFreelancer from "../AssignFreelancer";
// import CompleteJob from "../CompleteJob";
// import ApproveCompletion from "../ApproveCompletion";
// import ReleasePayment from "../ReleasePayment";
// import ResolveDispute from "../ResolveDispute";
// import JobList from "../JobList";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Freelancer Escrow DApp
      </h1>
      <div className="flex flex-col items-center gap-4 mt-10">
        <ConnectWallet />
        {/* <RegisterClient />
        <RegisterFreelancer />
        <PostJob />
        <AssignFreelancer />
        <CompleteJob />
        <ApproveCompletion />
        <ReleasePayment />
        <ResolveDispute />
        <JobList /> */}
      </div>
    </div>
  );
};

export default Home;
