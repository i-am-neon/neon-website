import { Helmet } from "react-helmet";
import { useColor } from "../providers/ColorProvider";

export default function Head() {
    const { currentHexColor } = useColor()
    const title = 'NΞ◎N';
    const description = 'Who is NΞ◎N?';
    const ogImageUrl = 'https://arweave.net/nLoRhYwTPXb41X3WfZm1_uYSxqAk8wF5Rb7d4xfSnRM';
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:url" content="https://neon.lol"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content={description}></meta>
            <meta property="og:image" content={ogImageUrl}></meta>

            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:domain" content="neon.lol"></meta>
            <meta property="twitter:url" content="https://neon.lol"></meta>
            <meta name="twitter:title" content={title}></meta>
            <meta name="twitter:description" content={description}></meta>
            <meta name="twitter:image" content={ogImageUrl}></meta>

            <meta name="theme-color" content={currentHexColor}></meta>

            <link rel="icon" href="/favicon.ico" />
        </Helmet>
    )
}
