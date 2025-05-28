import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { Star } from 'lucide-react'
import { StarBackground } from '../components/StarBackground'


export const Home = () => {
    // This is the Home component for the portfolio page.

  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />


        {/* Navbar */}

        {/* Main Content */}


        {/* Footer */}
    </div>
  )
}