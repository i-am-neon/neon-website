import { Helmet } from 'react-helmet';
import store from 'store2';
import { useState, useRef, useEffect, MutableRefObject } from "react";
import MainCard from "./components/MainCard";
import { updateColorFromIndex, COLORS, getNextColor } from "./utils/getNextColor";
import Head from './components/Head';

function App() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState('');

  const themeStore = store.namespace('theme');
  const clickOutsideRef = useRef(null);
  const ignoreRef = useRef(null);
  useClickOutside(clickOutsideRef, ignoreRef);

  const setNextColor = (): void => {
    const newColorIndex = getNextColor();
    setCurrentColorIndex(newColorIndex);
    setCurrentColor(COLORS[newColorIndex])
  }

  function useClickOutside(
    clickOutsideRef: MutableRefObject<any>,
    ignoreRef: MutableRefObject<any>
  ) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (
          !ignoreRef.current &&
          clickOutsideRef.current &&
          !clickOutsideRef.current.contains(event.target)
        ) {
          setNextColor();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [clickOutsideRef, ignoreRef]);
  }

  useEffect(() => {
    if (window) {
      let colorIndex = themeStore.get('primaryIndex');
      if (!colorIndex) {
        themeStore.set('primaryIndex', 0);
        colorIndex = 0;
      }
      updateColorFromIndex(colorIndex);
      setCurrentColorIndex(colorIndex);
      setCurrentColor(COLORS[colorIndex])
    }
  }, [themeStore]);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", currentColor);
    }
  }, [currentColor]);

  return (
    <div className='selection:bg-primary flex flex-col w-full min-h-screen overflow-hidden text-white font-mono selection:text-gray-800'>
      <Head />
      <div className="z-10 grid place-items-center">
        <MainCard
          clickOutsideRef={clickOutsideRef}
          ignoreRef={ignoreRef}
          colorIndex={currentColorIndex}
          setNextColor={setNextColor}
        />
      </div>
    </div>
  );
}

export default App;
