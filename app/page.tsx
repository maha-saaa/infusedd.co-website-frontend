import Hero from "./(routes)/(landing)/hero/hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Hero />
    </main>
  );
}
