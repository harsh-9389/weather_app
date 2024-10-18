import React from 'react' ;

function Forecast(){
  return(
    <div className="flex items-center justify-center my-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-2xl font-medium">Hourly Forecast</p>
        <p className="text-white text-xl font-light">Today Forecast</p>
      </div>
    </div>
  )
}

export default Forecast ;