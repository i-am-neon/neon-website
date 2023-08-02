
export default function FunContent(): JSX.Element {
    const hnsUrl = 'https://whois.0xNeon/';

    return (
        <div className="sm:mx-16">
            <p>
                Able to view Handshake domains? Check
                out <a
                    href={hnsUrl}
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    whois.0xNeon
                </a> (it&apos;s hosted permanently on Arweave!)
            </p>
            <br />
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
            <br />
            <p>
                I&apos;m sure you came here to pay me, right...?
                <br />
                0xNeon.eth | 🔥‍‍‍‍.eth | 🏄‍♂️.sol | 0xNeon.tez
            </p>
            <br />
            <p>
                Some of my interests
                <br />
                <ul className="list-disc">
                    <li className="ml-8">long-term travel with just a backpack</li>
                    <li className="ml-8">woodworking</li>
                    <li className="ml-8">ballroom and latin dance</li>
                    <li className="ml-8">rock climbing</li>
                    <li className="ml-8">
                        digging through <a
                            href='https://hicetnunc.xyz/'
                            target='_blank'
                            rel="noreferrer"
                            className="text-primary underline"
                        >
                            H=N
                        </a>
                    </li>
                </ul>
            </p>
        </div>
    )
}