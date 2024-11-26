import { IFood } from "../../types";
import { apiSlice } from "./apiSlice";

interface IFoodResponse {
  food: IFood[];
}

export const foodSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFood: builder.mutation({
      query: (data: any) => ({
        url: "/food/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Food"],
    }),
    getAllFood: builder.query<IFoodResponse, void>({
      query: () => {
        return {
          url: "/food/get",
          validateStatus: (response: any, result: any) =>
            response.status === 200 && !result.isError,
        };
      },
      keepUnusedDataFor: 600,
      transformResponse: (response: IFoodResponse) => response,
      providesTags: (result, _err, _arg) => {
        if (result) {
          return [
            ...result?.food?.map(({ _id }) => ({
              type: "Food" as const,
              _id,
            })),
            "Food",
          ];
        }
        return ["Food"];
      },
    }),
    getFood: builder.query<IFood, { id: string }>({
      query: ({ id }) => ({
        url: `/food/${id}`,
        validateStatus: (response: any, result: any) =>
          response.status === 200 && !result.isError,
      }),
      keepUnusedDataFor: 600,
      transformResponse: (response: IFood) => response,
      providesTags: (_result, _error, { id }) => [{ type: "Food", _id: id }],
    }),
  }),
});

export const { useCreateFoodMutation, useGetAllFoodQuery, useGetFoodQuery } =
  foodSlice;
