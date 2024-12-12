import GitHubIconSvg from "./GitHubIconSvg"

type GitHubIconLinkProps = {
    href: string
}

export default function GitHubIconLink(props: GitHubIconLinkProps) {
    return (
        <div className="flex">
            <a
                href={props.href}
                target='_blank'
                rel="noreferrer"
                className="text-gray-400 hover:text-primary"
            >
                <span className="sr-only">Github Repository</span>
                <GitHubIconSvg />
            </a>
        </div>
    )
}