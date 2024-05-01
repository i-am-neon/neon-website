import { DropdownSectionItem } from "../../../types/DropdownSectionItem";
import GitHubIconLink from "../../gitHubButtons/GitHubIconLink";
import GitHubPillLink from "../../gitHubButtons/GitHubPillLink";
import { AspectRatio } from '../../shadcn/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../shadcn/ui/carousel';

export const aiProjectsContent: DropdownSectionItem[] = [
    {
        heading: 'Cerebellum',
        isOpenSource: true,
        content: (
            <p>
                <i>March '24 <a
                    href="https://www.linkedin.com/posts/southparkcommons_airtable-everyones-app-platform-activity-7163976818969042944-311q/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    OpenAI x South Park Commons Hackathon
                </a></i>
                <br /><br />
                Loom demo:
                <a href="https://www.loom.com/share/27ae4e8c5a1e445981f73aef5281d622?sid=2d4c5534-7396-4af2-83c5-4700cfd87d0c" target='_blank' rel="noreferrer"><img className="rounded-md" src="projectScreenshots/cerebellum-loom.png" alt="Cerebellum Loom Video Screenshot" /></a>
                <br />
                Cerebellum gives you insights from your handwritten and audio journal notes. It is built with OpenAI's GPT-4, DALL-E, Whisper, and Next.js.
                <br /><br />
                <GitHubIconLink href='https://github.com/EthosWallet/spc-hackathon' />
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: 'Dev Shop',
        isOpenSource: true,
        content: (
            <p>
                <i>July '23</i>
                <br /><br />
                <img className="rounded-md" src="projectScreenshots/dev-shop.png" alt="Dev Shop screenshot" />
                <br />
                Dev Shop is a "chat with your codebase" experiment using <a
                    href="https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    RAG
                </a> techniques to learn more about RAG pipelines and how they can be used on complex and large codebases:
                <ul className="list-disc flex flex-col gap-2 pt-3">
                    <li><strong><a
                        href="https://www.pinecone.io/"
                        target='_blank'
                        rel="noreferrer"
                        className="text-primary underline"
                    >
                        Pinecone
                    </a></strong>: vector database</li>
                    <li><strong><a
                        href="https://www.langchain.com/"
                        target='_blank'
                        rel="noreferrer"
                        className="text-primary underline"
                    >
                        Langchain
                    </a></strong>: indexing and AI interactions</li>
                </ul>
                <br /><br />
                <GitHubIconLink href='https://github.com/i-am-neon/code-chat' />
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: 'AI Haiku',
        isOpenSource: true,
        content: (
            <p>
                <i>Oct '21 - GPT-3 API + Ethereum + Arweave</i>
                <br /><br />
                <Carousel className="mx-12">
                    <CarouselContent>
                        <CarouselItem>
                            <img src="projectScreenshots/ai-haiku.gif" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex items-center h-full"><img src="projectScreenshots/ai-haiku.png" alt="" /></div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious variant='secondary' />
                    <CarouselNext variant='secondary' />
                </Carousel>
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
                an AI to create a poem that is eternalized on the blockchain.
                <br /><br />
                Minters also received a physical copy of their haiku on real handmade paper from Japan.
                <br /><br />
                View all haikus on <a
                    href="https://opensea.io/collection/ai-haiku"
                    target='_blank'
                    rel="noreferrer"
                    className="text-primary underline"
                >
                    OpenSea
                </a>.
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
        heading: 'Color Changing Noun NFT',
        isOpenSource: true,
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
        heading: 'Arweave NFT asset uploader NPM package',
        isOpenSource: true,
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
        heading: 'Sol and Arweave atomic unit converters',
        isOpenSource: true,
        content: (
            <p className="w-full">
                <Carousel className="mx-12">
                    <CarouselContent>
                        <CarouselItem>
                            <img src="projectScreenshots/sol-converter.png" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="projectScreenshots/ar-converter.png" alt="" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious variant='secondary' />
                    <CarouselNext variant='secondary' />
                </Carousel>
                <br /><br />
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
        heading: 'Rave Cape',
        content: (
            <p>
                <img className="rounded-md" src="raveCape/rave-cape.gif" alt="" />
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
        heading: 'Wood Working',
        content: (
            <p className='w-full'>
                <Carousel className="mx-12">
                    <CarouselContent>
                        <CarouselItem>
                            <AspectRatio ratio={1} className="flex items-center bg-transparent">
                                <img
                                    src="woodworking/sun.jpg"
                                    alt=""
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </CarouselItem>
                        <CarouselItem>
                            <AspectRatio ratio={1} className="flex items-center bg-transparent">
                                <img
                                    src="woodworking/moon.jpg"
                                    alt=""
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </CarouselItem>
                        <CarouselItem>
                            <AspectRatio ratio={1} className="flex items-center bg-transparent">
                                <img
                                    src="woodworking/divide.jpg"
                                    alt=""
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </CarouselItem>
                        <CarouselItem>
                            <AspectRatio ratio={1} className="flex items-center bg-transparent">
                                <img
                                    src="woodworking/peace.jpg"
                                    alt=""
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious variant='secondary' />
                    <CarouselNext variant='secondary' />
                </Carousel>
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: 'Hologram Pyramid',
        content: (
            <p className='w-full'>
                <i>Dec '17</i>
                <br /><br />
                <Carousel className="mx-12">
                    <CarouselContent>
                        <CarouselItem>
                            <img src="hologramPyramid/fireworks.gif" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="hologramPyramid/jellyfish.gif" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="hologramPyramid/aura.gif" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src="hologramPyramid/prototype.gif" alt="" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious variant='secondary' />
                    <CarouselNext variant='secondary' />
                </Carousel>
            </p>
        )
    } as DropdownSectionItem,
    {
        heading: 'Cryptocurrency Mining Rigs',
        isOpenSource: true,
        content: (
            <p className='w-full'>
                <i>April - Dec '21</i>
                <br /><br />
                I learned a ton about Linux and hardware from these projects!
                <br /><br />
                <Carousel className="mx-12">
                    <CarouselContent>
                        <CarouselItem>
                            <AspectRatio ratio={1} className="flex items-center bg-transparent">
                                <img
                                    src="miningRigs/dense.jpg"
                                    alt=""
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </CarouselItem>
                        <CarouselItem>
                            <AspectRatio ratio={1} className="flex items-center bg-transparent">
                                <img
                                    src="miningRigs/rig-dog.jpg"
                                    alt=""
                                    className="object-cover"
                                />
                            </AspectRatio>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious variant='secondary' />
                    <CarouselNext variant='secondary' />
                </Carousel>

                <br /><br />
                I Constructed five linux machines each with different specialized hardware for various cryptocurrency mining:
                <br /><br />
                <ul className="list-disc flex flex-col gap-2">
                    <li><strong>Ethereum</strong>: High power and many graphics cards (back when Eth was Proof-of-Work)</li>
                    <li><strong>Arweave and Chia</strong>: Dense storage computers totalling over half a petabyte</li>
                    <li><strong>Monero</strong>: Strong CPUs with a lot of RAM</li>
                </ul>
                <br /><br />
                I wrote advanced custom software to monitor and manage the hardware, including protocols for power outages.
                <br /><br />
                <div className="flex gap-2">
                    <GitHubPillLink title="Eth Rig Controller" href="https://github.com/i-am-neon/ethereum-mining-rig-controller" />
                    <GitHubPillLink title="Chia Plotter" href="https://github.com/i-am-neon/crypto-chia-plotter" />
                </div>
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
