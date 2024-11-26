import Heading from "../../compnents/ui/heading";
import FoodAddForm from "./components/food_add_form";

const AddFoodView = () => {
  return (
    <div className="mainContainer">
      <Heading title="Add Food" />
      <FoodAddForm />
    </div>
  );
};

export default AddFoodView;
