import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    activeSubscription?: {
      ref: any;
      data: {
        status: string;
        startDate: string;
        endDate: string;
      };
    };
  }
}