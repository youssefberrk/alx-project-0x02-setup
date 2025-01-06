import Head from "next/head";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Card 1"
            content="This is the content for Card 1. It's concise and informative."
          />
          <Card
            title="Card 2"
            content="This is the content for Card 2. It provides additional information."
          />
          <Card
            title="Card 3"
            content="This is the content for Card 3. A perfect example of modular components!"
          />
        </div>
      </main>
    </div>
  );
}
