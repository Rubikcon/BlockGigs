// import React from 'react'

function ClientFailureModal({ onClose }) {
  return (
    <div className="shadow-xs bg-white w-full md:w-[30%] h-[60%] rounded-[5px] p-4 grid grid-cols-6 gap-4 overflow-auto">
      <img
        src={close}
        alt=""
        className="col-span-1 float-right"
        onClick={onClose}
      />
      <div>cvdgdgfuufgg</div>
    </div>
  );
}

export default ClientFailureModal;
