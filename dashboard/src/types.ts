import React from "react";

export interface ChildrenProps {
  children: React.ReactElement | React.ReactElement[];
}

export interface IMenulist {
  title: string;
  type: "item" | "collapse" | "group";
  url?: string;
  icon?: React.ElementType;
  children?: IMenulist[];
}

export interface ICategory {
  _id: string;
  name: string;
  categoryImg: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategoryDTO {
  name: string;
  categoryImg: string;
}

export interface IFoodDTO {
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  categoryId: string;
}

export interface IFood {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  categoryId: ICategory;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
