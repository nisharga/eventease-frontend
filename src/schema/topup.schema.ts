import { z } from "zod"
 
export const topUpSchema = z.object({ 
    amount: z.string().min(2, {
    message: "amount must be at least 2 characters.",
    }),
    transactionId: z.string().min(5, {
    message: "transactionId must be at least 5 characters.",
    })
})