
export default function FunContent(): JSX.Element {
    return (
        <div className="flex flex-col gap-5">
            <p>
                <h3 className="text-lg text-primary font-bold mb-2">
                    Some of my interests
                </h3>
                <ul className="list-disc pl-8">
                    <li>long-term travel with just a backpack</li>
                    <i>20+ countries and counting!</i>
                    <li>woodworking</li>
                    <li>ballroom and latin dance</li>
                    <li>rock climbing</li>
                </ul>
            </p>
            {/* <p>
                Peruse my <a
                    href='https://oncyber.io/neon'
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    NFT Gallery
                </a>
            </p> */}
        </div>
    )
}