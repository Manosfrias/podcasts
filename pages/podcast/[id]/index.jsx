import EpisodesList from '@/components/EpisodesList'
import PodcastCard from '@/components/PodcastCard'
import useGetPodcast from '@/hooks/use-get-podcast'
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

const PodcastPage = ({ podcastId }) => {
  const podcast = useGetPodcast(podcastId)
  useToggleLoading(podcast?.episodes?.length > 0)
  return (
    podcast && (
      <Wrapper>
        {podcast?.episodes && <PodcastCard data={podcast} />}
        {podcast?.episodes && (
          <EpisodesList
            podcastId={podcast.id}
            episodesCount={podcast.episodesCount}
            episodes={podcast.episodes}
          />
        )}
      </Wrapper>
    )
  )
}

export const getServerSideProps = ({ query }) => {
  return {
    props: {
      podcastId: query.id,
    },
  }
}

export default PodcastPage
