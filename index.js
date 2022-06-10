// Code your solution in this file!


const returnFirstTwoDrivers = ()=>{
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0,2)
    }

const returnLastTwoDrivers =() =>{
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']  
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiplier){
    return function(number){
        return (fareMultiplier*number)
    }
}
  const fareDoubler = createFareMultiplier(2)

  const fareTripler = createFareMultiplier(3)

  function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
      return returnFirstTwoDrivers()
  }
