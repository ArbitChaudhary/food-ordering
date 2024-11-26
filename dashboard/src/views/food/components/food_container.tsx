import React from "react";
import { FaDirections } from "react-icons/fa";
import Heading from "../../../compnents/ui/heading";
import RouterButton from "../../../compnents/ui/router_button";
import FoodList from "./food_list";

const FoodContainer: React.FC = () => {
  return (
    <div>
      <div className="flex justify-end">
        {/* <Button className="px:2 py-1 md:py-2 flex flex-row gap-1 items-center justify-center max-w-[150px] ">
          Add Food
          <FaDirections className="" />
        </Button> */}
        <RouterButton
          name="Add Food"
          href="/foods/add-food"
          icon={<FaDirections className="" />}
        />
      </div>
      <Heading title="Food List" />
      <FoodList />
    </div>
  );
};

export default FoodContainer;
