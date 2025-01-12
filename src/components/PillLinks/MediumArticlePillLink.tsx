import { BookOpen } from "lucide-react";

type GitHubPillLinkProps = {
  title: string;
  href: string;
};

export default function MediumArticleHubPillLink({
  title,
  href,
}: GitHubPillLinkProps) {
  return (
    <button className="border rounded-lg pl-2 pr-1 py-1 hover:border-primary text-gray-400 hover:text-primary">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <span className="text-sm mr-1">{title}</span>
        <span className="sr-only">Medium Article</span>
        <BookOpen className="h-4 w-4" color="currentColor" />
      </a>
    </button>
  );
}

