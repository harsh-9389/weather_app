import React from 'react';

function TimeAndLocation() {
  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          time | Date | Location
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          city, country
        </p>
      </div>
    </>
  ) ;
}

export default TimeAndLocation;