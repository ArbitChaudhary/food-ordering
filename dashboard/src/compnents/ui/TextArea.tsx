import { UseFormRegister } from "react-hook-form";

interface ITextArea {
  register: UseFormRegister<any>;
  name: string;
  errors: any;
  placeholder: string;
}

const TextArea: React.FC<ITextArea> = ({
  register,
  name,
  errors,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      <textarea
        className="rounded-md px-2 py-2 md:py-3 focus:outline-blue-700 border w-[100%] h-32"
        {...register(name)}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {errors[name] && (
        <div className="text-red-500 text-sm">
          {errors[name]?.message as any}
        </div>
      )}
    </div>
  );
};

export default TextArea;
