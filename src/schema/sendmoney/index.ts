import { z } from "zod";
 
export const dropOfLocationSchema = z.object({ 
    country: z.string({
        required_error: "Please select a Country",
    }),
    location: z.string().min(4, {
        message: "Location must be at least 4 characters.",
    }) 
}) 