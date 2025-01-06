import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-700">
          This is the home page of the application.
        </p>
      </main>
    </div>
  );
}
