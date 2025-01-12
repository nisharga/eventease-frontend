import { z } from "zod"
 
export const cashOutSchema = z.object({
    amount: z.number({
        required_error: "Amount is required",
      }),
    bankName: z.string().min(5, {
    message: "BankName must be at least 5 characters.",
    }),
    accountNo: z.string().min(6, {
    message: "Account No must be at least 6 characters.",
    }),
    holderName: z.string().min(5, {
    message: "Account Holder name must be at least 5 characters.",
    }),
    walletId: z.string().min(2, {
    message: "Create a wallet first or wallet missing",
    }),
    walletNumber: z.string().min(2, {
    message: "Create a wallet first or wallet missing",
    }),
    pinNumber: z.string().min(2, {
    message: "Pin Number is required",
    }),

})