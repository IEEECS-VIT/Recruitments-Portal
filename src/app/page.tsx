'use client';

import { Suspense, useEffect } from "react";
import { redirect } from 'next/navigation'
import Loading from "../components/loading";
import Hero from "@/components/hero";
import ScrollIndicator from "@/components/scrollindicator";
import Welcome from "@/components/welcome";

export default function Home() {

  // useEffect(() => {
  //   const checkCookie = () => {
  //     const cookieValue = document.cookie
  //       .split('; ')
  //       .find(row => row.startsWith('user'))
  //       ?.split('=')[1];

  //     if (cookieValue) {
  //       console.log('Cookie exists:', cookieValue);
  //     } else {
  //       // Not logged in
  //       redirect('/login');
  //     }
  //   };

  //   checkCookie();
  // }, []);


  
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Welcome />
      </Suspense>
      <ScrollIndicator />
    </main>
  );
}
