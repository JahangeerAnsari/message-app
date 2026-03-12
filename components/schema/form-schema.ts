import z from "zod";
const MAX_FILE_SIZE = 400000; // 500KB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const initialFormSchema = z.object({
    name: z.string().min(1,"Name is Required.."),
    imageUrl:z
    .any()
    .refine((file) => file, "Image is required.")
    // .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 4MB.`)
    // .refine(
    //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    //   "Only .jpg, .jpeg, .png and .webp formats are supported."
    // )
})
export const inviteFormSchema =z.object({
    urlLink:z.string().min(1,"Url link is required.")
})