"use client"
import Image from 'next/image';
import { useState } from 'react';
import Barbieque from "../../public/images/Restaurant 1.jpg"

export default function Home() {
  const [formData, setFormData] = useState({
    date: '',  
    time: '',
    table: '',
    name: '',
    email: '',
    address:''
  });
  
  const [reservations, setReservations] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationKey = `${formData.date}-${formData.time}-${formData.table}`;

    if (reservations[reservationKey]) {
      alert('This table is already booked for the selected slot.');
      return;
    }

    setReservations(prev => ({
      ...prev,
      [reservationKey]: true
    }));
    console.log('Reservation successful:', formData);
    alert('Booking successful!');
    setFormData({ date: '', time: '', table: '', name: '', email: '' }); // Reset form
  };

  const createTimesOptions = () => {
    const slots = [];
    for (let hour = 12; hour < 22; hour += 2) { // from 12 PM to 10 PM every 2 hours
      const time = `${hour}:00 - ${hour + 2}:00`;
      slots.push(<option key={time} value={time}>{time}</option>);
    }
    return slots;
  };

  return (
    <div >
      <h2 className="text-2xl font-bold text-center m-4 text-yellow-600">Restaurant Table Booking</h2>
      <div className='flex justify-between mx-14'>
        <div className='p-6'>

          <Image src={Barbieque} alt='food Image' height={100} width={300} />
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-4 h-[50%] bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
          <div className="mb-2">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time:</label>
            <select
              id="time"
              name="time"
              className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
              value={formData.time}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a time slot</option>
              {createTimesOptions()}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="table" className="block text-gray-700 text-sm font-bold mb-2">Table Number:</label>
            <select
              id="table"
              name="table"
              className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
              value={formData.table}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a table</option>
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>Table {i + 1}</option>
              ))}
            </select>
          </div>
          <div className='flex'>

            <div className="mr-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Book Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
