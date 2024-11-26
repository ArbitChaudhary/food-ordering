import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface IImageUpload {
  multiple?: boolean;
  register: UseFormRegister<any>;
  name: string;
  setValue: any;
  errors: any;
  defaultValue?: any;
}

const ImageUpload: React.FC<IImageUpload> = ({
  multiple = false,
  register,
  name,
  errors,
  defaultValue,
}) => {
  // const uploadRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>("");

  // const handleUpload = () => {
  //   if (uploadRef.current) {
  //     uploadRef.current.click();
  //   }
  // };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  useEffect(() => {
    setPreview(defaultValue);
  }, [defaultValue]);
  return (
    <div className="relative">
      <input
        {...register(name)}
        type="file"
        className="max-w-40"
        name={name}
        multiple={multiple}
        accept="image/*"
        onChange={handleFileChange}
      />
      {errors?.categoryImg && (
        <div className="text-red-500 text-sm">
          {errors?.categoryImg?.message as any}
        </div>
      )}
      {preview && (
        <div className={`relative mt-4`}>
          <img src={preview} alt="" className="h-20 w-20 relative" />
        </div>
      )}
    </div>
  );
};
export default ImageUpload;
