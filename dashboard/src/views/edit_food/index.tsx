import { useParams } from "react-router-dom";
import Heading from "../../compnents/ui/heading";
import FoodEditForm from "./components/food_edit_form";
import { useGetFoodQuery } from "../../redux/api/food_slice";
import PageLoader from "../../compnents/ui/loader/page_loader";
import { IFood } from "../../types";

const FoodEditView = () => {
  const { food_id } = useParams();
  console.log(food_id);
  const { isLoading: foodLoading, data: food } = useGetFoodQuery({
    id: food_id as string,
  });
  if (foodLoading) {
    return <PageLoader />;
  }
  return (
    <div className="mainContainer">
      <Heading title="Edit Food" />
      <FoodEditForm food={food as IFood} />
    </div>
  );
};

export default FoodEditView;
