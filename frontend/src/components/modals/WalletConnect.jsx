import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import close from "../../assets/close.png";
import WalletModal from "./WalletModal";

function WalletConnect({ visible, onClose, item, onConnectAnother }) {
  const [openConnect, setOpenConnect] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  // const [connect, setConnect] = useState(null);
  // const [setItem] = useState();
  // const navigate = useNavigate();
  if (!visible) return null;

  // const selectedConnectHandler = (item) => {
  //   console.log(item, "connwct");

  //   setOpenConnect(true);
  //   setConnect(item);
  //   // setItem(item);
  // };
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="grid grid-rows-8 md:w-[23%] h-[45%] bg-white shadow-xl shadow-gray-300 px-4 py-6 rounded-[5px]">
        <div className="row-span-1 justify-between flex">
          <span className="font-bold text-[14px]">Wallet Connection</span>
          <img
            src={close}
            alt=""
            className=" w-3 h-3 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <p className="text-gray-400 row-span-1 text-[14px] text-center">
          Success, Your Wallet has been connected for Payments
        </p>
        <div className="grid row-span-6 mt-6 items-center">
          <div className="flex gap-2 w-full rounded-[5px] bg-gray-200 justify-start p-3 hover:scale-105 duration-170">
            <img src={item.icon} alt="" className="w-4 h-4" />
            <span className="text-[14px] -mt-1">{item.name}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 row-span-1 gap-1.5">
          <button
            className="col-span-2 bg-[#2f66f6] rounded text-white text-[14px] py-2 cursor-pointer hover:scale-105 duration-150"
            onClick={onConnectAnother}
          >
            Connect Another Wallet
          </button>
          <button
            className="col-span-1 border-2 border-[#dc2626] rounded text-[#dc2626] text-[14px] cursor-pointer hover:scale-105 duration-150"
            onClick={onClose}
          >
            Disconnect
          </button>
        </div>
      </div>
      <WalletModal
        visible={openWallet}
        onClose={() => setOpenWallet(false)}
        onItemsClick={(item) => {
          setOpenWallet(false);
          onClose();
          onConnectAnother();
        }}
      />
    </div>
  );
}

export default WalletConnect;
