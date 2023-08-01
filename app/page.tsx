"use client";
// import Image from "next/image";
// import TestData from "../components/TestData";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/AccessDenied";

export default function Home() {
  const { session, loading } = useSession() as any;
  console.log("session:", session);
  console.log("loading:", loading);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <div>
      <h1>Hello World!</h1>
      {/* <TestData /> */}
      <h1>Protected Page</h1>
      <p>
        <strong>Welcome {session.user.name}</strong>
      </p>
    </div>
  );
}
