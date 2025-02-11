import { Clipboard, ClipboardCheck } from "lucide-react";

const CopyEmail = ({ email, handle, copied }) => {
  return (
    <>
      <button
        onClick={handle}
        className={`${
          copied ? "bg-yellow-200" : "bg-teal-300"
        } flex p-1 my-2 items-center justify-center bg-teal-300 text-black rounded-lg `}
      >
        {copied ? (
          <ClipboardCheck className="w-5 h-5" />
        ) : (
          <Clipboard className="w-5 h-5 " />
        )}
        <h4 className="font-base text-xs px-1 cursor-pointer">{email}</h4>
      </button>
    </>
  );
};
export default CopyEmail;
