import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { categorySchema } from "../../form_validation";
import Input from "../../compnents/ui/input";
import Button from "../../compnents/ui/button";
import ImageUpload from "../../compnents/ui/image_upload";
import { useCreateCategoryMutation } from "../../redux/api/category_slice";
import { ICategoryDTO } from "../../types";

const CreateCategory: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ICategoryDTO>({
    resolver: zodResolver(categorySchema),
  });

  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("categoryImg", data?.categoryImg?.[0]);
    const response = await createCategory(formData).unwrap();
    if (response) {
      reset();
    }
  };

  // Watch to verify that the file is selected
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="space-y-6"
      >
        <div className="flex flex-row space-x-6">
          <div className="w-2/3">
            <Input
              errors={errors}
              register={register}
              placeholder="Category title"
              name="name"
              type="text"
            />
          </div>
          <ImageUpload
            name="categoryImg"
            register={register}
            multiple={false}
            setValue={setValue}
            errors={errors}
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="py-1 md:py-2 max-w-[200px]"
        >
          {isLoading ? "Loading..." : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default CreateCategory;
