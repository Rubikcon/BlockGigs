// import React from 'react'
// import PropTypes from 'prop-types';

function ClientSuccess({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="shadow-xs bg-white w-full md:w-[30%] h-[80%] rounded-[5px] p-4 flex flex-col gap-4 overflow-auto">
        fff
      </div>
    </div>
  );
}

// ClientSuccess.propTypes = {
//     visible: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired
// };

export default ClientSuccess;
