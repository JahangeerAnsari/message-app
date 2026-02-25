import z from "zod";

export const initialFormSchema = z.object({
    name: z.string().min(1,"Name is Required.."),
    imageUrl:z.string().min(1,"Image is required field")
})