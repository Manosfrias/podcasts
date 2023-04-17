import useGetPodcast from './use-get-podcast'

const useGetEpisode = (id, episodeId) => {
  const podcast = useGetPodcast(id)
  const episode = podcast?.episodes?.filter(
    (episode) => episode.id.toString() === episodeId.toString(),
  )[0]

  return {
    episode: episode,
    podcast,
  }
}

export default useGetEpisode
