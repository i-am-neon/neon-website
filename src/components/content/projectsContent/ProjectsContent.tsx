import DropdownSection from "../../DropdownSection";
import { aiProjectsContent, currentProjectsContent, learningCohorsContent, physicalProjectsContent, web3ProjectsContent } from "./dropdownContent";

export default function ProjectsContent(): JSX.Element {
    return (
        <>
            <DropdownSection
                title={<span>Currently working as</span>}
                content={currentProjectsContent}
            />
            <DropdownSection
                title={<span>AI</span>}
                content={aiProjectsContent}
            />
            <DropdownSection
                title={<span>Web3</span>}
                content={web3ProjectsContent}
            />
            <DropdownSection
                title={<span>Physical Projects</span>}
                content={physicalProjectsContent}
            />
            <DropdownSection
                title={<span>Learning cohorts</span>}
                content={learningCohorsContent}
            />
        </>
    )
}