import { DropdownSectionItem } from "../../../types/DropdownSectionItem";
import ExternalLink from "../../ExternalLink";
import GitHubPillLink from "../../PillLinks/gitHubButtons/GitHubPillLink";
import YouTubeHubPillLink from "../../PillLinks/YouTubePillLink";
import { AspectRatio } from "../../shadcn/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shadcn/ui/carousel";

export const aiProjectsContent: DropdownSectionItem[] = [
  {
    heading: "Scene Creator",
    isOpenSource: true,
    content: (
      <p>
        <i>Jan '25</i>
        <br />
        <br />
        Scene Creator is an LLM-powered web app that creates stories. It uses AI
        to create characters: complete with images and voice. It creates
        scripted scenes between the characters and creates images and music to
        go along with the scenes.
        <br />
        <br />
        <div className="space-y-2">
          <p>It uses:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <ExternalLink to="https://claude.ai/">Claude</ExternalLink> as the
              LLM
            </li>
            <li>
              <ExternalLink to="https://replicate.com/black-forest-labs/flux-1.1-pro-ultra">
                Flux
              </ExternalLink>{" "}
              hosted on Replicate for image generation
            </li>
            <li>
              <ExternalLink to="https://elevenlabs.io/">
                ElevenLabs
              </ExternalLink>{" "}
              for voice generation
            </li>
            <li>
              <ExternalLink to="https://replicate.com/meta/musicgen">
                {"Meta's musicgen"}
              </ExternalLink>{" "}
              for music generation
            </li>
          </ul>
        </div>
        <br />
        <br />
        Demo video:
        <a href="https://youtu.be/BFdUyKYq_bY" target="_blank" rel="noreferrer">
          <img
            className="rounded-md w-full"
            src="projectScreenshots/scene-creator.jpg"
            alt="Scene Creator Video Screenshot"
          />
        </a>
        <br />
        <div className="flex gap-2">
          <YouTubeHubPillLink
            title="YouTube Video"
            href="https://youtu.be/BFdUyKYq_bY"
          />
          <GitHubPillLink
            title="Code"
            href="https://github.com/i-am-neon/scene-creator"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "FE Infinity",
    isOpenSource: true,
    content: (
      <p>
        <i>December '24</i>
        <br />
        <br />
        FE Infinity is a system that uses AI to generate original Fire Emblem
        Gameboy Advance games.
        <br />
        <br />
        Video demo and architecture overview:
        <a href="https://youtu.be/-bf9_vbjbSQ" target="_blank" rel="noreferrer">
          <img
            className="rounded-md w-full"
            src="projectScreenshots/fe-infinity.jpg"
            alt="Cerebellum Loom Video Screenshot"
          />
        </a>
        <br />
        <div className="flex gap-2">
          <YouTubeHubPillLink
            title="YouTube Video"
            href="https://youtu.be/-bf9_vbjbSQ"
          />
          <GitHubPillLink
            title="Code"
            href="https://github.com/i-am-neon/fe-infinity"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "Cerebellum",
    isOpenSource: true,
    content: (
      <p>
        <i>
          March '24{" "}
          <ExternalLink to="https://www.linkedin.com/posts/southparkcommons_airtable-everyones-app-platform-activity-7163976818969042944-311q/">
            OpenAI x South Park Commons Hackathon
          </ExternalLink>
        </i>
        <br />
        <br />
        Loom demo:
        <a
          href="https://www.loom.com/share/27ae4e8c5a1e445981f73aef5281d622?sid=2d4c5534-7396-4af2-83c5-4700cfd87d0c"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-md"
            src="projectScreenshots/cerebellum-loom.png"
            alt="Cerebellum Loom Video Screenshot"
          />
        </a>
        <br />
        Cerebellum gives you insights from your handwritten and audio journal
        notes. It is built with OpenAI's GPT-4, DALL-E, Whisper, and Next.js.
        <br />
        <br />
        <div className="flex gap-2">
          <YouTubeHubPillLink
            title="Demo Video"
            href="https://www.loom.com/share/27ae4e8c5a1e445981f73aef5281d622?sid=2d4c5534-7396-4af2-83c5-4700cfd87d0c"
          />
          <GitHubPillLink
            title="Code"
            href="https://github.com/EthosWallet/spc-hackathon"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "Dev Shop",
    isOpenSource: true,
    content: (
      <p>
        <i>July '23</i>
        <br />
        <br />
        <img
          className="rounded-md"
          src="projectScreenshots/dev-shop.png"
          alt="Dev Shop screenshot"
        />
        <br />
        Dev Shop is a "chat with your codebase" experiment using{" "}
        <ExternalLink to="https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/">
          RAG
        </ExternalLink>{" "}
        techniques to learn more about RAG pipelines and how they can be used on
        complex and large codebases:
        <ul className="list-disc flex flex-col gap-2 pt-3">
          <li>
            <strong>
              <ExternalLink to="https://www.pinecone.io/">
                Pinecone
              </ExternalLink>
            </strong>
            : vector database
          </li>
          <li>
            <strong>
              <ExternalLink to="https://www.langchain.com/">
                Langchain
              </ExternalLink>
            </strong>
            : indexing and AI interactions
          </li>
        </ul>
        <br />
        <div className="flex gap-2">
          <GitHubPillLink
            title="Code"
            href="https://github.com/i-am-neon/dev-shop"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "AI Haiku",
    isOpenSource: true,
    content: (
      <p>
        <i>Oct '21</i>
        <br />
        <br />
        <i>GPT-3 Pre-Release + Ethereum + Arweave</i>
        <br />
        <br />
        <Carousel className="mx-12">
          <CarouselContent>
            <CarouselItem>
              <img src="projectScreenshots/ai-haiku.gif" alt="" />
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center h-full">
                <img src="projectScreenshots/ai-haiku.png" alt="" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
        <br />
        <br />
        I&apos;ve made a few NFT collections, but{" "}
        <ExternalLink to="https://www.aihaiku.art/">AI Haiku</ExternalLink> is
        definitely my favorite.
        <br />
        <br />
        With a combination of generative art and natural language processing,
        this project provides a space for people to collaborate with the{" "}
        <strong>GPT-3 pre-release</strong> to create a poem that is eternalized
        on the blockchain.
        <br />
        <br />
        Minters also received a physical copy of their haiku on real handmade
        paper from Japan.{" "}
        <ExternalLink to="https://www.aihaiku.art/paper">
          Learn about the physical haikus
        </ExternalLink>
        <br />
        <br />
        View all haikus on{" "}
        <ExternalLink to="https://opensea.io/collection/ai-haiku">
          OpenSea
        </ExternalLink>
        <br />
        <br />
        <div className="flex gap-2">
          <GitHubPillLink
            title="Frontend"
            href="https://github.com/i-am-neon/ai-haiku-frontend"
          />
          <GitHubPillLink
            title="Image Generator"
            href="https://github.com/i-am-neon/ai-haiku-frontend"
          />
          <GitHubPillLink
            title="Smart Contract"
            href="https://github.com/i-am-neon/ai-haiku-contract"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
];

export const web3ProjectsContent: DropdownSectionItem[] = [
  {
    heading: "Color Changing Noun NFT",
    isOpenSource: true,
    content: (
      <p>
        <i>April '22</i>
        <br />
        <br />
        <img
          className="mx-auto"
          src="https://media.giphy.com/media/7SrmPnpz1mI2bvdmRy/giphy.gif"
          alt="color changing Noun"
        />
        <br />
        With a cleverly-written Solidity smart contract, I created a{" "}
        <ExternalLink to="https://nouns.wtf/">Nouns</ExternalLink> derivative
        that changes colors every time you look at it. Built on Ethereum and
        Arweave.
        <br />
        <br />
        <GitHubPillLink
          title="Code"
          href="https://github.com/0xNeon-opensource/color-changing-noun-nft"
        />
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "Arweave NFT asset uploader NPM package",
    isOpenSource: true,
    content: (
      <p>
        <i>March '22</i>
        <br />
        <br />
        An NPM Package with over 1,000 downloads that makes it easy to upload
        NFT images and metadata to Arweave.
        <br />
        <br />
        <GitHubPillLink
          title="Code"
          href="https://github.com/0xNeon-opensource/arweave-nft-uploader"
        />
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "Sol and Arweave atomic unit converters",
    isOpenSource: true,
    content: (
      <p className="w-full">
        <i>March '22</i>
        <br />
        <br />
        <i>The #1 converter tool in the Solana and Arweave ecosystems!</i>
        <br />
        <br />
        <Carousel className="mx-12">
          <CarouselContent>
            <CarouselItem>
              <img src="projectScreenshots/sol-converter.png" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="projectScreenshots/ar-converter.png" alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
        <br />
        <br />
        Two online calculators to convert Solana and Arweave to their atomic
        units; Lamport and Winston.
        <br />
        <br />
        <span className="flex">
          <ExternalLink to="https://www.solconverter.com/">
            solconverter.com
          </ExternalLink>
          <span className="mx-2"></span>
          <GitHubPillLink
            title="Code"
            href="https://github.com/0xNeon-opensource/solconverter"
          />
        </span>
        <br />
        <span className="flex">
          <ExternalLink to="https://www.arconverter.com/">
            arconverter.com
          </ExternalLink>
          <span className="mx-2"></span>
          <GitHubPillLink
            title="Code"
            href="https://github.com/0xNeon-opensource/arconverter"
          />
        </span>
      </p>
    ),
  } as DropdownSectionItem,
];

export const physicalProjectsContent: DropdownSectionItem[] = [
  {
    heading: "Rave Cape",
    isOpenSource: true,
    content: (
      <p>
        <i>May '24</i>
        <br />
        <br />
        <img className="rounded-md" src="raveCape/rave-cape.gif" alt="" />
        <br />
        <br />
        I hand-crafted a unique LED cape controlled by an ESP32 with a custom
        React Native app.
        <br />
        <br />
        Open source mobile app and hardware schematics coming soon.
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "Cryptocurrency Mining Rigs",
    isOpenSource: true,
    content: (
      <p className="w-full">
        <i>April - Dec '21</i>
        <br />
        <br />
        I learned a ton about Linux and hardware from these projects!
        <br />
        <br />
        <Carousel className="mx-12">
          <CarouselContent>
            <CarouselItem>
              <AspectRatio
                ratio={1}
                className="flex items-center bg-transparent"
              >
                <img
                  src="miningRigs/dense.jpg"
                  alt=""
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio
                ratio={1}
                className="flex items-center bg-transparent"
              >
                <img
                  src="miningRigs/rig-dog.jpg"
                  alt=""
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
        <br />
        <br />
        I Constructed five linux machines each with different specialized
        hardware for various cryptocurrency mining:
        <br />
        <br />
        <ul className="list-disc flex flex-col gap-2">
          <li>
            <strong>Ethereum</strong>: High power and many graphics cards (back
            when Eth was Proof-of-Work)
          </li>
          <li>
            <strong>Arweave and Chia</strong>: Dense storage computers totalling
            over half a petabyte
          </li>
          <li>
            <strong>Monero</strong>: Strong CPUs with a lot of RAM
          </li>
        </ul>
        <br />
        <br />
        I wrote advanced custom software to monitor and manage the hardware,
        including protocols for power outages.
        <br />
        <br />
        <div className="flex gap-2">
          <GitHubPillLink
            title="Eth Rig Controller"
            href="https://github.com/i-am-neon/ethereum-mining-rig-controller"
          />
          <GitHubPillLink
            title="Chia Plotter"
            href="https://github.com/i-am-neon/crypto-chia-plotter"
          />
        </div>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "Wood Working",
    content: (
      <p className="w-full">
        <Carousel className="mx-12">
          <CarouselContent>
            <CarouselItem>
              <AspectRatio
                ratio={1}
                className="flex items-center bg-transparent"
              >
                <img
                  src="woodworking/sun.jpg"
                  alt=""
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio
                ratio={1}
                className="flex items-center bg-transparent"
              >
                <img
                  src="woodworking/moon.jpg"
                  alt=""
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio
                ratio={1}
                className="flex items-center bg-transparent"
              >
                <img
                  src="woodworking/divide.jpg"
                  alt=""
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio
                ratio={1}
                className="flex items-center bg-transparent"
              >
                <img
                  src="woodworking/peace.jpg"
                  alt=""
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
      </p>
    ),
  } as DropdownSectionItem,
  {
    heading: "Hologram Pyramid",
    content: (
      <p className="w-full">
        <i>Dec '17</i>
        <br />
        <br />
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
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
      </p>
    ),
  } as DropdownSectionItem,
];

export const learningCohorsContent: DropdownSectionItem[] = [
  {
    heading: (
      <span>
        Kernel <i>(KB7)</i>
      </span>
    ),
    content: (
      <p>
        <ExternalLink to="https://www.kernel.community/">Kernel</ExternalLink>{" "}
        is a peer-to-peer learning community dedicated to the journey towards a
        better understanding of truth: in our work, in our relationships with
        others, and in our inner worlds.
      </p>
    ),
  } as DropdownSectionItem,
];

