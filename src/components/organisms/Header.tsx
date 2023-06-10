import Link from "next/link"

import { ChangeLanguage } from "@components/atoms/ChangeLanguage"
import { MobileMenu } from "@components/molecules/MobileMenu"
import { Spotify } from "@components/organisms/Spotify"
import { Locale } from "@utils/locale"

type HeaderProps = {
  lang: Locale
}

export const Header = ({ lang }: HeaderProps) => {
  return (
    <nav className="container z-20 mx-auto flex items-center justify-between">
      <Link className="font-lobster text-2xl" href={`/${lang}`}>
        Justin.
      </Link>

      <MobileMenu lang={lang} />

      <div className="hidden items-center justify-between space-x-8 md:flex">
        <div className="flex gap-4">
          {/* @ts-expect-error Async Server Component */}
          <Spotify />
          <p>-</p>

          <Link href={`/${lang}/uses`}>Uses</Link>

          <p>·</p>
          <ChangeLanguage lang={lang} />
        </div>
      </div>
    </nav>
  )
}
