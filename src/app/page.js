"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';
import Homepage from '../../components/Homepage';
import { JellyTriangle } from '@uiball/loaders'
import { useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Minimal from '../../components/Minimal';

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [wallpaper, setWallpaper] = useState("/m8.png");
  const [handleModal, setHandleModal] = useState(false)
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='w-screen h-screen bg-white'>
      {isLoading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <JellyTriangle color="black" size={100} />
        </div>
      ) : (
        <ThemeContext.Provider value={{ wallpaper, setWallpaper, handleModal, setHandleModal, theme, setTheme }}>
          {
            theme == "Minimal" ? (
              <Minimal />
            ) :
              (
                <Homepage />
              )
          }
        </ThemeContext.Provider>

      )}
    </div>

  );
}

