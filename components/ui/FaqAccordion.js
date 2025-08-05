"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

export default function FaqAccordion({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-secondary">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus className={`text-primary ${isOpen ? 'text-secondary' : ''}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}