import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold">Posts Page</h1>
      </main>
    </div>
  );
}
