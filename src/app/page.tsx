export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50">
      <h1 className="text-3xl mt-8 mb-4 text-black">Chart Demo</h1>
      <div className="flex flex-col space-y-4">
        <a
          href="/avicai_demo"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded border-2 border-black  text-center"
        >
          Avicai Demo
        </a>
        <a
          href="/all_kablan"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded border-2 border-black text-center"
        >
          All Kablan
        </a>
        <a
          href="/events"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded border-2 border-black text-center"
        >
          Events
        </a>
        <a
          href="/statistics"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded border-2 border-black text-center"
        >
          statistics
        </a>
      </div>
    </div>
  )
}
