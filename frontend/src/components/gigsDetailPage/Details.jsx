import { useState, useEffect } from "react";
import RelatedGigs from "./RelatedGigs";
import ApplicantsCard from "../Cards/ApplicantsCard";

const Detail = ({ gig }) => {
  const [role, setRole] = useState("talent");
  const storedRole = localStorage.getItem("userRole");
  useEffect(() => {
    setRole(storedRole || "");
    console.log(storedRole);
  }, [gig]);

  console.log(storedRole);
  return (
    <div className="relative flex flex-wrap lg:flex-nowrap gap-10 w-[95%] mx-auto h-full p-4">
      <section className="flex-1 min-w-[300px] p-4">
        <div className="rounded-lg shadow-lg p-10 my-5 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-3 text-left">Details</h2>

          <p className="text-justify">{gig.detail}</p>
        </div>

        <div className="rounded-lg shadow-lg p-10 my-5 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-3 text-left">Milestones</h2>

          <ul className="list-disc pl-5 space-y-2">
            {gig.milestones.map((milestone, i) => (
              <li key={i}>
                {milestone.description} — {milestone.amount} ETH, Deadline:{" "}
                {new Date(milestone.deadline).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>

        {/* You can also add Skills, Responsibilities, Reward if you include them in the backend */}
      </section>

      <section className="flex-1 min-w-[300px] items-center">
        {role === "client" ? (
          <ApplicantsCard gigId={gig._id} />
        ) : (
          <RelatedGigs />
        )}
      </section>
    </div>
  );
};

export default Detail;
