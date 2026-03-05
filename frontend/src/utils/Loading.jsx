import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex flex-col items-center justify-center p-8">
      {/* Animated Food Icons */}
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="mb-8"
      >
        <div className="relative">
          <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-ping" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl animate-bounce" />
        </div>
      </motion.div>

      {/* Pulsing Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl mb-4 text-center leading-tight"
      >
        Swigy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-white/90 mb-8 text-center"
      >
        Loading your cravings...
      </motion.p>

      {/* Animated Dots */}
      <div className="flex space-x-2">
        {['•', '•', '•'].map((dot, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="text-3xl text-white drop-shadow-lg"
          >
            {dot}
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "70%" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full max-w-md mt-12 bg-white/20 rounded-full h-2 overflow-hidden"
      >
        <motion.div
          className="h-full bg-white rounded-full shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;
