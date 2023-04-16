import formatPodcast from '@/formatters/podcast'

const fetchPodcasts = async () => {
  const res = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  )

  const allData = await res.json()
  return allData?.feed?.entry?.map((podcast) => formatPodcast(podcast))
}

export default fetchPodcasts
