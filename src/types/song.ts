export const requiredKeys = [
  'url',
  'requestedBy',
] as const;

export const optionalKeys = [
  'artistSocial',
  'note',
] as const;

type RequiredKeys = typeof requiredKeys[number]
type OptionalKeys = typeof optionalKeys[number]

export type SongType = (
  Record<RequiredKeys, string> &
  Record<OptionalKeys, string | undefined>
)
