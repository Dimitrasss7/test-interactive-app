import { useState } from 'react'

const CounterButton = () => {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setCount(count + 1)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="text-center">
        <p className="text-gray-200 text-lg mb-4">Click Counter</p>
        <div className={`text-6xl font-bold text-white mb-6 transition-transform duration-300 ${
          isAnimating ? 'scale-125' : 'scale-100'
        }`}>
          {count}
        </div>
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-cyan-500/50"
        >
          Click Me!
        </button>
        {count > 0 && (
          <p className="text-gray-300 mt-4 animate-fade-in">
            You've clicked {count} {count === 1 ? 'time' : 'times'}! 🎉
          </p>
        )}
      </div>
    </div>
  )
}

export default CounterButton