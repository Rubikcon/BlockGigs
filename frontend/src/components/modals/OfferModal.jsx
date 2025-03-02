import React from "react";

function OfferModal({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div
      className="fixed bg-black inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center"
      style={{ backdropFilter: "blur(4px)" }}
    >
      This is a modal
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default OfferModal;
