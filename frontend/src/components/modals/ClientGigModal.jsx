import { useState } from "react";
import PropTypes from "prop-types";
import crypto from "../../assets/crypto.png";
import down from "../../assets/down.png";
import { postApi } from "../../helpers";

import close from "../../assets/close.png";
import ModalBacckDrop from "./ModalBacckDrop";
import FormModal from "./FormModal";
import ConfirmationModal from "./ConfirmationModal";
import ClientFailureModal from "./ClientFailureModal";
import ClientSuccessModal from "./ClientSuccessModal";

function ClientGigModal({ visible, onClose }) {
  const [post, setPost] = useState("form");
  const [gig, setGig] = useState({
    title: "",
    totalPrice: "",
    detail: "",
    milestone: 1,
    milestones: [{ description: "", deadline: "", amount: 0 }],
    talent: null,
    accepted: false,
  });
  if (!visible) return null;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "milestone") {
      const milestoneCount = Math.max(1, parseInt(value, 10) || 1);
      const milestones = Array.from({ length: milestoneCount }, (_, index) => ({
        description: gig.milestones[index]?.description || "",
        deadline: gig.milestones[index]?.deadline || "",
        amount: gig.milestones[index]?.amount || 0,
      }));
      setGig({
        ...gig,
        [name]: milestoneCount,
        milestones,
      });
    } else {
      setGig({
        ...gig,
        [name]: value,
      });
    }
  };

  const onMilestoneChangeHandler = (index, field, value) => {
    const updatedMilestones = [...gig.milestones];
    updatedMilestones[index] = {
      ...updatedMilestones[index],
      [field]: value,
    };
    setGig({
      ...gig,
      milestones: updatedMilestones,
    });
  };

  const submitGigHandler = () => {
    console.log(gig, "gig");

    postApi(
      "job/create",
      gig,
      (res) => {
        setPost("success"), console.log(res, "Post saved successfully");
      },
      (e) => {
        setPost("error"),
          console.log(e, "Error made while trying to save post");
      }
    );
    setGig({
      title: "",
      totalPrice: "",
      detail: "",
      milestone: 1,
      milestones: [{ description: "", deadline: "", amount: 0 }],
      talent: null,
      accepted: false,
    });
  };

  const onCloseConfirmHandler = () => {
    setPost(1);
    onClose();
    setGig({
      title: "",
      totalPrice: "",
      detail: "",
      milestone: 1,
      milestones: [{ description: "", deadline: "", amount: 0 }],
      talent: null,
      accepted: false,
    });
  };

  console.log(post, "post");

  // const renderMilestones = () => {
  //   const milestones = [];
  //   for (let i = 0; i < gig.milestone; i++) {
  //     milestones.push(
  //       <div key={i} className="grid grid-cols-4 gap-2 mb-4">
  //         <p className="col-span-1 text-[14px]">#{i + 1} Milestone</p>
  //         <div className="col-span-3">
  //           <p className="text-[14px]">description</p>
  //           <input
  //             placeholder={`Milestones ${i + 1} involves...`}
  //             className="w-full border border-gray-400 focus:outline-none rounded text-[14px] py-2 pl-2"
  //             type="text"
  //             value={gig.milestones[i]?.description || ""}
  //             onChange={(e) =>
  //               onMilestoneChangeHandler(i, "description", e.target.value)
  //             }
  //           />
  //         </div>
  //         <div className="col-start-2 grid grid-cols-2 col-span-3 gap-2">
  //           <div className="col-span-1">
  //             <p>Deadline</p>
  //             <div className="flex border border-gray-400 rounded pl-2 py-1">
  //               <input
  //                 type="date"
  //                 className="focus:outline-none py-1 text-[14px] w-full"
  //                 value={gig.milestones[i]?.deadline || ""}
  //                 onChange={(e) =>
  //                   onMilestoneChangeHandler(i, "deadline", e.target.value)
  //                 }
  //               />
  //             </div>
  //           </div>
  //           <div className="col-span-1">
  //             <p>#{i + 1} totalPrice</p>
  //             <div className="grid grid-cols-4 border border-gray-400 rounded">
  //               <div className="flex gap-1 items-center border-r border-gray-400 col-span-2 px-2 py-2.5">
  //                 <img
  //                   src={crypto}
  //                   alt="Currency icon"
  //                   className="w-3 h-3 md:w-4 md:h-4"
  //                 />
  //                 <p className="text-[#2f66f6] text-[12px] md:text-[14px]">
  //                   Usdc
  //                 </p>
  //               </div>
  //               <input
  //                 placeholder="0.00"
  //                 type="number"
  //                 className="col-span-2 focus:outline-none pl-2 text-[12px]"
  //                 value={gig.milestones[i]?.amount || ""}
  //                 onChange={(e) =>
  //                   onMilestoneChangeHandler(i, "amount", e.target.value)
  //                 }
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return milestones;
  // };

  return (
    <ModalBacckDrop>
      {" "}
      {post === "form" && (
        <FormModal
          gig={gig}
          onChange={onChangeHandler}
          onMilestoneChange={onMilestoneChangeHandler}
          onSubmit={() => setPost("confirmation")}
          onClose={onClose}
        />
      )}
      {post === "confirmation" && (
        <ConfirmationModal
          onSubmit={submitGigHandler}
          onCloseConfirm={onCloseConfirmHandler}
        />
      )}
      {post === "success" && <ClientSuccessModal onClose={onClose} />}
      {post === "error" && <ClientFailureModal onClose={onClose} />}
    </ModalBacckDrop>
  );
}

ClientGigModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ClientGigModal;
