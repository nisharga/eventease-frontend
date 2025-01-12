import { z } from "zod";
 
export const recipientSchema = z.object({
      fullName: z.string().min(4, {
        message: "Name must be at least 4 characters.",
      }),
      email: z.string({
        message: "Provide a valid email address",
      }).email(), 
      country: z.string({
        required_error: "Please select a Country",
        }),
      city: z.string().min(4, {
        message: "Country name must be at least 4 characters.",
      }), 
      phone: z.string().min(9, {
        message: "Phone number must be at least 9 characters.",
      }),
      bankName: z.string().min(3, {
        message: "Bank Name number must be at least 3 characters.",
      }),
      accountNumber: z.string().min(6, {
        message: "Account Number must be at least 6 characters.",
      }), 
      currencyId: z.string({
       required_error: "Please select a Currency",
      }),
}) 