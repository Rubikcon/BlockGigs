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
import { jobService } from "../../services/jobService";

function ClientGigModal({ visible, onClose, onSubmit }) {
  const [post, setPost] = useState("form");
  const [disable, setDisable] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
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

  const submitGigHandler = async () => {
    console.log(gig, "gig");
    try {
      // setIsLoading(true);
      const result = await jobService.createJob(gig);
      setPost("success");
      setSuccess("Job created successfully!");
      // Wait a couple seconds then close

      setTimeout(() => {
        onCloseConfirmHandler();
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create job");
      setPost("error");
    } finally {
      setIsLoading(false);
    }
  };

  // const confirmationHandler = () => {
  //   console.log(gig, "gigs for saving here");
  //   if (!gig.detail || !gig.title || !gig.totalPrice) {
  //     alert("Please enter the required detail of the job");
  //     return;
  //   }
  //   setPost("confirmation");
  // };

  const onCloseConfirmHandler = () => {
    setPost("form");
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

  return (
    <ModalBacckDrop>
      {" "}
      {post === "form" && (
        <FormModal
          gig={gig}
          onChange={onChangeHandler}
          onMilestoneChange={onMilestoneChangeHandler}
          onSubmit={submitGigHandler}
          onClose={onClose}
          disable={disable}
        />
      )}
      {post === "success" && (
        <ClientSuccessModal onClose={onCloseConfirmHandler} />
      )}
      {post === "error" && (
        <ClientFailureModal onClose={onCloseConfirmHandler} />
      )}
    </ModalBacckDrop>
  );
}

ClientGigModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  // onsubmit: PropTypes.func.isRequired,
};
export default ClientGigModal;
