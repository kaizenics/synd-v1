import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center items-center pb-40 pt-40">
        <Card className="w-[40%] h-[40%] dark:border-zinc-800 border border-gray-300">
          <CardHeader>
            <CardTitle className="font-montserrat text-3xl">
              Welcome to Synd AI
            </CardTitle>
            <CardDescription className="font-montserrat text-md">
              Chat with Synd with additional OpenAI functions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 justify-start">
              <div className="border dark:border-zinc-800 border-gray-300 bg-transparent dark:text-white text-black p-4 cursor-pointer hover:dark:bg-zinc-800 rounded-lg hover:bg-gray-200 transition duration-200">
                <h1 className="font-montserrat font-semibold text-sm">Explain this Code:</h1>
                <p className="font-montserrat font-regular text-sm text-zinc-400">"JavaScript Object Arrays"</p>
              </div>
              <div className="border dark:border-zinc-800 border-gray-300 bg-transparent dark:text-white text-black p-4 cursor-pointer hover:dark:bg-zinc-800 rounded-lg hover:bg-gray-200 transition duration-200">
                <h1 className="font-montserrat font-semibold text-sm">Write a spreedsheet formula</h1>
                <p className="font-montserrat font-regular text-sm text-zinc-400">to convert a date to the weekday</p>
              </div>
              <div className="border dark:border-zinc-800 border-gray-300 bg-transparent dark:text-white text-black p-4 cursor-pointer hover:dark:bg-zinc-800 rounded-lg hover:bg-gray-200 transition duration-200">
                <h1 className="font-montserrat font-semibold text-sm">Come up with concepts</h1>
                <p className="font-montserrat font-regular text-sm text-zinc-400">for a retro-style arcade game</p>
              </div>
              <div className="border dark:border-zinc-800 border-gray-300 bg-transparent dark:text-white text-black p-4 cursor-pointer hover:dark:bg-zinc-800 rounded-lg hover:bg-gray-200 transition duration-200">
                <h1 className="font-montserrat font-semibold text-sm">Tell me a fun fact</h1>
                <p className="font-montserrat font-regular text-sm text-zinc-400">about the Golden State Warriors</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 p-2 pb-5 sm:px-0">
          <form className="sticky w-full max-w-screen-md rounded-xl border-2 dark:border-zinc-700 border-gray-300">
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
