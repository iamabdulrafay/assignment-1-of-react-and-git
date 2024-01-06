import React, { useEffect, useRef, useState } from "react";

const api = () => {
  const [city, setCity] = useState();
  const ref = useRef();

  const [search, setSearch] = useState("karachi");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3782cddb3ea46783d984b17299e72d2e`
        );
        const data = await api.json();
        setCity(data.main);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);
  return (
    <>
      <h1 className="text-blue-800 text-center text-[5vw] py-[1vw]">
        Check weather
      </h1>
      <div className=" flex h-full w-full items-center justify-center flex-row  py-[3vw]    ">
        <div className="bg-blue-600 w-[30vw] h-[30vw] flex items-center justify-center flex-col  rounded-3xl">
          <input
            className="py-4 px-7 rounded-xl outline-red-400"
            ref={ref}
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(e);
            }}
          />
          <div className=" text-[2vw] color-red-400 flex  flex-row-reverse items-center justify-center gap-[0.6vw] ">
            <h4 className=" text-black text-[3vw]"> {search}</h4>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          {!city ? (
            <p>no data found</p>
          ) : (
            <>
              <div className=" text-[5vw] color-red-400 flex  flex-row-reverse items-center justify-center gap-[2vw] ">
                <h1>{city.temp}</h1>
                <i className="fa-solid fa-temperature-three-quarters"></i>
              </div>

              <div className=" text-[1vw] color-red-400 flex  flex-row-reverse items-center justify-center gap-[2vw] ">
                <div className="">
                  <p>humidity</p>
                  <h1 className="text-[1.5vw]">{city.humidity}</h1>
                </div>
                <p>||</p>
                <div className="">
                  <p>max</p>
                  <h1 className="text-[1.3vw]">{city.temp_max}</h1>
                </div>
                <p>||</p>
                <div className="">
                  <p>min</p>
                  <h1 className="text-[1.3vw]">{city.temp_min}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default api;
