import { MutableRefObject, useState } from "react";
import Avatar from "./Avatar";
import Modal from "./Modal";
import PointerAnimation from "./PointerAnimation";
import Socials from "./Socials";
import FunContent from "./content/FunContent";
import SkillsContent from "./content/SkillsContent";
import SideProjectsContent from "./content/projectsContent/SideProjectsContent";
import WorkExperienceContent from "./content/WorkExperienceContent";
import { Separator } from "./shadcn/ui/separator";

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
                    <h1 className='font-dunerise text-primary mt-4 text-4xl'>
                        neon
                    </h1>
                    <p className='my-2'>Artist & Engineer</p>
                    <div>
                        <Socials />
                    </div>
                </div>

                <Separator className="sm:hidden my-4 bg-white/20" />

                <div className="sm:w-1/2 flex flex-col items-center gap-5 pt-2 sm:pt-0">
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openModal(<SkillsContent />)}
                    >
                        skills
                    </button>
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openModal(<WorkExperienceContent />)}
                    >
                        work experience
                    </button>
                    <button
                        className="text-xl underline decoration-primary"
                        onClick={() => openModal(<SideProjectsContent />)}
                    >
                        side projects
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
