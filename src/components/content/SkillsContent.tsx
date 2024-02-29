export default function SkillsContent() {
    return (
        <div className="columns-2 gap-16 text-center">
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    My Bread and Butter
                </h3>
                <ul>
                    <li>Typescript</li>
                    <li>React (Next.js, etc.)</li>
                    <li>Node</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    For Fun
                </h3>
                <ul>
                    <li>Solidity</li>
                    <li>Stable Diffusion</li>
                    <li>LLMs</li>
                </ul>
            </div>
        </div>
    )
}
