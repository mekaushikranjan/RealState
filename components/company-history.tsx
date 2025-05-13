"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function CompanyHistory() {
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description:
        "Luxury Dubai Real Estate was established with a vision to provide premium real estate services in Dubai.",
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Opened our second office in Dubai Marina to better serve clients in the area.",
    },
    {
      year: "2015",
      title: "International Reach",
      description: "Established partnerships with international real estate agencies to serve global clients.",
    },
    {
      year: "2018",
      title: "10 Year Anniversary",
      description: "Celebrated 10 years of excellence in Dubai's luxury real estate market.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our virtual property tours and enhanced digital services for clients worldwide.",
    },
    {
      year: "2023",
      title: "Market Leadership",
      description:
        "Recognized as one of the top luxury real estate agencies in Dubai with over 1000 successful transactions.",
    },
  ]

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Since our founding in 2008, Luxury Dubai Real Estate has grown to become one of the most trusted names in
            Dubai's luxury property market. Our journey has been marked by a commitment to excellence, innovation, and
            client satisfaction.
          </p>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Company History"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-lg -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
