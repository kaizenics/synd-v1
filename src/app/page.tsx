import { Card, CardContent, CardDescription,CardFooter,CardHeader, CardTitle } from "~/components/ui/card"

export default function Home() {
  return (
    <main>

      <section className="flex justify-center items-center pb-40 pt-40">
        <Card className="w-[40%] h-96 border-zinc-700">
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold">Welcome to Synd AI</CardTitle>
              <CardTitle className="font-montserrat font-thin text-lg">Chat with Synd with additional OpenAI functions</CardTitle>
            </CardHeader>
        </Card>
      </section>

      <section>
        <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 p-2 pb-5 sm:px-0">
          <form className="sticky w-full max-w-screen-md rounded-xl border-2 border-zinc-700">
            <textarea
              placeholder="Enter a message"
              className="w-full bg-transparent outline-none px-3 py-2"
            />
          </form>
        </div>
      </section>
    </main>
  );
}
