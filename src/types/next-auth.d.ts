import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    activeSubscription?: {
      ref: {
        id: string;
        collection: {
          id: string;
        };
      };
      data: {
        status: string;
        startDate: string;
        endDate: string;
      };
    };
  }
}