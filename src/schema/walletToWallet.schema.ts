import { z } from "zod"
 
export const walletToWalletSchema = z.object({
    transferType: z.string().min(2, {
    message: "Transfer Type must be at least 2 characters.",
    }).optional(),

    walletType: z.string().min(2, {
    message: "WalletType must be at least 2 characters.",
    }).optional(),

    amount: z.string().min(2, {
    message: "Amount must be at least 2 characters.",
    }).optional(),

    walletId: z.string().min(2, {
    message: "WalletId must be at least 2 characters.",
    }).optional(), 

    recipientWalletNumber: z.string().min(5, {
    message: "Min 5 characters.",
    }).optional(),
})