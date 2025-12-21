export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        Designed & Developed by <a href="https://cegtechforum.in/" style={{ textDecoration: 'underline' }}>CEG Tech Forum</a> | © {new Date().getFullYear()} Copyright CTF.
      </div>
    </footer>
  )
}
