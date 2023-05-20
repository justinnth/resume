import Image from "next/image"

import {
  CurrentTrack,
  currentTrackSchema,
} from "@components/molecules/CurrentTrack"
import { getAccessToken } from "@utils/spotify"

const getCurrentlyPlayingTrack = async (): Promise<CurrentTrack> => {
  const { access_token } = await getAccessToken()

  const response = await fetch(
    `${process.env.SPOTIFY_API_URL}/me/player/currently-playing`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache",
    },
  )

  if (response.status === 204 || response.status > 400) {
    return { is_playing: false }
  }

  const currentTrackJson = await response.json()
  const currentTrack = currentTrackSchema.parse(currentTrackJson)

  return currentTrack
}

export const Spotify = async () => {
  const song = getCurrentlyPlayingTrack()

  return (
    <div className="flex gap-2">
      {/* @ts-expect-error Async Server Component */}
      <CurrentTrack promise={song} />
      <Image src="/spotify.png" width={24} height={24} alt="spotify logo" />
    </div>
  )
}
