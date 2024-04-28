export default function SkillsContent() {
    return (
        <div className="flex flex-col gap-8 sm:pl-8">
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    My Bread and Butter
                </h3>
                <ul className="list-disc">
                    <li>Typescript</li>
                    <li>React (Next.js, Remix, etc.)</li>
                    <li>Node</li>
                    <li>Python</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    For Fun
                </h3>
                <ul className="list-disc">
                    <li>Solidity</li>
                    <li>Stable Diffusion</li>
                    <li>LLMs</li>
                </ul>
            </div>
        </div>
    )
}
