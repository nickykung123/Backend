'use client'

import { useState } from "react"

const initialState = {
    message: '',
}

export default function FridayPage() {
    const [state, setState] = useState(initialState)
    const [selectedDate, setSelectedDate] = useState('')

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (selectedDate) {
            const dayOfWeek = new Date(selectedDate).getDay()
            if (dayOfWeek === 5) { // 5 represents Friday
                setState({ message: "It is Friday!" })
            } else {
                setState({ message: "It isn't Friday." })
            }
        } else {
            setState({ message: "Please select a date." })
        }
    }

    return (
        <div className="flex flex-col items-center w-full h-screen bg-gradient-to-b from-purple-50 to-purple-100">
        <form onSubmit={handleSubmit} className="p-6 flex flex-col items-center justify-center space-y-4 bg-gray-100 rounded-lg shadow-md w-80 mx-auto mt-10">
            <div className="flex flex-col items-center">
                <label htmlFor="date" className="text-4xl font-extrabold text-purple-600 mb-6">เลือกวันที่:</label>
                <input 
                    type="date"
                    id="date"
                    onChange={handleDateChange}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required 
                />
            </div>

            <div>
                <p aria-live="polite" className="text-center text-gray-700 font-medium">{state.message}</p>
            </div>

            <button 
                type="submit" 
                className="bg-purple-500 text-white px-4 py-2 rounded shadow hover:bg-purple-600 transition-colors duration-200 font-bold"
            >
                Submit
            </button>
        </form>
        </div>
    )
}
