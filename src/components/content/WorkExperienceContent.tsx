import DropdownSection from "../DropdownSection";

export default function WorkExperienceContent(): JSX.Element {
    return (
        <>
            <DropdownSection
                title={<span>Current</span>}
                content={[{
                    heading: 'Founding Engineer at CodeYam',
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
                            At <a
                                href="https://codeyam.com/"
                                target='_blank'
                                rel="noreferrer"
                                className="text-primary underline"
                            >
                                CodeYam
                            </a> we are experimenting with building a software simulator for complex code repositories.
                            <br /><br />
                            Using LLM data pipelines, RAG, static analysis, and more.
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
                        heading: 'Technology Research Consultant for Peter Diamandis',
                        content: (
                            <p>
                                <i>Nov &apos;19 - Jan &apos;21</i>
                                <br /><br />
                                <i>Part-time, in parallel with below role</i>
                                <br /><br />
                                Assisted <a
                                    href="https://www.diamandis.com/"
                                    target='_blank'
                                    rel="noreferrer"
                                    className="text-primary underline"
                                >
                                    Peter Diamandis
                                </a> by conducting research and analysis to guide the selection of emerging technologies featured at two annual <a
                                    href="https://www.abundance360.com/summit"
                                    target='_blank'
                                    rel="noreferrer"
                                    className="text-primary underline"
                                >
                                    Abundance 360 Conference
                                </a>
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