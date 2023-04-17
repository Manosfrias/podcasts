import EpisodeCard from '@/components/EpisodeCard'
import PodcastCard from '@/components/PodcastCard'
import useGetEpisode from '@/hooks/use-get-episode'
import useToggleLoading from '@/hooks/use-toggle-loading'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  column-gap: 5%;
  grid-template-columns: 30% 65%;
  & > * {
    align-self: start;
  }
`

const EpisodePage = ({ podcastId, episodeId }) => {
  const { episode, podcast } = useGetEpisode(podcastId, episodeId)
  useToggleLoading(typeof podcast === 'object')
  return (
    <Wrapper>
      {podcast && <PodcastCard data={podcast} />}
      {episode && <EpisodeCard data={episode} />}
    </Wrapper>
  )
}

export const getServerSideProps = ({ query }) => {
  return {
    props: {
      podcastId: query.id,
      episodeId: query.episodeId,
    },
  }
}

export default EpisodePage
