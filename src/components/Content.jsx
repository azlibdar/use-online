import useOnline from "../hooks/useOnline";

function Content() {
  const isOnline = useOnline();
  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-6 flex flex-col gap-8 items-center justify-center">
          <span
            className={`px-2 py-1 text-sm font-mono rounded-md font-semibold ${
              isOnline ? "bg-emerald-950 text-emerald-400" : "bg-zinc-900 text-zinc-400"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
          <p className="text-sm text-zinc-400 text-center">Disconnect your Wi-Fi to see changes.</p>
        </div>
      </div>
    </main>
  );
}

export default Content;
