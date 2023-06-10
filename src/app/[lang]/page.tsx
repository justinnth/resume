import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import { TypographyH1 } from "@components/atoms/typography/TypographyH1"
import { TypographyH3 } from "@components/atoms/typography/TypographyH3"
import { TypographyInlineCode } from "@components/atoms/typography/TypographyInlineCode"
import { TypographyP } from "@components/atoms/typography/TypographyP"
import { Formation } from "@components/molecules/Formation"
import justin from "@public/justin.jpeg"
import { getDictionary } from "@utils/get-dictionaries"
import { Locale } from "@utils/locale"

export const metadata = {
  title: "Justin North",
  description: "Développeur fullstack",
}

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="container z-10 mx-auto my-16 md:my-32">
      <div className=" mb-24 flex flex-col-reverse items-center md:mb-56 md:flex-row">
        <div className="mt-20 md:mr-40">
          <TypographyH1 className="mb-3">
            {dictionary.home.header.hey}
            <span className="font-lobster"> Justin North</span>.
          </TypographyH1>
          <TypographyP>{dictionary.home.header.job}</TypographyP>
          <div className="mb-4 flex gap-1 text-sm text-muted-foreground dark:text-mutedDark-foreground">
            <a href="mailto:justin_n@hotmail.fr">justin_n@hotmail.fr</a>
            <p>-</p>
            <a href="tel:+33646094431">+33 6 46 09 44 31</a>
          </div>
          <div className="flex gap-2 transition-colors">
            <a href="https://github.com/justinnth">
              <GitHubLogoIcon
                width={24}
                height={24}
                className="hover:text-purple-900 dark:hover:text-purple-400"
              />
            </a>
            <a href="https://www.linkedin.com/in/justin-north/">
              <LinkedInLogoIcon
                width={24}
                height={24}
                className="hover:text-purple-900 dark:hover:text-purple-400"
              />
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl bg-background dark:bg-backgroundDark">
          <Image
            className="mix-blend-luminosity"
            src={justin}
            alt="justin"
            width={300}
            placeholder="blur"
          />
        </div>
      </div>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">{dictionary.home.about.title}</TypographyH3>
          <TypographyP>{dictionary.home.about.contentDev}</TypographyP>
          <TypographyP>{dictionary.home.about.contentExtra}</TypographyP>
        </div>

        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">
            {dictionary.home.professional.title}
          </TypographyH3>
          <div className="mt-1 flex flex-col gap-10 divide-y">
            <Formation
              date={dictionary.home.professional.experiences.lonestone.date}
              title={dictionary.home.professional.experiences.lonestone.title}
              school={dictionary.home.professional.experiences.lonestone.school}
            >
              <TypographyP>
                {dictionary.home.professional.experiences.lonestone.description}
              </TypographyP>
              <ul className="ml-6 mt-6 list-disc [&>li]:mt-2">
                <li>
                  <TypographyInlineCode>Typescript</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>React</TypographyInlineCode> {dictionary.andThe} React
                  Server Components,
                </li>
                <li>
                  <TypographyInlineCode>Next.js v13</TypographyInlineCode> {dictionary.withThe}{" "}
                  <TypographyInlineCode>appDir</TypographyInlineCode>{" "}
                  {dictionary.home.professional.experiences.lonestone.classicPages}
                </li>
                <li>
                  <TypographyInlineCode>NestJS</TypographyInlineCode> {dictionary.toCreateAPIS}
                </li>
                <li>
                  <TypographyInlineCode>GraphQL</TypographyInlineCode> {dictionary.with} Apollo,
                </li>
                <li>
                  <TypographyInlineCode>Chakra UI</TypographyInlineCode>{" "}
                  {dictionary.home.professional.experiences.lonestone.forStyles}
                </li>
              </ul>
            </Formation>
            <Formation
              date={dictionary.home.professional.experiences.goliath.date}
              title={dictionary.home.professional.experiences.goliath.title}
              school={dictionary.home.professional.experiences.goliath.school}
            >
              <TypographyP>
                {dictionary.home.professional.experiences.goliath.description}
              </TypographyP>
              <ul className="ml-6 mt-6 list-disc [&>li]:mt-2">
                <li>
                  <TypographyInlineCode>Javascript</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>PHP</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>VueJS</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>NuxtJS</TypographyInlineCode>{" "}
                  {dictionary.home.professional.experiences.goliath.nuxt}
                </li>
                <li>
                  <TypographyInlineCode>Wordpress</TypographyInlineCode>{" "}
                  {dictionary.home.professional.experiences.goliath.headless}
                </li>
                <li>
                  <TypographyInlineCode>
                    {dictionary.home.professional.experiences.goliath.rest}
                  </TypographyInlineCode>{" "}
                  {dictionary.createdBy} Wordpress.
                </li>
              </ul>
            </Formation>
            <Formation
              date={dictionary.home.professional.experiences.ecritel.date}
              title={dictionary.home.professional.experiences.ecritel.title}
              school={dictionary.home.professional.experiences.ecritel.school}
            >
              <TypographyP>
                {dictionary.home.professional.experiences.ecritel.description}
              </TypographyP>
              <ul className="ml-6 mt-6 list-disc [&>li]:mt-2">
                <li>
                  <TypographyInlineCode>Javascript</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>Python</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>VueJS</TypographyInlineCode>{" "}
                  {dictionary.home.professional.experiences.ecritel.front}
                </li>
                <li>
                  <TypographyInlineCode>Django</TypographyInlineCode> {dictionary.toCreateAPIS}
                </li>
                <li>
                  <TypographyInlineCode>WebSocket</TypographyInlineCode>{" "}
                  {dictionary.home.professional.experiences.ecritel.chat}
                </li>
              </ul>
            </Formation>
          </div>
        </div>

        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">{dictionary.home.formations.title}</TypographyH3>
          <div className="flex flex-col gap-10 divide-y">
            <Formation
              date={dictionary.home.formations.formations.master.date}
              title={dictionary.home.formations.formations.master.title}
              school={dictionary.home.formations.formations.master.school}
            >
              <TypographyP>
                {dictionary.home.formations.formations.master.description1}{" "}
                <TypographyInlineCode>PWA</TypographyInlineCode>{" "}
                {dictionary.home.formations.formations.master.description2}
              </TypographyP>
              <ul className="ml-6 mt-6 list-disc [&>li]:mt-2">
                <li>
                  <TypographyInlineCode>Javascript</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>CSS</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>VueJS</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>NuxtJS</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>React</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>WebSocket</TypographyInlineCode>.
                </li>
              </ul>
            </Formation>
            <Formation
              date={dictionary.home.formations.formations.licence.date}
              title={dictionary.home.formations.formations.licence.title}
              school={dictionary.home.formations.formations.licence.school}
            />
            <Formation
              date={dictionary.home.formations.formations.dut.date}
              title={dictionary.home.formations.formations.dut.title}
              school={dictionary.home.formations.formations.dut.school}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
