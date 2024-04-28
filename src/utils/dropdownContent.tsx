import GitHubIconLink from "../components/gitHubButtons/GitHubIconLink";
import GitHubPillLink from "../components/gitHubButtons/GitHubPillLink";
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
        heading: 'Rave Cape',
        content: (
            <p>
                <img src="raveCape/rave-cape.gif" alt="" />
                <br />
                I hand-crafted a unique LED cape controlled by an ESP32 with a custom React Native app.
                <br /><br />
                Open source mobile app and hardware schematics coming soon.
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (<span className="flex items-center">AI Haiku<OpenSourceBadge /></span>),
        content: (
            <p>
                <i>Using the beta release of GPT-3 + Ethereum + Arweave</i>
                <br /><br />
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
                <br /><br />
                <div className="flex gap-2">
                    <GitHubPillLink title="Frontend" href="https://github.com/i-am-neon/ai-haiku-frontend" />
                    <GitHubPillLink title="Image Generator" href="https://github.com/i-am-neon/ai-haiku-frontend" />
                    <GitHubPillLink title="Smart Contract" href="https://github.com/i-am-neon/ai-haiku-contract" />
                </div>
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (<span className="flex items-center">Color Changing Noun NFT<OpenSourceBadge /></span>),
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
                <GitHubIconLink
                    href="https://github.com/0xNeon-opensource/color-changing-noun-nft"
                />
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (<span className="flex items-center">Arweave NFT asset uploader NPM package<OpenSourceBadge /></span>),
        content: (
            <p>
                An NPM Package with over 1,000 downloads that makes it easy to upload
                NFT images and metadata to Arweave.
                <br /><br />
                <GitHubIconLink
                    href="https://github.com/0xNeon-opensource/arweave-nft-uploader"
                />
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: (<span className="flex items-center">Sol and Arweave atomic unit converters<OpenSourceBadge /></span>),
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
                    <GitHubIconLink
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
                    <GitHubIconLink
                        href="https://github.com/0xNeon-opensource/arconverter"
                    />
                </span>
            </p>
        )
    } as DropdownSectionItem,
]

export const learningCohorsContent: DropdownSectionItem[] = [
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
