import { useMemo } from "react";
import { useGetAllCategoryQuery } from "../../redux/api/category_slice";
import PageLoader from "../../compnents/ui/loader/page_loader";
import CategoryCard from "./category_card";

const AllCategory = () => {
  const { data, isLoading, error, isError } = useGetAllCategoryQuery();

  const allCategory = useMemo(() => data?.categories || [], [data?.categories]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return (
      <>
        {error ? (
          <div className="text-red-500 text-2xl text-center">
            {error as any}
          </div>
        ) : (
          <div className="text-red-500 text-2xl text-center">
            Error fetching categories
          </div>
        )}
      </>
    );
  }
  return (
    <div className="">
      {allCategory?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {allCategory.map((item, index) => (
            <div key={index}>
              <CategoryCard category={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-red-500 text-2xl text-center">No data found</div>
      )}
    </div>
  );
};

export default AllCategory;
