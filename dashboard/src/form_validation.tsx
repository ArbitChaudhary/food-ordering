import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export const categorySchema = z.object({
  name: z.string().min(1, "Category title is required"),
  categoryImg: z
    .custom<FileList | File>(
      (value) => value instanceof File || value instanceof FileList
    )
    .refine((value) => {
      const file = value instanceof FileList ? value[0] : value;
      return file?.type.startsWith("image/");
    }, "File must be an image")
    .refine((value) => {
      const file = value instanceof FileList ? value[0] : value;
      return file?.size <= MAX_FILE_SIZE;
    }, `File size should not exceed ${MAX_FILE_SIZE / 1024 / 1024} MB`),
});
