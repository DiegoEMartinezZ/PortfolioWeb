import { Clipboard, ClipboardCheck } from "lucide-react";

const CopyEmail = ({ email, handle, copied }) => {
  return (
    <>
      <button
        onClick={handle}
        className={`${
          copied ? "bg-yellow-200" : "bg-teal-300"
        } flex p-1 my-2 items-center w-44 justify-center bg-teal-300 text-black rounded-lg `}
      >
        {copied ? (
          <ClipboardCheck className="w-auto h-5 mr-1" />
        ) : (
          <Clipboard className="w-auto h-5 mr-1 " />
        )}
        <h4 className="font-base text-xs  cursor-pointer">{email}</h4>
      </button>
    </>
  );
};
export default CopyEmail;
