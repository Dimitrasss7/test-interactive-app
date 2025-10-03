import { useState } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  color: string
}

const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 transition-transform duration-300 ${
        isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
      }`}>
        <span className="text-3xl">{icon}</span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      
      <div className={`mt-4 flex items-center text-white transition-all duration-300 ${
        isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
      }`}>
        <span className="text-sm font-semibold">Explore</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default FeatureCard