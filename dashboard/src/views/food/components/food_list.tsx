import React, { useMemo } from "react";
import { useGetAllFoodQuery } from "../../../redux/api/food_slice";
import PageLoader from "../../../compnents/ui/loader/page_loader";
import FoodCard from "./food_card";

const FoodList: React.FC = () => {
  const { data, isLoading } = useGetAllFoodQuery();
  const allFood = useMemo(() => data?.food || [], [data?.food]);
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {allFood?.length > 0 && (
        <>
          {allFood?.map((food) => (
            <FoodCard food={food} key={food._id} />
          ))}
        </>
      )}
    </div>
  );
};

export default FoodList;
