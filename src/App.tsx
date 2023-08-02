import { Helmet } from 'react-helmet';
import store from 'store2';
import { useState, useRef, useEffect, MutableRefObject } from "react";
import MainCard from "./components/MainCard";
import PsychadelicWaves from "./components/PsychadelicWaves/PsychadelicWaves";
import { updateColorFromIndex, COLORS, getNextColor } from "./utils/getNextColor";

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
  }, []);

  return (
    <div className='selection:bg-primary flex flex-col w-full min-h-screen overflow-hidden text-white font-mono selection:text-gray-800'>
      <Helmet>
        <meta name="theme-color" content={currentColor} />
      </Helmet>
      <div className="z-10 grid place-items-center">
        <MainCard
          clickOutsideRef={clickOutsideRef}
          ignoreRef={ignoreRef}
          colorIndex={currentColorIndex}
          setNextColor={setNextColor}
        />
        {/* <div className="text-white font-mono selection:text-gray-800 selection:bg-primary relative inline-block align-bottom bg-slate-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
        <ProjectsContent />
        <FunContent />
      </div> */}
      </div>
    </div>
  );
}

export default App;
