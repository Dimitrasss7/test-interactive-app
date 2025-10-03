import { useState, useEffect } from 'react'
import Head from 'next/head'
import FeatureCard from '../components/FeatureCard'
import CounterButton from '../components/CounterButton'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      title: 'Modern Design',
      description: 'Beautiful gradient backgrounds and smooth animations',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Interactive',
      description: 'Click counter and dynamic user interactions',
      icon: '⚡',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Responsive',
      description: 'Fully adaptive design for all device sizes',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Fast Performance',
      description: 'Built with Next.js and optimized for speed',
      icon: '🚀',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Head>
        <title>Test Application - Modern Interactive App</title>
        <meta name="description" content="Interactive test application with modern design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className={`transition-all duration-1000 transform ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-pulse">
            Test Application
          </h1>
          
          <p className="text-xl md:text-2xl text-center text-gray-200 mb-12 max-w-2xl mx-auto">
            Welcome to our modern interactive web application
          </p>
        </div>

        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-300 transform ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <CounterButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 transform ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-200 mb-6">
              This is a fully functional test application built with modern technologies
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-300">
        <p>© 2024 Test Application. Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  )
}