import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-15 grid grid-cols-1 md:grid-cols-[300px_minmax(0,_1fr)_300px] gap-6">
      
      <aside className="hidden md:block">
        <LeftSidebar />
      </aside>

      
      <section className="">
        <Feed />
      </section>

      
      <aside className="hidden lg:block">
        <RightSidebar />
      </aside>
    </main>
  );
}
