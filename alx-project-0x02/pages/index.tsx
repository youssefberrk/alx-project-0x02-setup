import Head from "next/head";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Welcome to ALX Project 2" />
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h2 className="text-2xl font-bold">Hello, ALX Student!</h2>
        <p className="mt-4 text-gray-700">
          This is your Next.js project scaffold.
        </p>
      </main>
    </div>
  );
}
