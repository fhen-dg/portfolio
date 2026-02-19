import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-center mb-4 header1 text-primary-base">
          Welcome to My Portfolio
        </h1>
        <Button>Click me</Button>
        <p className="text-center text-lg text-neutral-400">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </main>
  );
}
