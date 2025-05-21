import React from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

function Header() {
  return (
    <nav>
      <div className="flex justify-center items-center bg-black p-4">
        <ul className="flex justify-between items-center space-x-10 text-sm">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.15, duration: 0.8 }}
              className="list-none"
            >
              <a
                href={`#${item.id}`}
                className="text-white block transition-transform duration-300 hover:scale-125 cursor-pointer hover:font-bold"

              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
