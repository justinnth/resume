import Image from "next/image"

import { TypographyH1 } from "@components/atoms/typography/TypographyH1"
import { TypographyH3 } from "@components/atoms/typography/TypographyH3"
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
          <div className="flex gap-1 text-sm text-muted-foreground">
            <a href="mailto:justin_n@hotmail.fr">justin_n@hotmail.fr</a>
            <p>-</p>
            <a href="tel:+33646094431">+33 6 46 09 44 31</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl bg-current">
          <Image
            className="mix-blend-luminosity"
            src="/justin.jpeg"
            alt="justin"
            width={300}
            height={400}
          />
        </div>
      </div>

      <div className="flex max-w-4xl flex-col gap-24">
        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">À propos de moi</TypographyH3>
          <TypographyP>
            Développeur fullstack chez Lonestone, j’ai pu acquérir ces compétences grâce à mon
            expérience en entreprise ainsi qu’à mon parcours, à la suite d’un IUT, d’une licence en
            Informatique et d’un Master en développement web, je suis polyvalent dans beaucoup de
            langages.
          </TypographyP>
        </div>

        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">Expériences professionnelles</TypographyH3>
          <div className="flex flex-col divide-y ">
            <Formation
              date="2022 - Aujourd'hui"
              title="Développeur Fullstack"
              school="Lonestone, Nantes"
              description="Développeur fullstack spécialisé en Typescript, React, Nextjs et NestJS pour le backend."
            />
            <Formation
              date="2019 - 2021"
              title="Développeur front-end"
              school="Studio Goliath, Nantes"
              description="Développeur front-end utilisant NuxtJS avec Wordpress en tant que CMS headless."
            />
            <Formation
              date="2018-2019"
              title="Développeur fullstack"
              school="Ecritel, Nantes"
              description="Développeur fullstack sur VueJS avec Python et son framework Django pour le backend."
            />
          </div>
        </div>

        <div className="flex flex-col">
          <TypographyH3 className="mb-3 text-4xl">Formations</TypographyH3>
          <div className="flex flex-col divide-y">
            <Formation
              date="2019 - 2021"
              title="Mastère Développement web"
              school="ECV Digital, Nantes"
              description="Lors de mon projet de fin d'études, j'ai développé une application d'apprentissage de l'algorithmie de manière ludique."
            />
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
