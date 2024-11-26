import React from "react";
import { UseFormRegister } from "react-hook-form";

interface ISelect {
  name: string;
  options?: any;
  register: UseFormRegister<any>;
  errors?: any;
  label: string;
}

const Select: React.FC<ISelect> = ({
  name,
  options,
  register,
  errors,
  label,
  ...props
}) => {
  return (
    <div>
      <select
        {...register(name)}
        className="rounded-md px-2 py-2 md:py-3 focus:outline-blue-700 border w-[100%] bg-transparent text-gray-600"
        {...props}
      >
        <option value={undefined} className="text-gray-500">
          {label}
        </option>
        {options?.map((item: any, index: number) => (
          <option value={item._id} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      {errors?.name && (
        <span className="text-sm text-red-500">{errors?.name?.message}</span>
      )}
    </div>
  );
};

export default Select;
