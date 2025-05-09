// For Next.js with TypeScript and Tailwind
export default function Home() {
  return (
    <div className="bg-white text-[#87CEFA] font-sans min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center p-5">
        {/* Hamburger Button */}
        <button className="lg:hidden">  Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Help Button */}
        <button className="text-[#87CEFA] font-medium">Scan</button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center text-center h-[80vh]">
        <h1 className="text-4xl font-bold">Budget Scanner</h1>
        <button className="text-lg mt-4">Select your budget </button>
      </main>
    </div>
  );
}
