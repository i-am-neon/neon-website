import { Helmet } from "react-helmet";

export default function Head() {
    const title = 'NΞ◎N';
    const description = 'Who is NΞ◎N?';
    const ogImageUrl = 'https://arweave.net/nLoRhYwTPXb41X3WfZm1_uYSxqAk8wF5Rb7d4xfSnRM';
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content="https://www.0xneon.com/" />
            <meta property="og:image" content={ogImageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
    )
}