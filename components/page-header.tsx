"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  date?: string
  category?: string
  className?: string
}

export function PageHeader({ title, description, date, category, className }: PageHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
      {(date || category) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400"
        >
          {date && <span>{date}</span>}
          {date && category && <span>•</span>}
          {category && <span>{category}</span>}
        </motion.div>
      )}
    </div>
  )
}
