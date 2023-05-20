import { z } from "zod"

export const currentTrackSchema = z.object({
  is_playing: z.boolean(),
  item: z
    .object({
      name: z.string(),
      artists: z.array(
        z.object({
          name: z.string(),
        }),
      ),
      album: z.object({
        name: z.string(),
        images: z.array(
          z.object({
            url: z.string().url(),
          }),
        ),
      }),
      external_urls: z.object({
        spotify: z.string().url(),
      }),
    })
    .optional(),
})

export type CurrentTrack = z.infer<typeof currentTrackSchema>

type CurrentTrackProps = {
  promise: Promise<CurrentTrack>
}

export const CurrentTrack = async ({ promise }: CurrentTrackProps) => {
  const song = await promise

  const isPlaying = song.is_playing
  const title = song.item?.name
  const artist = song.item?.artists.map((_artist) => _artist.name).join(", ")

  if (!isPlaying) return <div>Not playing</div>

  return (
    <div>
      <p>
        {artist} - ${title}
      </p>
    </div>
  )
}
