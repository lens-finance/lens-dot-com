import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Logo } from './ui/logo'
import { Button } from './ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              <a href="https://app.lens-finance.com/signup" target="_blank" rel="noopener noreferrer"> 
                  Sign Up
              </a>
            </Button>
            <Button variant="gradient" size="sm" className="hidden md:inline-flex">
              <a href="https://app.lens-finance.com/login" target="_blank" rel="noopener noreferrer"> 
                  Log In
              </a>
            </Button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
      activeProps={{
        className: 'text-primary',
      }}
    >
      {children}
    </Link>
  )
}

// function MobileMenuButton() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <div className="md:hidden">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
//         aria-label="Toggle menu"
//       >
//         <span 
//           className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${
//             isOpen ? 'translate-y-2 rotate-45' : ''
//           }`} 
//         />
//         <span 
//           className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ease-in-out ${
//             isOpen ? 'opacity-0' : 'opacity-100'
//           }`} 
//         />
//         <span 
//           className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${
//             isOpen ? '-translate-y-2 -rotate-45' : ''
//           }`} 
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute top-16 left-0 right-0 bg-card border-b border-border py-4 px-6 flex flex-col space-y-4">
//           <Link to="/" className="text-foreground/80 hover:text-primary py-2">Home</Link>
//           <Link to="/features" className="text-foreground/80 hover:text-primary py-2">Features</Link>
//           <Link to="/pricing" className="text-foreground/80 hover:text-primary py-2">Pricing</Link>
//           <Link to="/about" className="text-foreground/80 hover:text-primary py-2">About</Link>
//           <div className="flex flex-col space-y-2 pt-2">
//             <a href="https://app.lens-finance.com/sign-in" target="_blank" rel="noopener noreferrer">
//               <Button variant="outline" className="w-full">
//                 Sign In
//               </Button>
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
