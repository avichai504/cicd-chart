'use client'

import { useState, useEffect } from 'react'
import HistoryQr from '../../components/history/HistoryQR'

export default function History() {
  const [qrNumber, setQrNumber] = useState<number | null>(null)

  const historyQr5555 = () => {
    setQrNumber(5555)
  }

  const historyQr6666 = () => {
    setQrNumber(6666)
  }

  const historyQr7777 = () => {
    setQrNumber(7777)
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-3xl my-5 font-bold text-center text-white">ALL Qr</h1>
      <div className="">
        <button
          onClick={historyQr5555}
          className="mx-2  bg-blue-500 text-white px-4 py-2 rounded"
        >
          5555
        </button>
        <button
          onClick={historyQr6666}
          className=" mx-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          6666
        </button>
        <button
          onClick={historyQr7777}
          className=" mx-2  bg-red-500 text-white px-4 py-2 rounded"
        >
          7777
        </button>
      </div>
      {qrNumber && <HistoryQr qrNumber={qrNumber} />}
    </div>
  )
}
