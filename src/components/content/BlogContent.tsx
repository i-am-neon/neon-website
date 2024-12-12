import { DropdownSectionItem } from "../../types/DropdownSectionItem";
import DropdownSection from "../DropdownSection";
import GitHubPillLink from "../PillLinks/gitHubButtons/GitHubPillLink";
import MediumArticleHubPillLink from "../PillLinks/MediumArticlePillLink";
import YouTubeHubPillLink from "../PillLinks/YouTubePillLink";

export default function BlogContent(): JSX.Element {
  return (
    <>
      <DropdownSection
        title={<span>Blog + Vlog</span>}
        content={aiProjectsContent}
      />
    </>
  );
}

const aiProjectsContent: DropdownSectionItem[] = [
  {
    heading: "How to Architect an LLM-powered Web App (Next.js, AI SDK)",
    isOpenSource: true,
    content: (
      <p>
        <i>December '24</i>
        <br />
        The patterns for clean code don't change because LLMs are involved —
        here's how you can adapt them to AI-powered apps.
        <br />
        <br />
        <div className="flex gap-2">
          <MediumArticleHubPillLink
            title="Medium Article"
            href="https://medium.com/@tommywilczek/how-to-architect-llm-powered-web-apps-99e02fa643e9"
          />
          <YouTubeHubPillLink
            title="YouTube Video"
            href="https://youtu.be/kRwSYr6L6XY"
          />
          <GitHubPillLink
            title="Example App"
            href="https://github.com/i-am-neon/llm-web-app-best-practices"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
];

