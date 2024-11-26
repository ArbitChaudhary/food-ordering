import { ICategory } from "../../types";
import { apiSlice } from "./apiSlice";

interface ICategoryResponse {
  categories: ICategory[];
}

export const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data: any) => ({
        url: "/category/create-category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    getAllCategory: builder.query<ICategoryResponse, void>({
      query: () => {
        return {
          url: `/category/get-categories`,
          validateStatus: (response: any, result: any) =>
            // eslint-disable-next-line
            response.status === 200 && !result.isError,
        };
      },
      keepUnusedDataFor: 600,
      transformResponse: (response: ICategoryResponse) => response,
      providesTags: (result, _err, _arg) => {
        if (result) {
          return [
            ...result?.categories?.map(({ _id }) => ({
              type: "Category" as const,
              _id,
            })),
            "Category",
          ];
        }
        return ["Category"];
      },
    }),
    getCategoryById: builder.query<ICategory, string>({
      query: (categoryId: string) => ({
        url: `/category/get-category/${categoryId}`,
        method: "GET",
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ data, _id }) => ({
        url: `/category/${_id}`,
        method: "PATCH",
        body: data,
        headers: {
          // Allow multipart/form-data; RTK won't serialize the body
          "Content-Type": undefined,
        },
      }),
      invalidatesTags: (_, error, { _id }) => {
        if (error) {
          return [];
        }
        return [{ type: "Category", _id }];
      },
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_, error, { id }) => {
        if (error) {
          return [];
        }
        return [{ type: "Category", id }];
      },
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categorySlice;
