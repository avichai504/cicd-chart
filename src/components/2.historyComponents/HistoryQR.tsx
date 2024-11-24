'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import JSON data
import bgtReqData from './data/bgtReq.json'
import completedData from './data/completed.json'
import probData from './data/prob.json'
import skippedData from './data/skip.json'
import waitingData from './data/waitnig.json'

// style and icom
import categoryStyles from './data/categoryStyles'

// Import category components
import BgtReq from './bgtReq'
import Completed from './completed'
import Prob from './prob'
import Skipped from './skipped'
import Waiting from './waiting'

// Category configurations
const categoryComponents = {
  prob: Prob,
  bgtReq: BgtReq,
  waiting: Waiting,
  skipped: Skipped,
  completed: Completed,
}

const categoryOrder = ['prob', 'bgtReq', 'waiting', 'skipped', 'completed']

export default function HistoryQr({ qrNumber }) {
  const [filteredData, setFilteredData] = useState({})
  const [visibleCategories, setVisibleCategories] = useState(categoryOrder)

  useEffect(() => {
    const allData = {
      prob: probData,
      bgtReq: bgtReqData,
      waiting: waitingData,
      skipped: skippedData,
      completed: completedData,
    }

    // Filter and sort data by qrNumber for each category
    const filtered = Object.entries(allData).reduce((acc, [key, data]) => {
      // Filter data by qrNumber
      const filteredItems = data.filter((item) => item.qrNum === qrNumber)

      if (filteredItems.length > 0) {
        // Sort filtered items by date in ascending order (use 'new Date(item.date)' for descending order)
        const sortedItems = filteredItems.sort((a, b) => {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)
          return dateB.getTime() - dateA.getTime() // Descending order
        })
        acc[key] = sortedItems
      }
      return acc
    }, {})

    setFilteredData(filtered)
  }, [qrNumber])

  const toggleCategory = (category) => {
    setVisibleCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    )
  }

  // Check if there is no data at all
  const isEmpty = Object.keys(filteredData).length === 0

  return (
    <div className="mt-5 p-4 bg-white text-black w-full">
      <h2 className="text-2xl font-bold mb-2">History QR - {qrNumber}</h2>

      {isEmpty ? (
        // Show a message if there is no data
        <p className="text-center text-gray-500">
          No data available, no history for this QR.
        </p>
      ) : (
        <>
          {/* Category toggles */}
          <div className="mb-2 flex flex-wrap gap-2">
            {categoryOrder.map((category) => {
              const styles = categoryStyles[category]

              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`flex items-center px-4 py-2 rounded ${
                    styles.cls
                  } ${
                    visibleCategories.includes(category)
                      ? 'font-semibold'
                      : 'line-through'
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-5 h-5 mr-2 rounded-full ${styles.icon.clr}`}
                  >
                    <FontAwesomeIcon
                      icon={styles.icon.name}
                      className="text-white"
                    />
                  </span>
                  {category}
                </button>
              )
            })}
          </div>

          {/* Render category components */}
          {categoryOrder.map((category) => {
            if (
              !visibleCategories.includes(category) ||
              !filteredData[category]
            )
              return null

            const CategoryComponent = categoryComponents[category]
            const styles = categoryStyles[category] || { cls: '', icon: {} }

            return (
              <div key={category} className={`p-3 ${styles.cls}`}>
                <CategoryComponent data={filteredData[category]} />
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
