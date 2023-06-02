import Link from "next/link"

import { Spotify } from "@components/organisms/Spotify"

export const Header = () => {
  return (
    <nav className="container z-10 mx-auto flex items-center justify-between">
      <Link className="font-lobster text-2xl" href="/">
        Justin.
      </Link>

      <div className="flex gap-4">
        {/* @ts-expect-error Async Server Component */}
        <Spotify />
        <p>-</p>
        <div className="flex gap-4">
          <Link href="uses">Uses</Link>
        </div>
      </div>
    </nav>
  )
}
