import GitHubLink from "../components/GitHubLink";
import OpenSourceBadge from "../components/OpenSourceBadge";
import { DropdownSectionItem } from "../types/DropdownSectionItem";

export const currentProjectsContent: DropdownSectionItem[] = [
    {
        heading: 'Founding Engineer at Ethos Wallet',
        content: (
            <p>
                <i>January &apos;22 - Present</i>
                <br /><br />
                <a
                    href="https://www.ethoswallet.xyz/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    Ethos
                </a>
                {' '}is a top wallet on the
                {' '}<a
                    href="https://sui.io/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    Sui blockchain
                </a> with over 100k users that is often praised for its user experience.
            </p>
        )
    } as DropdownSectionItem,
]

export const pastProjectsContent: DropdownSectionItem[] = [
    {
        heading: 'AI Haiku',
        content: (
            <p>
                I&apos;ve made a few NFT collections, but <a
                    href="https://www.aihaiku.art/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    AI Haiku
                </a> is definitely my favorite.
                <br /><br />
                With a combination of generative art and natural
                language processing, this project provides a space for people to collaborate with
                an AI to create a poem that is eternalized on the blockchain. Minters also received
                a physical copy of their haiku on real handmade paper from Japan.
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (<span>Color Changing Noun NFT<OpenSourceBadge /></span>),
        content: (
            <p>
                A <a
                    href="https://nouns.wtf/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    Nouns
                </a> derivative that changes colors every time you look at it. Built on Ethereum and Arweave.
                <br /><br />
                <GitHubLink
                    href="https://github.com/0xNeon-opensource/color-changing-noun-nft"
                />
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (<span>Arweave NFT asset uploader NPM package<OpenSourceBadge /></span>),
        content: (
            <p>
                An NPM Package with over 1,000 downloads that makes it easy to upload
                NFT images and metadata to Arweave.
                <br /><br />
                <GitHubLink
                    href="https://github.com/0xNeon-opensource/arweave-nft-uploader"
                />
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (<span>Sol and Arweave atomic unit converters<OpenSourceBadge /></span>),
        content: (
            <p>
                Two online calculators to convert Solana and Arweave to their atomic units;
                Lamport and Winston. Both are hosted permanently on Arweave.
                <br /><br />
                <span className="flex">
                    <a
                        href="https://www.solconverter.com/"
                        target='_blank'
                        rel="noreferrer"
                        className="text-primary underline"
                    >
                        solconverter.com
                    </a>
                    <span className="mx-2"></span>
                    <GitHubLink
                        href="https://github.com/0xNeon-opensource/solconverter"
                    />
                </span>
                <br />
                <span className="flex">
                    <a
                        href="https://www.arconverter.com/"
                        target='_blank'
                        rel="noreferrer"
                        className="text-primary underline"
                    >
                        arconverter.com
                    </a>
                    <span className="mx-2"></span>
                    <GitHubLink
                        href="https://github.com/0xNeon-opensource/arconverter"
                    />
                </span>
            </p>
        )
    } as DropdownSectionItem,
    // {
    //     heading: 'Candid',
    //     content: (
    //         <p>
    //             <a
    //                 href="https://candid.party/"
    //                 target='_blank'
    //                 rel="noreferrer"
    //                 className="text-primary underline"
    //             >
    //                 candid.party
    //             </a> is an on-chain profile experiment.
    //             <br /><br />
    //             I cofounded this
    //             with <a
    //                 href="https://twitter.com/nikita_builds"
    //                 target='_blank'
    //                 rel="noreferrer"
    //                 className="text-primary underline"
    //             >
    //                 @nikita_builds
    //             </a> during the Eth Denver '22 hackathon and he took over the project after we developed our MVP.
    //         </p>
    //     )
    // } as DropdownSectionItem,
]

export const learningCohorsContent: DropdownSectionItem[] = [
    // {
    //     heading: (
    //         <span>Alliance DAO <i>(ALL9)</i></span>
    //     ),
    //     content: (
    //         <p>
    //             <a
    //                 href="https://alliance.xyz/"
    //                 target='_blank'
    //                 rel="noreferrer"
    //                 className="text-primary underline"
    //             >
    //                 Alliance
    //             </a> is one of the world's best networks of Web3 founders and experts.
    //             <br /><br />
    //             Alliance has accepted the Ethos team into the September &apos;22 cohort.
    //         </p>
    //     )
    // } as DropdownSectionItem,
    {
        heading: (
            <span>Kernel <i>(KB7)</i></span>
        ),
        content: (
            <p>
                <a
                    href="https://www.kernel.community/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    Kernel
                </a> is a peer-to-peer learning community dedicated to the journey towards a
                better understanding of truth: in our work, in our relationships with others,
                and in our inner worlds.
            </p>
        )
    } as DropdownSectionItem
]

export const daoMembershipContent: DropdownSectionItem[] = [
    {
        heading: (
            <span>Akiya <i>(contributor)</i></span>
        ),
        content: (
            <p>
                <a
                    href="https://www.akiyadao.xyz/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    Akiya
                </a> (空き家) means empty home. We&apos;re purchasing a cluster of homes in rural Japan to build an ecovillage
                for climate conscious builders, artists and solarpunks.
                <br /><br />
                I&apos;m helping Akiya create the smart contract for its NFTs.
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (
            <span>Chainforest <i>(member)</i></span>
        ),
        content: (
            <p>
                <a
                    href="https://twitter.com/chainforest_dao"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    ChainforestDAO
                </a> curates a diverse and cohesive ecosystem of exceptional individuals to
                learn, explore and build web3 together.
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (
            <span>Blank <i>(former contributor)</i></span>
        ),
        content: (
            <p>
                <a
                    href="https://blank.foundation/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    Blank
                </a> is a web3 community united by 10,000 blank NFTs. Together we vote on how they evolve.
            </p>
        )
    } as DropdownSectionItem,
]
