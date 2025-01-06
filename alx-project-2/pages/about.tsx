import Head from "next/head";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-700">
          This is the about page where we describe the project.
        </p>
      </main>
    </div>
  );
}
