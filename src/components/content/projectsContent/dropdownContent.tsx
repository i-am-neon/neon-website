import { DropdownSectionItem } from "../../../types/DropdownSectionItem"
import OpenSourceBadge from "../../OpenSourceBadge"
import GitHubIconLink from "../../gitHubButtons/GitHubIconLink"
import GitHubPillLink from "../../gitHubButtons/GitHubPillLink"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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

export const featuredSideProjectsContent: DropdownSectionItem[] = [
    {
        heading: 'Rave Cape',
        content: (
            <p>
                <img className="mx-auto" src="raveCape/rave-cape.gif" alt="" />
                <br />
                <i>May '24</i>
                <br /><br />
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
                <img className="mx-auto" src="projectScreenshots/ai-haiku.png" alt="AI Haiku" />
                <br />
                <i>Oct '21 - GPT-3 API + Ethereum + Arweave</i>
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
]

export const web3ProjectsContent: DropdownSectionItem[] = [
    {
        heading: (<span className="flex items-center">Color Changing Noun NFT<OpenSourceBadge /></span>),
        content: (
            <p>
                <img className="mx-auto" src="https://media.giphy.com/media/7SrmPnpz1mI2bvdmRy/giphy.gif" alt="color changing Noun" />
                <br />
                With a cleverly-written Solidity smart contract, I created a <a
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
                <Carousel>
                    <div>
                        <img src="projectScreenshots/sol-converter.png" alt="SOL Converter" />
                        <p className="legend">SOL Converter</p>
                    </div>
                    <div>
                        <img src="projectScreenshots/ar-converter.png" alt="AR Converter" />
                        <p className="legend">AR Converter</p>
                    </div>
                </Carousel>
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

export const physicalProjectsContent: DropdownSectionItem[] = [
    {
        heading: 'Wood Working',
        content: (
            <p>
                <Carousel>
                    <div>
                        <img src="woodworking/sun.jpg" alt="" />
                        <p className="legend">Sun</p>
                    </div>
                    <div>
                        <img src="woodworking/moon.jpg" alt="" />
                        <p className="legend">Moon</p>
                    </div>
                    <div>
                        <img src="woodworking/divide.jpg" alt="" />
                        <p className="legend">Divide</p>
                    </div>
                    <div>
                        <img src="woodworking/peace.jpg" alt="" />
                        <p className="legend">Peace</p>
                    </div>
                </Carousel>
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: 'Hologram Pyramid',
        content: (
            <p>
                <i>Dec '17</i>
                <br /><br />
                <Carousel>
                    <img src="hologramPyramid/fireworks.gif" alt="" />
                    <img src="hologramPyramid/jellyfish.gif" alt="" />
                    <img src="hologramPyramid/aura.gif" alt="" />
                    <div>
                        <img src="hologramPyramid/prototype.gif" alt="" />
                        <p className="legend">Prototype</p>
                    </div>
                </Carousel>
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
