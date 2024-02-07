import { MutableRefObject, useEffect, useRef } from "react";
import Head from './components/Head';
import MainCard from "./components/MainCard";
import { useColor } from "./providers/ColorProvider";
import PsychedelicBackgroundWrapper from "./providers/PsychadelicBackgroundProvider";

function useClickOutside(
  clickOutsideRef: MutableRefObject<any>,
  ignoreRef: MutableRefObject<any>,
  setNextColor: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        clickOutsideRef.current &&
        !clickOutsideRef.current.contains(event.target) &&
        (!ignoreRef.current || !ignoreRef.current.contains(event.target))
      ) {
        setNextColor();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickOutsideRef, ignoreRef, setNextColor]);
}

function App() {
  const { setNextColor } = useColor();
  const clickOutsideRef = useRef(null);
  const ignoreRef = useRef(null);
  useClickOutside(clickOutsideRef, ignoreRef, setNextColor);

  return (
    <PsychedelicBackgroundWrapper>
      <div className='selection:bg-primary flex flex-col w-full min-h-screen overflow-hidden text-white font-mono selection:text-gray-800'>
        <Head />
        <div className="z-10 grid place-items-center">
          <MainCard
            clickOutsideRef={clickOutsideRef}
            ignoreRef={ignoreRef}
          />
        </div>
      </div>
    </PsychedelicBackgroundWrapper>);
}

export default App;
