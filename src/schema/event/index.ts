import { z } from 'zod';

export const eventSchema = z.object({
    name: z.string().min(2, {
        message: 'Event name must be at least 2 characters long.'
    }),
    date: z.string().min(2, {
        message: 'Date must be at least 2 characters long.'
    }),
    location: z.string().min(2, {
        message: 'Location must be at least 2 characters long.'
    }),
    maxAttendees: z
        .string()
        .min(1, {
            message: 'Max attendees must be at least 1.'
        })
        .max(10000, {
            message: 'Max attendees must not exceed 10,000.'
        }),
    createdBy: z.string().min(2, {
        message: 'Creator name must be at least 2 characters long.'
    }),
    organizerEmail: z.string().email({
        message: 'Provide a valid email address.'
    })
});

export const attendeeSchema = z.object({
    attendeeName: z.string().min(2, {
        message: 'Attendee name must be at least 2 characters long.'
    }),
    attendeePhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: 'Provide a valid phone number.'
    })
});
