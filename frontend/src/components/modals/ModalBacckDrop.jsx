// import React from "react";

function ModalBacckDrop({ children }) {
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      {children}
    </div>
  );
}

export default ModalBacckDrop;
