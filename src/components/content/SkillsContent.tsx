export default function SkillsContent() {
    return (
        <div className="columns-2 gap-16 text-center">
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    Web
                </h3>
                <ul>
                    <li>Next.js</li>
                    <li>Node</li>
                    <li>Typescript</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-primary font-bold mb-2">
                    Contract
                </h3>
                <ul>
                    <li>Solidity</li>
                    {/* <li>Rust</li> */}
                    <li>Move</li>
                </ul>
            </div>
        </div>
    )
}
