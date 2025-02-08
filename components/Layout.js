export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <h1>My Website</h1>
      </nav>
      <main>{children}</main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  )
} 