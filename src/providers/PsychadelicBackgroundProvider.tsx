import React, { ReactNode } from 'react';
import PsychedelicBackground from '../components/PsychedelicBackground';

interface PsychedelicBackgroundWrapperProps {
    children: ReactNode;
}

const PsychedelicBackgroundWrapper: React.FC<PsychedelicBackgroundWrapperProps> = ({ children }) => {
    return (
        <div className="relative w-full h-full min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <PsychedelicBackground />
            </div>

            {/* Application Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default PsychedelicBackgroundWrapper;
