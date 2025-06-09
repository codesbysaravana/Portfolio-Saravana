import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { NavBar } from '../components/NavBar'


export const Home = () => {
    // This is the Home component for the portfolio page.

  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}


        {/* Footer */}
    </div>
  )
}