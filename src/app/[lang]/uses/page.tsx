import { TypographyH1 } from "@components/atoms/typography/TypographyH1"
import { TypographyH3 } from "@components/atoms/typography/TypographyH3"
import { TypographyInlineCode } from "@components/atoms/typography/TypographyInlineCode"
import { TypographyP } from "@components/atoms/typography/TypographyP"
import { getDictionary } from "@utils/get-dictionaries"
import { Locale } from "@utils/locale"

export const metadata = {
  title: "Justin North - Uses",
  description: "Développeur fullstack",
}

export default async function Uses({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  const ul = "my-6 ml-6 list-disc [&>li]:mt-2"

  return (
    <div className="container z-10 my-32 flex flex-col gap-11">
      <div>
        <TypographyH1>Uses</TypographyH1>
        <TypographyP>{dictionary.uses.description}</TypographyP>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <TypographyH3>{dictionary.uses.pc}</TypographyH3>
          <ul className={ul}>
            <li>13” Macbook Air M1</li>
            <li>{dictionary.uses.screen}</li>
            <li>Keychron K8 Pro</li>
            <li>Logitech MX Master 3</li>
            <li>{dictionary.uses.desk}</li>
          </ul>
        </div>
        <div>
          <TypographyH3>Code</TypographyH3>
          <ul className={ul}>
            <li>Visual Studio Code</li>
            <li>
              {dictionary.uses.shell} : Warp {dictionary.with}{" "}
              <TypographyInlineCode>oh-my-zsh</TypographyInlineCode>
            </li>
          </ul>
        </div>
        <div>
          <TypographyH3>{dictionary.uses.software}</TypographyH3>
          <ul className={ul}>
            <li>Arc 😍</li>
            <li>Spotify</li>
            <li>Dashlane</li>
            <li>Raycast</li>
          </ul>
        </div>
        <div>
          <TypographyH3>{dictionary.uses.other}</TypographyH3>
          <ul className={ul}>
            <li>iPhone 13</li>
            <li>Airpods Pro</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
