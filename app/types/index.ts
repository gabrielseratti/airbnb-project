import { Listing, User } from "@prisma/client";

export type safeListings = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string;
}

export type SafeUser = Omit<
    User,
    "createAt" | "updatedAt" | "emailVerified"
> & {
    createAt: string;
    updatedeAt: string;
    emailVerified: string | null;
}