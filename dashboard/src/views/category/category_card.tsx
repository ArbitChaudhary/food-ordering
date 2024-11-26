import React, { useState } from "react";
import { ICategory } from "../../types";
import categoryImg from "../../assets/category.png";
import { MdDelete, MdModeEdit } from "react-icons/md";
import EditCategoryDialog from "./edit_category_dialog";
import DeleteDialog from "../../compnents/dialog/delete_dialog";
import { useDeleteCategoryMutation } from "../../redux/api/category_slice";

interface ICategoryCard {
  category: ICategory;
}

const CategoryCard: React.FC<ICategoryCard> = ({ category }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  const [deleteCategory] = useDeleteCategoryMutation();
  const handleEdit = () => {
    setIsDialogOpen(true);
  };

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteCategory = async () => {
    await deleteCategory(category?._id);
  };
  return (
    <div className="rounded-2xl border overflow-hidden w-full max-h-40 p-1">
      <div className={`flex flex-row gap-2 justify-between items-center`}>
        <div className="flex flex-row gap-2">
          <img
            src={category?.categoryImg || categoryImg}
            alt=""
            className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden"
          />
          <div className="responsive_text_22_semibold">{category?.name}</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center md:mr-5">
          <MdModeEdit
            onClick={handleEdit}
            className="text-gray-700 text-2xl md:text-3xl p-[2px] hover:bg-gray-300 hover:cursor-pointer transition duration-200 rounded-full"
          />
          <MdDelete
            onClick={handleDelete}
            className="text-red-700 text-2xl md:text-3xl p-[2px] hover:bg-gray-300 hover:cursor-pointer transition duration-200 rounded-full"
          />
        </div>
        {isDialogOpen && (
          <EditCategoryDialog
            setIsDialogOpen={setIsDialogOpen}
            isDialogOpen={isDialogOpen}
            category={category}
          />
        )}
        {isDeleteDialogOpen && (
          <DeleteDialog
            item="Category"
            handleDelete={handleDeleteCategory}
            isDialogOpen={isDeleteDialogOpen}
            setIsDialogOpen={setIsDeleteDialogOpen}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
