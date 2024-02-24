import { MutableRefObject, useState } from "react";
import Avatar from "./Avatar";
import Modal from "./Modal";
import Socials from "./Socials";
import FunContent from "./content/FunContent";
import ProjectsContent from "./content/ProjectsContent";
import SkillsContent from "./content/SkillsContent";

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
    }
    return (
        <div>
            <div ref={clickOutsideRef} className="flex flex-col md:flex-row md:w-full items-center place-content-center p-6 bg-slate-800 rounded-lg mt-16 md:mt-32 max-w-2xl mx-4 md:mx-auto">
                <div className="sm:w-1/2 flex flex-col items-center">
                    <h1 className='text-primary mt-2 mb-0 text-4xl'>
                        NΞ◎N
                    </h1>
                    <Avatar />
                    <div className="mt-2">
                        <Socials />
                    </div>
                    <p className='my-4 text-primary'>Artist & Engineer</p>
                </div>
                <div className="sm:w-1/2 flex flex-col items-center gap-3">
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
    )
}