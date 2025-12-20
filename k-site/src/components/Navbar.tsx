export default function Navbar() {
  return (
    <header className="w-full py-4 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold">Kurukshetra</div>
        <nav>
          <a href="/" className="mr-4 hover:underline">Home</a>
          <a href="/about" className="mr-4 hover:underline">About</a>
          <a href="/events" className="hover:underline">Events</a>
        </nav>
      </div>
    </header>
  )
}
