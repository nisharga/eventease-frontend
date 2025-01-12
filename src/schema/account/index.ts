import { z } from "zod";
 
export const kycSchema = z.object({
      fullName: z.string().optional(),
      phone: z.string().min(9, {
        message: "Phone number must be at least 9 characters.",
      }),
      city: z.string().min(4, {
        message: "Country name must be at least 4 characters.",
      }), 
      address: z.string().min(8, {
        message: "Address name must be at least 8 characters.",
      }), 
      email: z.string().optional(), 
      country: z.string({
        required_error: "Please select a Country",
      }),
      state: z.string().min(4, {
        message: "State name must be at least 4 characters.",
      }), 
      documentType: z.string({
        required_error: "Please select a Document Type",
      }),
      zipCode: z.string({
        required_error: "Zip Code is require",
      })
}) 
