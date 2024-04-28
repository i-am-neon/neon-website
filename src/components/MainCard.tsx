import { MutableRefObject, useState, useEffect } from "react";
import Avatar from "./Avatar";
import Modal from "./Modal";
import Socials from "./Socials";
import FunContent from "./content/FunContent";
import ProjectsContent from "./content/projectsContent/ProjectsContent";
import SkillsContent from "./content/SkillsContent";
import PointerAnimation from "./PointerAnimation";

type MainCardProps = {
    clickOutsideRef: MutableRefObject<any>,
    ignoreRef: MutableRefObject<any>,
}

export default function MainCard({ clickOutsideRef, ignoreRef }: MainCardProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

    const openModal = (newModalContent: JSX.Element): void => {
        setIsModalOpen(true);
        setModalContent(newModalContent);
    };

    return (
        <div>
            <div ref={clickOutsideRef} className="flex flex-col md:flex-row md:w-full items-center place-content-center p-6 bg-slate-800 rounded-lg mt-16 md:mt-32 max-w-2xl mx-4 md:mx-auto">
                <div className="sm:w-1/2 flex flex-col items-center relative">
                    <Avatar />
                    <PointerAnimation />
                    <h1 className='font-dunerise text-primary mt-2 text-4xl'>
                        neon
                    </h1>
                    <p className='my-2'>Artist & Engineer</p>
                    <div>
                        <Socials />
                    </div>
                </div>

                <div className="sm:w-1/2 flex flex-col items-center gap-3 pt-2 sm:pt-0">
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openModal(<SkillsContent />)}
                    >
                        skills
                    </button>
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openModal(<ProjectsContent />)}
                    >
                        projects
                    </button>
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openModal(<FunContent />)}
                    >
                        fun
                    </button>
                </div>
            </div>
            <Modal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                content={modalContent}
                wrapperRef={ignoreRef}
            />
        </div>
    );
}
