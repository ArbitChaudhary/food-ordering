import Heading from "../../compnents/ui/heading";
import AllCategory from "./all_category";
import CreateCategory from "./create_category";

const CategoryView = () => {
  return (
    <div className="w-full">
      <div className="mainContainer">
        <div className="flex flex-col">
          <CreateCategory />
        </div>
        <div className="mt-[50px] md:mt-[100px]">
          {/* <div className="responsive_text_22_bold mb-10">All Categories</div> */}
          <Heading title="All Category" />
          <AllCategory />
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
