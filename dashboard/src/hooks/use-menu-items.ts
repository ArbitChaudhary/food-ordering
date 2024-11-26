import { IMenulist } from "../types";
import { MdHome, MdMenuBook, MdFastfood, MdRateReview } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";

const useMenuItems = (): { items: IMenulist[] } => {
  const pages: IMenulist = {
    title: "pages",
    type: "group",
    children: [
      {
        title: "Dashboard",
        url: "/",
        icon: MdHome,
        type: "item",
      },
      {
        title: "Order List",
        url: "/order",
        type: "item",
        icon: CgMenuBoxed,
      },
      {
        title: "Customer",
        url: "/customer",
        type: "item",
        icon: IoMdPerson,
      },
      {
        title: "Foods",
        url: "/foods",
        type: "item",
        icon: MdFastfood,
      },
      {
        title: "Category",
        type: "item",
        url: "/category",
        icon: MdMenuBook,
      },
      {
        title: "Reviews",
        type: "item",
        url: "/reviews",
        icon: MdRateReview,
      },
    ],
  };
  return {
    items: [pages],
  };
};

export default useMenuItems;
