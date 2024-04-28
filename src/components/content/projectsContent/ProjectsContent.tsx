import DropdownSection from "../../DropdownSection";
import { currentProjectsContent, featuredSideProjectsContent, learningCohorsContent, web3ProjectsContent } from "./dropdownContent";

export default function ProjectsContent(): JSX.Element {
    return (
        <>
            <DropdownSection
                title={<span>I&apos;m currently working on</span>}
                content={currentProjectsContent}
            />
            <DropdownSection
                title={<span>Featured Side Projects</span>}
                content={featuredSideProjectsContent}
            />
            <DropdownSection
                title={<span>Web3 Projects</span>}
                content={web3ProjectsContent}
            />
            <DropdownSection
                title={<span>Learning cohorts</span>}
                content={learningCohorsContent}
            />
        </>
    )
}