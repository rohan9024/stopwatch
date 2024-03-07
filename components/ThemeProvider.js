import React, { useEffect, useState, useContext } from 'react'
import themes from "../themes.json"
import Image from "next/image"
import { ThemeContext } from '../contexts/ThemeContext'


function ThemeProvider({ choice }) {
  const { wallpaper, setWallpaper } = useContext(ThemeContext)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("wallpaper", JSON.stringify(wallpaper));
    }
  }, [wallpaper])


  return (
    <div className="grid grid-cols-3 gap-10">


      {themes["themes"][choice].map((img) => (
        <div className="w-[300px] h-[150px] rounded-2xl cursor-pointer ">
          <Image
            src={img}
            width={20000}
            height={20000}
            quality={100}
            className=" object-cover rounded-2xl"
            onClick={() => setWallpaper(img)}
            loading="lazy"

          />
        </div>

      ))}




    </div>
  )
}

export default ThemeProvider