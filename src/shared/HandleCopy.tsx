import toast from "react-hot-toast";
import { Icons } from "./Icons";
import { useState } from "react";

interface IProps {
  title?: string;
  CopyText: string;
  type: string;
  className?: string;
  parentClass?: string;
  fill?: string
}

const HandleCopy = ({ title, CopyText, type, className, parentClass, fill='white' }: any) => {
  // reference id section
  const [copy, setCopyId] = useState(false);
  const handleCopyItem = (type: "copyId" | "copyLink") => {
    if (type === "copyId") {
      navigator.clipboard.writeText(CopyText as string);
      toast.success("Copied!");
      setCopyId(true);
    }
  };
  return (
    <div
      className={`flex-row items-center gap-2 text-xs lg:text-base w-full ${
        parentClass == "flex-none" ? "flex-none" : "flex"
      }`}
    >
      <div className="w-full flex items-center  pr-0">
        <p
          className={className ? className : `w-full font-semibold placeholder:text-xs text-sm bg-transparent`}
        >
          {title}
        </p>
      </div>
      <button
        onClick={() => handleCopyItem("copyId")}
        id="copyId"
        className="flex items-center justify-center gap-2"
      >
        <p className={`text-sm ${className}`}>{CopyText}</p>
        <Icons.Copy_Card className={`fill-${fill}`}/>
      </button>
    </div>
  );
};

export default HandleCopy;
