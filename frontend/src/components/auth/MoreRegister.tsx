import React, { useState, useEffect } from 'react';
import Auth from '../layouts/Auth';
import { yearsFunc, isLeapYear, daysFunc } from './utils/registerFuncs';

interface UserData{
  firstName: string,
  lastName: string,
  year: number,
  month: number,
  day: number
}

const MoreRegister: React.FC = () => {
  const [years, setYears] = useState<number[] | []>([]);
  const [months, setMonths] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [days, setDays] = useState<number[] | []>([]);
  const [leapYear, setLeapYear] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    year: 2000,
    month: 2,
    day: 14,
  })

  useEffect(() => {
    yearsFunc(setYears);
  }, [])

  useEffect(() => {
    isLeapYear(userData.year, setLeapYear);
    daysFunc(leapYear, userData.month, setDays);
  }, [leapYear, userData])

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData({...userData, [name]: value});
  }
  const changeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLSelectElement;
    setUserData({...userData, [name]: value}); 
  }

  return(
    <Auth>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">More register</h1>
        <form>
          <p className="text-sm font-semibold">first name</p>
          <input type="text" name="firstName" onChange={changeInputValue} value={userData.firstName} placeholder="Enter your First name" className="authInput textIndent" required />
          <p className="text-sm font-semibold">last name</p>
          <input type="email" name="lastName" onChange={changeInputValue} value={userData.lastName} placeholder="Enter your Last name" className="authInput textIndent" required />
          <div className="flex justify-around text-sm font-semibold">
            <p>year</p>
            <p>month</p>
            <p>day</p>
          </div>
          <div className="flex justify-between">
            <select name="year" className="w-20 border-2 block mt-1 py-2 outline-none hover:border-black cursor-pointer transition-colors" onChange={changeSelectValue} value={userData.year}>
              {years && (
                years.map((year: number) => <option key={year} value={year}>{year}</option>)
              )}
            </select>
            <select name="month" className="w-20 border-2 block mt-1 py-2 outline-none hover:border-black cursor-pointer transition-colors" onChange={changeSelectValue} value={userData.month}>
              {months && (
                months.map((month: number) => <option key={month} value={month}>{month}</option>)
              )}
            </select>
            <select name="day" className="w-20 border-2 block mt-1 py-2 outline-none hover:border-black cursor-pointer transition-colors" onChange={changeSelectValue} value={userData.day}>
              {days && (
                days.map((day: number) => <option key={day} value={day}>{day}</option>)
              )}
            </select>
          </div>
          <button type="submit" className="authButton">Next</button>
        </form>
         <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default MoreRegister;