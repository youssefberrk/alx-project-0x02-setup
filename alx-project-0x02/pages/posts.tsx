import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";
import Header from "@/components/layout/Header";

const PostsPage: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
