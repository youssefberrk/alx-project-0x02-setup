import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Header />
      <div className="space-y-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
