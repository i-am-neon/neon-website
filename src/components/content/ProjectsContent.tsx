import { currentProjectsContent, daoMembershipContent, learningCohorsContent, pastProjectsContent } from "../../utils/dropdownContent";
import DropdownSection from "../DropdownSection";

export default function ProjectsContent(): JSX.Element {
    return (
        <>
            <DropdownSection
                title={<span>I&apos;m currently working on</span>}
                content={currentProjectsContent}
            />
            <DropdownSection
                title={<span>Some of my past creations</span>}
                content={pastProjectsContent}
            />
            <DropdownSection
                title={<span>Learning cohorts</span>}
                content={learningCohorsContent}
            />
            {/* <DropdownSection
                title={<span>DAO membership</span>}
                content={daoMembershipContent}
            /> */}
        </>
    )
}