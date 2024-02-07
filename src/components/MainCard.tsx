import { MutableRefObject, useState } from "react";
import Modal from "./Modal";
import ProjectsContent from "./content/ProjectsContent";
import SkillsContent from "./content/SkillsContent";
import Socials from "./Socials";
import Avatar from "./Avatar";
import FunContent from "./content/FunContent";
import { useColor } from "../providers/ColorProvider";

type MainCardProps = {
    clickOutsideRef: MutableRefObject<any>,
    ignoreRef: MutableRefObject<any>,
}

export default function MainCard({ clickOutsideRef, ignoreRef }: MainCardProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

    const { setNextColor, currentColorIndex } = useColor();

    const openSkillsModal = (newModalContent: JSX.Element): void => {
        setIsModalOpen(true);
        setModalContent(newModalContent);
    }
    return (
        <div>
            <div id="mainCard" ref={clickOutsideRef} className="flex items-center justify-between p-6 space-x-6 bg-slate-800 rounded-lg mx-16 md:mx-52 lg:mx-96 xl:mx-0 xl:w-96 mt-16 sm:mt-32">
                <div>
                    <h1 className='text-primary mt-2 mb-0 text-4xl'>
                        NΞ◎N
                    </h1>
                    <Avatar
                        colorIndex={currentColorIndex}
                        setNextColor={setNextColor}
                    />
                    <Socials />
                </div>
                <div>
                    <p className='mt-4'>I&apos;m
                        a <span className='text-primary'>builder</span></p>
                    <br />
                    <br />
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openSkillsModal(<SkillsContent />)}
                    >
                        skills
                    </button>
                    <br />
                    <br />
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openSkillsModal(<ProjectsContent />)}
                    >
                        projects
                    </button>
                    <br />
                    <br />
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openSkillsModal(<FunContent />)}
                    >
                        fun
                    </button>
                    <br />
                    <br />
                </div>
            </div>
            <Modal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                content={modalContent}
                wrapperRef={ignoreRef}
            />
        </div>
    )
}