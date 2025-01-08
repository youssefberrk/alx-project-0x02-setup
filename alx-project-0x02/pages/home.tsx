import React, { useState } from "react";
import Head from "next/head";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the content for Card 1." },
    { title: "Card 2", content: "This is the content for Card 2." },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />

      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
        <button
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setModalOpen(true)}
        >
          Add New Post
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleAddPost}
        />
      </main>
    </div>
  );
}
