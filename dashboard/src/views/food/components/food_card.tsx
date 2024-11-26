import React, { useEffect, useRef, useState } from "react";
import { IFood } from "../../../types";
import { MdOutlineMoreVert, MdEdit, MdOutlineDelete } from "react-icons/md";
import DeleteDialog from "../../../compnents/dialog/delete_dialog";
import { Link } from "react-router-dom";

interface IFoodCard {
  food: IFood;
}

const FoodCard: React.FC<IFoodCard> = ({ food }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event?.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDeleteOpen = () => {
    setIsDeleteOpen(true);
  };
  return (
    <>
      <div className="w-full shadow-md rounded-lg overflow-hidden relative">
        <Link to={`/foods/${food._id}`}>
          <div className="w-full h-[150px] md:h-[200px]">
            <img
              src={food.image}
              alt="food image"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>
        <div className="p-2">
          <Link to={`/foods/${food._id}`}>
            <div className="text-lg text-gray-600 font-semibold">
              {food.name}
            </div>
          </Link>
          <p className="text-sm text-gray-500 [display:-webkit-box] [overflow:hidden] [text-overflow:ellipsis] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {food.description}
          </p>
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-gray-500">
              {food?.categoryId?.name}
            </div>
            <MdOutlineMoreVert
              onClick={handleOpen}
              className="text-2xl p-[2px] text-gray-600 rounded-full hover:bg-gray-100 hover:cursor-pointer"
            />
          </div>
          {isOpen && (
            <div
              ref={dialogRef}
              className="shadow-lg rounded-xl flex flex-col gap-1 py-2 w-[100px] absolute right-7 bottom-4 z-10 bg-white"
            >
              <Link to={`/foods/edit/${food._id}`}>
                <div className=" px-2 py-1 flex flex-row gap-1 items-center text-sm text-gray-600 hover:bg-gray-100">
                  <MdEdit />
                  <span>Edit</span>
                </div>
              </Link>
              <div
                onClick={handleDeleteOpen}
                className="flex px-2 py-1 flex-row gap-1 items-center text-sm text-gray-600 hover:bg-gray-100"
              >
                <MdOutlineDelete />
                <span>Delete</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {isDeleteOpen && (
        <DeleteDialog
          handleDelete={handleDeleteOpen}
          item="Food"
          setIsDialogOpen={setIsDeleteOpen}
          isDialogOpen={isDeleteOpen}
        />
      )}
    </>
  );
};

export default FoodCard;
