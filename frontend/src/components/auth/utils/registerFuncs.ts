export const yearsFunc = async (setYears: any) => {
  const firstYear = 1899;
  const yearsArr: number[] = [];

  for(let i = 2021; i > firstYear; i--) {
    yearsArr.push(i);
  }
  setYears(yearsArr);
}

export const isLeapYear = (year: number, LeapYear: any) => {
  const is100 = year % 100 === 0;
  const is400 = year % 400 === 0;
  const is4 = year % 4 === 0;
  
  if(is4){
    if(is100){
      if(is400){
        LeapYear(true);
      }else{
        LeapYear(false);
      }
    }else{
      LeapYear(true);
    }
  }else{
    LeapYear(false);
  }
}

export const daysFunc = (isLeap: boolean, month: number, setDays: any) => {
  const daysArr: number[] = [];
  const is31 = [1, 3, 5, 7, 8, 10, 12];
  let numberOfDays: number;

  if(month == 2){
    numberOfDays = isLeap ? 29 : 28;
  }else{
    if(month == 8){
      numberOfDays = 31;
    }else{
      const isFind = is31.find((item) => item == month);
      if(isFind){
        numberOfDays = 31;
      }else{
        numberOfDays = 30;
      }
    }
  }
  for(let i = 1; i < numberOfDays + 1; i++){
    daysArr.push(i);
  }
  setDays(daysArr);
}