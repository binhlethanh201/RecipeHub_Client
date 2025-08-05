export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <div className="container">
        <small className="text-muted">
          &copy; {new Date().getFullYear()} RecipeHub. All rights reserved.
        </small>
      </div>
    </footer>
  )
}
