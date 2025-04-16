import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate();
    return <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-emerald-600"
            >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span className="text-xl font-bold">EduMaster</span>
        </div>
        <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Courses
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Categories
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Pricing
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
            About
            </a>
        </nav>
        <div className="flex items-center gap-4">
            <button href="#" className="text-sm font-medium hidden md:block" onClick={() => {
            navigate('/signin')
            }}>
            Sign in
            </button>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            onClick={() => {
                navigate('/signup')
            }}
            >
            Get Started
            </button>
        </div>
        </div>
  </header>
    
}