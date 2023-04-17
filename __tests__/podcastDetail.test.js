import useGetPodcast from '@/hooks/use-get-podcast'
import podcastDummy from '@/mocks/podcastDummy'
import PodcastPage from '@/pages/podcast/[id]'
import { render, screen } from '@testing-library/react'

jest.mock('../hooks/use-get-podcast.js')

describe('Podcaspage', () => {
  it('renders the title', async () => {
    const podcastId = '1535809341'
    const data = podcastDummy

    useGetPodcast.mockImplementation(() => data)

    render(<PodcastPage podcastId={podcastId} />)

    const heading = screen.getByRole('heading', {
      name: 'The Joe Budden Podcast',
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the image', async () => {
    const podcastId = '1535809341'
    const data = podcastDummy

    useGetPodcast.mockImplementation(() => data)

    render(<PodcastPage podcastId={podcastId} />)

    const image = screen.getByAltText('Icon for podcast The Joe Budden Podcast')
    expect(image).toBeInTheDocument()
  })

  it('renders the last 20 episodes + heading', async () => {
    const podcastId = '1535809341'
    const data = podcastDummy

    useGetPodcast.mockImplementation(() => data)

    render(<PodcastPage podcastId={podcastId} />)

    const episodesList = screen.getByRole('table')
    expect(episodesList.children).toHaveLength(21)
  })
})
