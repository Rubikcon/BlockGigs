import empty from "../../assets/empty.png";

const EmptyCard = ({ props }) => {
  return (
    <div className="grid justify-center mt-4">
      <img src={empty} alt="" className="h-18 w-18" />
      <div className="grid justify-center ">
        <p className="text-black text-[12px] md:text-sm mt-4">No {props} yet</p>
        <p className=" text-[8px] md:text-[10px] -ml-8">
          Keep on applying You got THIS!
        </p>
      </div>
    </div>
  );
};

export default EmptyCard;
