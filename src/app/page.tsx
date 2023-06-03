import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import { TypographyH1 } from "@components/atoms/typography/TypographyH1"
import { TypographyH3 } from "@components/atoms/typography/TypographyH3"
import { TypographyInlineCode } from "@components/atoms/typography/TypographyInlineCode"
import { TypographyP } from "@components/atoms/typography/TypographyP"
import { Formation } from "@components/molecules/Formation"

export const metadata = {
  title: "Justin North",
  description: "Développeur fullstack",
}

export default function Home() {
  return (
    <div className="container z-10 mx-auto my-32">
      <div className="mb-56 flex items-center">
        <div className="mr-40">
          <TypographyH1 className="mb-3">
            Salut ! Moi c’est <span className="font-lobster">Justin North</span>.
          </TypographyH1>
          <TypographyP>Je suis développeur Fullstack chez Lonestone.</TypographyP>
          <div className="mb-4 flex gap-1 text-sm text-muted-foreground">
            <a href="mailto:justin_n@hotmail.fr">justin_n@hotmail.fr</a>
            <p>-</p>
            <a href="tel:+33646094431">+33 6 46 09 44 31</a>
          </div>
          <div className="flex gap-2 transition-colors">
            <a href="https://github.com/justinnth">
              <GitHubLogoIcon width={24} height={24} className="hover:text-purple-900" />
            </a>
            <a href="https://www.linkedin.com/in/justin-north/">
              <LinkedInLogoIcon width={24} height={24} className="hover:text-purple-900" />
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl bg-background">
          <Image
            className="mix-blend-luminosity"
            src="/justin.jpeg"
            alt="justin"
            width={300}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">À propos de moi</TypographyH3>
          <TypographyP>
            Développeur fullstack chez Lonestone, j’ai pu acquérir ces compétences grâce à mon
            expérience en entreprise ainsi qu’à mon parcours, à la suite d’un IUT, d’une licence en
            Informatique et d’un Master en développement web.
          </TypographyP>
          <TypographyP>
            En dehors du développement web, je suis également passionné de cinéma, de photographie
            et de musique, je n&apos;en pratique pas mais je ne peux pas me passer d&apos;en écouter
            chaque jour. Je fais aussi du skateboard depuis plus de 10 ans.
          </TypographyP>
        </div>

        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">Expériences professionnelles</TypographyH3>
          <div className="mt-1 flex flex-col gap-10 divide-y">
            <Formation
              date="2022 - Aujourd'hui"
              title="Développeur fullstack"
              school="Lonestone, Nantes"
            >
              <TypographyP>
                Développeur fullstack spécialisé en Typescript, React, Nextjs et NestJS pour le
                backend. J&apos;ai travaillé sur des projets avec les technologies suivantes:
              </TypographyP>
              <ul className="ml-6 mt-6 list-disc [&>li]:mt-2">
                <li>
                  <TypographyInlineCode>Typescript</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>React</TypographyInlineCode> et les React Server Components,
                </li>
                <li>
                  <TypographyInlineCode>Next.js v13</TypographyInlineCode> avec le{" "}
                  <TypographyInlineCode>appDir</TypographyInlineCode> ou le dossier pages classique,
                </li>
                <li>
                  <TypographyInlineCode>NestJS</TypographyInlineCode> pour créer des APIs,
                </li>
                <li>
                  <TypographyInlineCode>GraphQL</TypographyInlineCode> avec Apollo,
                </li>
                <li>
                  <TypographyInlineCode>Chakra UI</TypographyInlineCode> pour les styles.
                </li>
              </ul>
            </Formation>
            <Formation
              date="2019 - 2021"
              title="Développeur front-end"
              school="Studio Goliath, Nantes"
            >
              <TypographyP>
                Développeur front-end utilisant NuxtJS avec Wordpress en tant que CMS headless.
                J&apos;ai travaillé avec les technologies suivantes:
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
                  <TypographyInlineCode>NuxtJS</TypographyInlineCode> pour le front-end et la
                  connextion avec Wordpress,
                </li>
                <li>
                  <TypographyInlineCode>Wordpress</TypographyInlineCode> en tant que CMS headless,
                </li>
                <li>
                  <TypographyInlineCode>API REST</TypographyInlineCode> créée par Wordpress.
                </li>
              </ul>
            </Formation>
            <Formation date="2018-2019" title="Développeur fullstack" school="Ecritel, Nantes">
              <TypographyP>
                Développeur fullstack sur VueJS avec Python et son framework Django pour le backend.
              </TypographyP>
              <ul className="ml-6 mt-6 list-disc [&>li]:mt-2">
                <li>
                  <TypographyInlineCode>Javascript</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>Python</TypographyInlineCode>,
                </li>
                <li>
                  <TypographyInlineCode>VueJS</TypographyInlineCode> pour le front-end,
                </li>
                <li>
                  <TypographyInlineCode>Django</TypographyInlineCode> pour la création des APIs,
                </li>
                <li>
                  <TypographyInlineCode>WebSocket</TypographyInlineCode> pour la création d&apos;un
                  chat.
                </li>
              </ul>
            </Formation>
          </div>
        </div>

        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">Formations</TypographyH3>
          <div className="flex flex-col gap-10 divide-y">
            <Formation
              date="2019 - 2021"
              title="Mastère Développement web"
              school="ECV Digital, Nantes"
            >
              <TypographyP>
                J&apos;ai obtenu mon diplôme de Mastère avec la mention Bien. <br /> Lors de mon
                projet de fin d&apos;études, j&apos;ai développé une application
                d&apos;apprentissage de l&apos;algorithmie de manière ludique. J&apos;ai développé
                une <TypographyInlineCode>PWA</TypographyInlineCode> et étudié les technologies
                suivantes:
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
              date="2019"
              title="Licence informatique"
              school="Université de La Rochelle, La Rochelle"
            />
            <Formation date="2017" title="DUT Informatique" school="IUT La Rochelle, La Rochelle" />
          </div>
        </div>
      </div>
    </div>
  )
}
