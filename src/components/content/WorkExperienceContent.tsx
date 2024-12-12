import DropdownSection from "../DropdownSection";
import ExternalLink from "../ExternalLink";

export default function WorkExperienceContent(): JSX.Element {
  return (
    <>
      <DropdownSection
        title={<span>Current</span>}
        content={[
          {
            heading: "Founder at Infinit Games",
            content: (
              <p>
                <i>July &apos;24 - Present</i>
                <br />
                <br />
                {/* <i>
                  Incubated at{" "}
                  <ExternalLink to="https://www.southparkcommons.com/">
                    South Park Commons
                  </ExternalLink>
                </i> */}
                I'm creating a video game that creates itself as you play it.
              </p>
            ),
          },
        ]}
      />
      <DropdownSection
        title={<span>Past</span>}
        content={[
          {
            heading: "Founding Engineer at CodeYam",
            content: (
              <p>
                <i>January &apos;24 - July &apos;24</i>
                <br />
                <br />
                <i>
                  Incubated at{" "}
                  <ExternalLink to="https://www.southparkcommons.com/">
                    South Park Commons
                  </ExternalLink>
                </i>
                <br />
                <br />
                At{" "}
                <ExternalLink to="https://codeyam.com/">
                  CodeYam
                </ExternalLink>{" "}
                we are experimenting with building a software simulator for
                complex code repositories.
                <br />
                <br />
                Using LLM data pipelines, RAG, static analysis, and more.
              </p>
            ),
          },
          {
            heading: "Founding Engineer at Ethos Wallet",
            content: (
              <p>
                <i>Jan &apos;22 - Jan &apos;24</i>
                <br />
                <br />
                <i>
                  Incubated at{" "}
                  <ExternalLink to="https://www.southparkcommons.com/">
                    South Park Commons
                  </ExternalLink>
                </i>
                <br />
                <br />
                <ExternalLink to="https://www.ethoswallet.xyz/">
                  Ethos
                </ExternalLink>{" "}
                is a top wallet on the{" "}
                <ExternalLink to="https://sui.io/">Sui blockchain</ExternalLink>
                with over 100k users that is often praised for its user
                experience.
              </p>
            ),
          },
          {
            heading: "Technology Research Consultant for Peter Diamandis",
            content: (
              <p>
                <i>Nov &apos;19 - Jan &apos;21</i>
                <br />
                <br />
                <i>Part-time, in parallel with below role</i>
                <br />
                <br />
                Assisted{" "}
                <ExternalLink to="https://www.diamandis.com/">
                  Peter Diamandis
                </ExternalLink>{" "}
                by conducting research and analysis to guide the selection of
                emerging technologies featured at two annual{" "}
                <ExternalLink to="https://www.abundance360.com/summit">
                  Abundance 360 Conference
                </ExternalLink>
              </p>
            ),
          },
          {
            heading: "Full Stack Engineer at Fortune 100 Financial Institution",
            content: (
              <p>
                <i>Aug &apos;19 - Jan &apos;22</i>
                <br />
                <br />
                Angular + .NET
              </p>
            ),
          },
        ]}
      />
    </>
  );
}

