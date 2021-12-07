import React, { useState, useEffect } from 'react';
import Auth from '../../layouts/Auth';
import { yearsFunc, isLeapYear, daysFunc } from './utils/registerFuncs';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  changeUserData: (props: any) => void,
  userData: any,
  getInputLength: any,
  maxLength: any,
}

const PersonalData: React.FC<ComponentProps> = ({ setActualComponentFunc, changeUserData, userData, getInputLength, maxLength}) => {
  const [years, setYears] = useState<number[] | []>([]);
  const [months, setMonths] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [days, setDays] = useState<number[] | []>([]);
  const [leapYear, setLeapYear] = useState<boolean>(false);

  useEffect(() => {
    yearsFunc(setYears);
  }, [])

  useEffect(() => {
    isLeapYear(userData.year, setLeapYear);
    daysFunc(leapYear, userData.month, setDays);
  }, [leapYear, userData])

  return(
    <Auth componentName="BasicData" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Personal Data</h1>
        <form>
          <div className="flexDivRegister">
            <p className="pRegister">first name</p>
            <p className="pRegister">[{maxLength.firstName}/30]</p>
          </div>
          <input type="text" name="firstName" onChange={getInputLength} value={userData.firstName} placeholder="Enter your First name" className="authInput textIndent" required />
          <div className="flexDivRegister">
            <p className="text-sm font-semibold">last name</p>
            <p className="pRegister">[{maxLength.lastName}/30]</p>
          </div>
          <input type="email" name="lastName" onChange={getInputLength} value={userData.lastName} placeholder="Enter your Last name" className="authInput textIndent" required />
          <div className="flex justify-around text-sm font-semibold">
            <p>year</p>
            <p>month</p>
            <p>day</p>
          </div>
          <div className="flex justify-between">
            <select name="year" className="w-20 border-2 block mt-1 py-2 outline-none hover:border-black cursor-pointer transition-colors" onChange={changeUserData} value={userData.year}>
              {years && (
                years.map((year: number) => <option key={year} value={year}>{year}</option>)
              )}
            </select>
            <select name="month" className="w-20 border-2 block mt-1 py-2 outline-none hover:border-black cursor-pointer transition-colors" onChange={changeUserData} value={userData.month}>
              {months && (
                months.map((month: number) => <option key={month} value={month}>{month}</option>)
              )}
            </select>
            <select name="day" className="w-20 border-2 block mt-1 py-2 outline-none hover:border-black cursor-pointer transition-colors" onChange={changeUserData} value={userData.day}>
              {days && (
                days.map((day: number) => <option key={day} value={day}>{day}</option>)
              )}
            </select>
          </div>
          <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc('ProfileImage')}}>Next</button>
        </form>
         <a href='/login' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default PersonalData;