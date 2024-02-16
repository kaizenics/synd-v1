

export default function Home() {
  return (
  <main>
     <section className="fixed bottom-0 flex w-full flex-col items-center space-y-3 p-2 pb-5 sm:px-0">
     <form className="sticky w-full max-w-screen-md rounded-xl border-2 border-zinc-700">
        <textarea placeholder="Enter a message" className="w-full bg-transparent outline-none px-3 py-2"/>
      </form>
     </section>
     
  </main>
  );
}
