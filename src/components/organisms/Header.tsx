import Link from "next/link"

import { ChangeLanguage } from "@components/atoms/ChangeLanguage"
import { Spotify } from "@components/organisms/Spotify"
import { Locale } from "@utils/locale"

type HeaderProps = {
  lang: Locale
}

export const Header = ({ lang }: HeaderProps) => {
  return (
    <nav className="container z-10 mx-auto flex items-center justify-between">
      <Link className="font-lobster text-2xl" href={`/${lang}`}>
        Justin.
      </Link>

      <div className="flex gap-4">
        {/* @ts-expect-error Async Server Component */}
        <Spotify />
        <p>-</p>
        <div className="flex gap-4">
          <Link href={`/${lang}/uses`}>Uses</Link>
        </div>
        <p>·</p>
        <ChangeLanguage lang={lang} />
      </div>
    </nav>
  )
}
