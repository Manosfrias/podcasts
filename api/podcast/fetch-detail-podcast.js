import formatDetailPodcast from '@/formatters/detailPodcast'

const fetchDetailPodcast = async (id) => {
  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
    )}`,
  )
  const resPromisse = await res.json()

  const podcastRaw = JSON.parse(resPromisse.contents)
  return formatDetailPodcast(podcastRaw)
}

export default fetchDetailPodcast
