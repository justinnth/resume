import { TypographyH1 } from "@components/atoms/typography/TypographyH1"
import { TypographyH3 } from "@components/atoms/typography/TypographyH3"
import { TypographyInlineCode } from "@components/atoms/typography/TypographyInlineCode"
import { TypographyP } from "@components/atoms/typography/TypographyP"

export default function Uses() {
  const ul = "my-6 ml-6 list-disc [&>li]:mt-2"

  return (
    <div className="container z-10 my-32 flex flex-col gap-11">
      <div>
        <TypographyH1>Uses</TypographyH1>
        <TypographyP>Liste des outils et technologies que j’utilise.</TypographyP>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <TypographyH3>PC / Bureau</TypographyH3>
          <ul className={ul}>
            <li>13” Macbook Air M1</li>
            <li>Écran Dell 27” 1440p</li>
            <li>Keychron K8 Pro</li>
            <li>Logitech MX Master 3</li>
            <li>Bureau assis/debout Songmics</li>
          </ul>
        </div>
        <div>
          <TypographyH3>Code</TypographyH3>
          <ul className={ul}>
            <li>Visual Studio Code</li>
            <li>
              Terminal : Warp avec <TypographyInlineCode>oh-my-zsh</TypographyInlineCode>
            </li>
          </ul>
        </div>
        <div>
          <TypographyH3>Logiciels</TypographyH3>
          <ul className={ul}>
            <li>Arc 😍</li>
            <li>Spotify</li>
            <li>Dashlane</li>
            <li>Raycast</li>
          </ul>
        </div>
        <div>
          <TypographyH3>Autres</TypographyH3>
          <ul className={ul}>
            <li>iPhone 13</li>
            <li>Airpods Pro</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
