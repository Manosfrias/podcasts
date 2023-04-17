import formatEpisode from './episode'

const formatDetailPodcast = (data) => {
  const podcastData = data.results.shift()
  const episodes = data?.results.map((episode) => formatEpisode(episode))
  console.log('formateo el podcastdetail')
  return {
    detailImage: podcastData?.artworkUrl600 ?? null,
    episodesCount: podcastData?.trackCount,
    episodes,
  }
}

export default formatDetailPodcast
