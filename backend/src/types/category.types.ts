export interface ICategoryDTO {
  _id: string;
  name: string;
  categoryImg: string;
}

export interface ICategory {
  _id: string;
  name: string;
  categoryImg: string;
  createdAt: Date;
  updatedAt: Date;
}
