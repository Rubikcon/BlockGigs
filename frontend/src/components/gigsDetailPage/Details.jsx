// import RelatedGigs from "./RelatedGigs";

// const Detail = () => {
//   return (
//     <div className="relative flex flex-col md:flex-row md:gap-10 w-[80%] mx-auto h-full p-4">
//       {/* Left Section - Main Details */}
//       <section className="flex-1 min-w-[300px] p-4">
//         {[
//           {
//             title: "Details",
//             content: (
//               <p className="text-justify">
//                 We are seeking a creative and detail-oriented Product Design
//                 Intern to join the CryptoKitties team. In this role, you will
//                 collaborate with our design and development teams to help create
//                 engaging and intuitive user experiences for our blockchain-based
//                 collectibles game. Your work will involve designing new UI
//                 components, optimizing user flows, and contributing to the
//                 overall visual aesthetics of the platform. This is an exciting
//                 opportunity to work in the web3 space and gain hands-on
//                 experience in product design for a well-established blockchain
//                 project.
//               </p>
//             ),
//           },
//           {
//             title: "Responsibilities",
//             list: [
//               "Design new UI components and optimize existing ones.",
//               "Collaborate with design and development teams to improve user flows.",
//               "Contribute to the overall visual aesthetics of the CryptoKitties platform.",
//               "Ensure designs are aligned with the brand and user experience goals.",
//             ],
//           },
//           {
//             title: "Skills Required",
//             list: [
//               "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
//               "Strong understanding of user interface and experience design principles.",
//               "Familiarity with web3, blockchain, or gaming projects is a plus.",
//               "Ability to work collaboratively and communicate design ideas effectively.",
//             ],
//           },
//           {
//             title: "Reward",
//             list: [
//               "Hands-on experience with a leading blockchain project.",
//               "Opportunity to work on cutting-edge web3 design and innovation.",
//               "Mentorship from experienced product designers and developers.",
//               "Potential for career growth in the web3 and blockchain industries.",
//               "Competitive compensation, possibly including crypto-based payments.",
//             ],
//           },
//         ].map(({ title, content, list }, index) => (
//           <div
//             key={index}
//             className=" rounded-lg shadow-lg p-10 bg-white dark:bg-gray-800"
//           >
//             <h2 className="text-xl font-semibold mb-3 text-left">{title}</h2>
//             {content}
//             {list && (
//               <ul className="list-disc pl-5 space-y-2">
//                 {list.map((item, i) => (
//                   <li key={i} className="text-justify">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </section>

//       {/* Right Section - Related Gigs */}
//       <section className="flex-1 min-w-[300px] p-4">
//         <div className=" rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
//           <h2 className="text-xl font-semibold mb-3 text-left">Related Gigs</h2>
//           <RelatedGigs />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Detail;

import RelatedGigs from "./RelatedGigs";

const Detail = () => {
  return (
    <div className="relative flex flex-wrap lg:flex-nowrap gap-10 w-[95%] mx-auto h-full p-4">
      {/* Left Section - Main Details */}
      <section className="flex-1 min-w-[300px] p-4">
        {[
          {
            title: "Details",
            content: (
              <p className="text-justify">
                We are seeking a creative and detail-oriented Product Design
                Intern to join the CryptoKitties team. In this role, you will
                collaborate with our design and development teams to help create
                engaging and intuitive user experiences for our blockchain-based
                collectibles game. Your work will involve designing new UI
                components, optimizing user flows, and contributing to the
                overall visual aesthetics of the platform. This is an exciting
                opportunity to work in the web3 space and gain hands-on
                experience in product design for a well-established blockchain
                project.
              </p>
            ),
          },
          {
            title: "Responsibilities",
            list: [
              "Design new UI components and optimize existing ones.",
              "Collaborate with design and development teams to improve user flows.",
              "Contribute to the overall visual aesthetics of the CryptoKitties platform.",
              "Ensure designs are aligned with the brand and user experience goals.",
            ],
          },
          {
            title: "Skills Required",
            list: [
              "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
              "Strong understanding of user interface and experience design principles.",
              "Familiarity with web3, blockchain, or gaming projects is a plus.",
              "Ability to work collaboratively and communicate design ideas effectively.",
            ],
          },
          {
            title: "Reward",
            list: [
              "Hands-on experience with a leading blockchain project.",
              "Opportunity to work on cutting-edge web3 design and innovation.",
              "Mentorship from experienced product designers and developers.",
              "Potential for career growth in the web3 and blockchain industries.",
              "Competitive compensation, possibly including crypto-based payments.",
            ],
          },
        ].map(({ title, content, list }, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-10 my-5 bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-3 text-left">{title}</h2>
            {content}
            {list && (
              <ul className="list-disc pl-5 space-y-2">
                {list.map((item, i) => (
                  <li key={i} className="text-justify">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Right Section - Related Gigs */}
      <section className="flex-1 min-w-[300px] p-4">
        <div className="rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-3 text-left">Related Gigs</h2>
          <RelatedGigs />
        </div>
      </section>
    </div>
  );
};

export default Detail;
