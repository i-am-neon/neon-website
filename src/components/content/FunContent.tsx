
export default function FunContent(): JSX.Element {
    return (
        <div className="flex flex-col sm:mx-16 gap-5">
            <p>
                Some of my interests
                <br />
                <ul className="list-disc">
                    <li className="ml-8">long-term travel with just a backpack</li>
                    <li className="ml-8">woodworking</li>
                    <li className="ml-8">ballroom and latin dance</li>
                    <li className="ml-8">rock climbing</li>
                </ul>
            </p>
            <p>
                Peruse my <a
                    href='https://oncyber.io/neon'
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    NFT Gallery
                </a>
            </p>
            <p>
                I&apos;m sure you came here to pay me, right...?
                <br />
                0xNeon.eth | 🔥‍‍‍‍.eth | 🏄‍♂️.sol | 0xNeon.tez
            </p>
        </div>
    )
}