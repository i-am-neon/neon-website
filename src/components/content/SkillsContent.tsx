export default function SkillsContent() {
    return (
        <div className="flex flex-col gap-8 mt-4">
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    My Bread and Butter
                </h3>
                <ul className="list-disc pl-4">
                    <li>Typescript</li>
                    <li>React</li>
                    <i>Next.js, Remix, etc.</i>
                    <li>Node</li>
                    <li>Python</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    For Fun
                </h3>
                <ul className="list-disc pl-4">
                    <li>Solidity</li>
                    <li>Stable Diffusion</li>
                    <li>LLMs</li>
                </ul>
            </div>
        </div>
    )
}
