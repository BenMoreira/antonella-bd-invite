import { useState } from 'react'
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
import antbd from './assets/antbd.png';
import './App.css'

function App() {
  const [flip, setFlip] = useState(true);
  const [isExploding, setIsExploding] = useState(false);

  return (
    <>
      <div className='w-full min-h-screen bg-gray-400'>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <div className='h-[330px]' onClick={() => {setFlip(!flip); setIsExploding(!isExploding)}}>
            <motion.div className='border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-t-[150px] 
              border-t-black rounded-xl absolute'
                
              transition={{duration: 0.7}}
              animate={{rotateX: flip ? 0 : 180, y: flip ? 0 : -140, opacity: flip ? 1 : 0}}
            ></motion.div>

            <motion.div className='border-t-[150px] border-t-transparent border-b-[180px] border-b-transparent border-l-[180px] 
            border-l-pink-400 rounded-xl absolute' transition={{duration: 0.7}} animate={{y: 0, opacity: flip ? 1 : 0}}></motion.div>

            <motion.div className='border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-b-[180px] 
            border-b-pink-400 rounded-xl absolute' 
            transition={{duration: 0.7}} initial={{y: 150}} animate={{y: 150, x: 0, opacity: flip ? 1 : 0}}></motion.div>

            <motion.div className='border-t-[150px] border-t-transparent border-b-[180px] border-b-transparent border-r-[180px] 
            border-r-pink-400 rounded-xl absolute' 
            transition={{duration: 0.7}} initial={{x: 180}} animate={{y: 0, x: 180, opacity: flip ? 1 : 0}}></motion.div>

            <motion.div className='w-[360px] h-[600px] bg-[url("/antbackg2.jpg")] bg-cover rounded-xl'
              transition={{duration: 2}}
              initial={{opacity: 0}}
              animate={{opacity: flip ? 0 : 1, y: flip ? 0 : [-135, -400, -135]}}
            >
              <div className='w-full flex flex-col items-center'>
              {isExploding && <ConfettiExplosion force={0.7} duration={5000} particleCount={300} colors={['#f9a8d4', '#3b82f6', '#d4af37']} />}
              </div>

              <motion.div className='w-full h-full flex flex-col gap-2 font-bold py-5 px-4 bg-black border-black rounded-xl bg-opacity-40'>
                <motion.div className='text-pink-500 text-2xl py-4 text-center'>
                  El 1er cumpleaños de
                </motion.div>

                <motion.div className='text-pink-500 text-3xl pb-4 text-center'>
                  Antonella Ulloa
                </motion.div>

                <motion.div className='text-pink-500 text-lg pb-4 text-right'>
                  Ven a celebrar con ella
                </motion.div>

                <motion.div className='text-pink-500 text-lg'>
                  El dia Sábado 27 de Julio
                </motion.div>

                <motion.div className='text-pink-500 text-lg pb-4'>
                  a las 5 P.M.
                </motion.div>

                <motion.div className='text-pink-500 text-lg pb-4 text-right'>
                  3896 Egypt Rd., Snellville, GA.
                </motion.div>

                <motion.div className='flex flex-col justify-center items-center pl-3'>
                  <img src={antbd} className='w-[180px]' />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

/*
w-[360px] h-[300px]
*/