import Link from "next/link"

import { Logo } from "@components/atoms/Logo"
import { Spotify } from "@components/organisms/Spotify"

export const Header = () => {
  return (
    <nav className="z-10 flex justify-between">
      <Link href="">
        <Logo />
      </Link>

      <div className="flex gap-4">
        {/* @ts-expect-error Async Server Component */}
        <Spotify />
        <p>-</p>
        <div className="flex gap-4">
          <Link href="uses">Uses</Link>
          <Link href="a-propos">À propos</Link>
        </div>
      </div>
    </nav>
  )
}
