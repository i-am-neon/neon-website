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
    heading: "How to Add Emotion to AI Voices",
    isOpenSource: true,
    content: (
      <p>
        <i>Jan '25</i>
        <br />
        <br />
        Learn how to add emotion to ElevenLabs voices.
        <br />
        <br />
        <div className="flex gap-2">
          <MediumArticleHubPillLink
            title="Medium Article"
            href="https://medium.com/@tommywilczek/how-to-add-emotion-to-ai-voices-elevenlabs-2025-92cc00d3cb5d"
          />
          <YouTubeHubPillLink
            title="YouTube Video"
            href="https://youtu.be/ZFdW--YfjjM"
          />
          <GitHubPillLink
            title="Code"
            href="https://github.com/i-am-neon/emotional-elevenlabs-voices"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "How to Make an LLM Choose From a Long List Using RAG",
    isOpenSource: true,
    content: (
      <p>
        <i>December '24</i>
        <br />
        <br />
        LLMs have issues when choosing specific items out of very long lists.
        Use RAG to fix this.
        <br />
        <br />
        <div className="flex gap-2">
          <MediumArticleHubPillLink
            title="Medium Article"
            href="https://medium.com/@tommywilczek/how-to-make-an-llm-choose-from-a-very-long-list-using-retrieval-augmented-generation-rag-dfa67aaafb41"
          />
          <YouTubeHubPillLink
            title="YouTube Video"
            href="https://youtu.be/E-2f5AwP19Y"
          />
          <GitHubPillLink
            title="Code"
            href="https://github.com/i-am-neon/llm-choose-from-long-list"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "How to Architect an LLM-powered Web App",
    isOpenSource: true,
    content: (
      <p>
        <i>December '24</i>
        <br />
        <br />
        The patterns for clean code don't change because LLMs are involved —
        here's how you can adapt them to AI-powered apps.
        <br />
        <br />
        This example uses Next.js, TypeScript, Vercel's AI SDK, Zod, OpenAI, and
        Flux, but the concepts apply to any stack.
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

