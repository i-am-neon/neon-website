import DropdownSection from "../../DropdownSection";
import {
  aiProjectsContent,
  learningCohorsContent as learningCohortsContent,
  physicalProjectsContent,
  web3ProjectsContent,
} from "./dropdownContent";

export default function SideProjectsContent(): JSX.Element {
  return (
    <>
      <DropdownSection
        title={<span>AI</span>}
        subtitle="Oct '21 - Jan '25"
        content={aiProjectsContent}
      />
      <DropdownSection
        title={<span>Web3</span>}
        subtitle="Oct '21 - April '22"
        content={web3ProjectsContent}
      />
      <DropdownSection
        title={<span>Physical Projects</span>}
        content={physicalProjectsContent}
      />
      <DropdownSection
        title={<span>Learning cohorts</span>}
        content={learningCohortsContent}
      />
    </>
  );
}

