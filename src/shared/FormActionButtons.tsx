import { useActionContext } from "@/components/AuthContext/ActionContext";
import { Icons } from "@/shared";
import RoundedBtn from "@/shared/RoundedBtn";
import React, { FC } from "react";

interface IProps {
  step: number;
  setStep: (value: number) => void;
}

// footer actions button cancel it close the accordion

const FormActionButtons: FC<IProps> = ({ step, setStep }) => {
  // cancel button state
  const { setActionValue } = useActionContext();
  return (
    <div className="flex items-center justify-between w-full gap-0 sm:gap-7 mt-5">
      <RoundedBtn
        type="button"
        onClick={() => setStep(step - 1)}
        className={`bg-transparent !px-2`}
      >
        <Icons.Back className={`fill-white ${step <= 1 ? "hidden" : "show"}`} />
      </RoundedBtn>
      <div className="flex items-center gap-0 sm:gap-7">
        <RoundedBtn
          type="button"
          onClick={() => setActionValue(0)}
          className="bg-transparent px-7"
        >
          Close
        </RoundedBtn>
        <RoundedBtn
          type="button"
          onClick={() => setStep(step + 1)}
          className="!text-first-500 bg-white px-7"
        >
          Next
        </RoundedBtn>
      </div>
    </div>
  );
};

export default FormActionButtons;
