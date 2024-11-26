import { useEffect } from "react";
import { ChildrenProps } from "../../types";
import { MdClose } from "react-icons/md";

interface IDialog extends ChildrenProps {
  title?: string | undefined;
  setIsDialogOpen?: any;
  className?: any;
  isDialogOpen?: boolean | undefined;
}

const DialogLayout: React.FC<IDialog> = ({
  children,
  title,
  setIsDialogOpen,
  className,
  isDialogOpen,
}) => {
  useEffect(() => {
    if (isDialogOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDialogOpen]);
  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-opacity-50 bg-black">
      <div className={`flex flex-col ${className}`}>
        <div className="flex items-center justify-between gap-10">
          <div className="text-[16px] font-medium text-opacity-80">{title}</div>
          <MdClose
            className="text-xl md:text-2xl rounded-full hover:bg-gray-300 hover:cursor-pointer"
            onClick={() => setIsDialogOpen(false)}
          />
        </div>{" "}
        <hr className="mt-1" />
        <div className="mt-5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default DialogLayout;
