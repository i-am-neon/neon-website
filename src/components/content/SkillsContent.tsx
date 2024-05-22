import ExternalLink from "../ExternalLink";

export default function SkillsContent() {
    return (
        <div className="flex flex-col gap-8 mt-4">
            <div>
                <span className="flex">I&apos;m a full-stack engineer with a specialization in front-end development.</span>
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
                    <div>
                        <h3 className="text-lg text-primary font-bold mb-2">
                            Web
                        </h3>
                        <ul className="list-disc pl-4">
                            <li>Typescript</li>
                            <li>React</li>
                            <i>Next.js, Remix, etc.</i>
                            <li>Node</li>
                        </ul>
                        <h3 className="hidden sm:flex text-lg text-primary font-bold mb-2 mt-4">
                            Web3
                        </h3>
                        <ul className="list-disc pl-4">
                            <li>Solidity</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg text-primary font-bold mb-2">
                            AI
                        </h3>
                        <ul className="list-disc pl-4">
                            <li><ExternalLink to="https://www.modular.com/max/mojo">
                                Mojo
                            </ExternalLink>
                            </li>
                            <li>Python</li>
                            <li>RAG (Retrieval-Augmented Generation)</li>
                            <li>Agentic Reasoning</li>
                            <li>Stable Diffusion + Comfy UI</li>
                        </ul>
                    </div>
                    <div className="sm:hidden">
                        <h3 className="text-lg text-primary font-bold mb-2">
                            Web3
                        </h3>
                        <ul className="list-disc pl-4">
                            <li>Solidity</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
