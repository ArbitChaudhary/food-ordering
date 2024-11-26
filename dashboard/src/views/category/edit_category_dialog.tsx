import { useForm } from "react-hook-form";
import Input from "../../compnents/ui/input";
import ImageUpload from "../../compnents/ui/image_upload";
import Button from "../../compnents/ui/button";
import DialogLayout from "../../compnents/dialog/dialog_layout";
import React from "react";
import { ICategory } from "../../types";
import { useUpdateCategoryMutation } from "../../redux/api/category_slice";

interface IEditCategoryDialog {
  setIsDialogOpen: any;
  isDialogOpen: boolean | undefined;
  category: ICategory;
}

const EditCategoryDialog: React.FC<IEditCategoryDialog> = ({
  setIsDialogOpen,
  isDialogOpen,
  category,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: React.useMemo(() => category, [category]),
  });
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();
  const onSumbit = async (data: any) => {
    const formData = new FormData();

    formData.append("name", data?.category);
    if (data?.categoryImg[0]) {
      formData.append("categoryImg", data?.categoryImg?.[0]);
    }

    await updateCategory({ data: formData, _id: category?._id });
  };

  return (
    <DialogLayout
      title="Edit Category"
      setIsDialogOpen={setIsDialogOpen}
      isDialogOpen={isDialogOpen}
      className="max-w-[400px] w-full bg-white h-fit mainContainer rounded-md"
    >
      <div className="w-full">
        <form onSubmit={handleSubmit(onSumbit)} className="space-y-6">
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <Input
                name="name"
                placeholder="Title"
                errors={errors}
                register={register}
                type="text"
              />
            </div>
            <ImageUpload
              register={register}
              errors={errors}
              name="categoryImg"
              multiple={false}
              setValue={setValue}
              defaultValue={category?.categoryImg}
            />
          </div>
          <div className="flex flex-row gap-2">
            <Button
              disabled={isLoading}
              type="submit"
              className="py-1 md:py-2 max-w-[150px]"
            >
              {isLoading ? "Saving changes" : "Save changes"}
            </Button>
            <Button
              type="submit"
              onClick={() => setIsDialogOpen(false)}
              className="py-1 md:py-2 max-w-[150px] bg-red-600 hover:bg-opacity-85 transition duration-300"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </DialogLayout>
  );
};

export default EditCategoryDialog;
