import DropdownSection from "../DropdownSection";

export default function WorkExperienceContent(): JSX.Element {
    return (
        <>
            <DropdownSection
                title={<span>Current</span>}
                content={[{
                    heading: 'Founding Engineer at Stealth Startup',
                    content: (
                        <p>
                            <i>January &apos;24 - Present</i>
                            <br /><br />
                            <i>Incubated at <a
                                href="https://www.southparkcommons.com/"
                                target='_blank'
                                rel="noreferrer"
                                className="text-primary underline"
                            >
                                South Park Commons
                            </a></i>
                            <br /><br />
                            We are experimenting with building a software simulator for complex projects.
                            <br /><br />
                            LLM data pipelines, RAG, static analysis, and more.
                        </p>
                    )
                }]}
            />
            <DropdownSection
                title={<span>Past</span>}
                content={[
                    {
                        heading: 'Founding Engineer at Ethos Wallet',
                        content: (
                            <p>
                                <i>Jan &apos;22 - Jan &apos;24</i>
                                <br /><br />
                                <i>Incubated at <a
                                    href="https://www.southparkcommons.com/"
                                    target='_blank'
                                    rel="noreferrer"
                                    className="text-primary underline"
                                >
                                    South Park Commons
                                </a></i>
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
                    },
                    {
                        heading: 'Full Stack Engineer at Fortune 100 Financial Institution',
                        content: (
                            <p>
                                <i>Aug &apos;19 - Jan &apos;22</i>
                                <br /><br />
                                Angular + .NET
                            </p>
                        )
                    },
                ]}
            />
        </>
    )
}