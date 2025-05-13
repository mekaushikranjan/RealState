"use client"

import { motion } from "framer-motion"

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  // In a real app, this would parse and render markdown or rich text content
  const paragraphs = content.split("\n\n")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose dark:prose-invert max-w-none"
    >
      {paragraphs.map((paragraph, index) => {
        // Check if paragraph is a heading
        if (paragraph.startsWith("# ")) {
          return (
            <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
              {paragraph.replace("# ", "")}
            </h2>
          )
        }
        // Check if paragraph is a subheading
        if (paragraph.startsWith("## ")) {
          return (
            <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
              {paragraph.replace("## ", "")}
            </h3>
          )
        }
        // Regular paragraph
        return (
          <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
            {paragraph}
          </p>
        )
      })}
    </motion.div>
  )
}
