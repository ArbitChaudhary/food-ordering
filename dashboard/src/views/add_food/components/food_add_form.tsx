import Button from "../../../compnents/ui/button";
import Input from "../../../compnents/ui/input";
import { useForm } from "react-hook-form";
import TextArea from "../../../compnents/ui/TextArea";
import ImageUpload from "../../../compnents/ui/image_upload";
import { IFoodDTO } from "../../../types";
import Select from "../../../compnents/ui/select";
import { useGetAllCategoryQuery } from "../../../redux/api/category_slice";
import PageLoader from "../../../compnents/ui/loader/page_loader";
import { useCreateFoodMutation } from "../../../redux/api/food_slice";

const FoodAddForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFoodDTO>();

  const { isLoading, data: category } = useGetAllCategoryQuery();

  const [createFood, { isLoading: createLoading }] = useCreateFoodMutation();
  const onSubmit = async (data: IFoodDTO) => {
    const formData = new FormData();

    formData.append("image", data?.image?.[0]);
    // formData.append("name", data?.name);
    // formData.append("categoryId", data.categoryId);
    // formData.append("price", data.price.toString());
    // if (data.discount) formData.append("discount", data.discount.toString());
    // formData.append("description", data.description);
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "image") {
        // Skip image as it's already appended
        formData.append(
          key,
          typeof value === "number" ? value.toString() : (value as string)
        );
      }
    });

    await createFood(formData).unwrap();
  };

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="mainContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
            <Input
              register={register}
              errors={errors}
              name="name"
              placeholder="Name"
              type="text"
            />
            <Select
              register={register}
              errors={errors}
              name="categoryId"
              label="Select Category"
              options={category?.categories}
            />
            <Input
              register={register}
              name="price"
              type="number"
              placeholder="Price"
              errors={errors}
            />
            <Input
              register={register}
              type="number"
              name="discount"
              errors={errors}
              placeholder="Discount"
            />
          </div>
          <TextArea
            name="description"
            placeholder="Description"
            register={register}
            errors={errors}
          />
          <ImageUpload
            name="image"
            errors={errors}
            register={register}
            setValue={setValue}
            multiple={false}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="mx-4 my-1 md:my-2 bg-green-500"
            disabled={createLoading}
          >
            {createLoading ? "Loading..." : "Add Food"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FoodAddForm;
