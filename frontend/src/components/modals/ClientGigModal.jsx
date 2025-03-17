import React from "react";

function ClientGigModal({ visible, onClose, item }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="md:grid md:grid-rows-7 shadow-xs bg-white w-full md:w-[30%] h-[50%] rounded-[5px] p-4">
        client gig modal
      </div>
    </div>
  );
}

export default ClientGigModal;
