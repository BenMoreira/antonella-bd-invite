import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
import './App.css'

function App() {
  const [flip, setFlip] = useState(true);
  const [isExploding, setIsExploding] = useState(false);

  return (
    <>
      <div className='w-full min-h-screen bg-gray-400'>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <div className='w-[360px] h-[300px]' onClick={() => {setFlip(!flip); setIsExploding(!isExploding)}}>
            <motion.div className='border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-t-[150px] 
              border-t-black rounded-xl absolute'
                
              transition={{duration: 0.7}}
              animate={{rotateX: flip ? 0 : 180, y: flip ? 0 : -140, opacity: flip ? 1 : 0}}
            ></motion.div>

            <motion.div className='border-t-[150px] border-t-transparent border-b-[180px] border-b-transparent border-l-[180px] 
            border-l-red-600 rounded-xl absolute' animate={{y: 0, opacity: flip ? 1 : 0}}></motion.div>

            <motion.div className='border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-b-[180px] 
            border-b-red-600 rounded-xl absolute' animate={{y: 150, x: 0, opacity: flip ? 1 : 0}}></motion.div>

            <motion.div className='border-t-[150px] border-t-transparent border-b-[180px] border-b-transparent border-r-[180px] 
            border-r-red-600 rounded-xl absolute' animate={{y: 0, x: 180, opacity: flip ? 1 : 0}}></motion.div>

            <motion.div className='w-[360px] h-[500px] bg-pink-300 border-pink-300 rounded-xl'
              transition={{duration: 2}}
              initial={{opacity: 0}}
              animate={{opacity: flip ? 0 : 1, y: flip ? 0 : [-100, -400, -100]}}
            >
              <div className='w-full flex flex-col items-center'>
              {isExploding && <ConfettiExplosion force={0.7} duration={5000} particleCount={300} colors={['#f9a8d4', '#3b82f6', '#d4af37']} />}
              </div>

              Hello!!!!!
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
