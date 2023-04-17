import useGetEpisode from '@/hooks/use-get-episode'
import episodeDummy from '@/mocks/episodeDummy'
import EpisodePage from '@/pages/podcast/[id]/episode/[episodeId]'
import { render, screen } from '@testing-library/react'

jest.mock('../hooks/use-get-episode.js')

describe('EpisodePage', () => {
  it('renders the podcast title', async () => {
    const podcastId = '1535809341'
    const episodeId = '1000609059022'
    const data = episodeDummy

    useGetEpisode.mockImplementation(() => data)

    render(<EpisodePage episodeId={episodeId} podcastId={podcastId} />)

    const heading = screen.getByRole('heading', {
      name: 'The Joe Budden Podcast',
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the image', async () => {
    const podcastId = '1535809341'
    const episodeId = '1000609059022'
    const data = episodeDummy

    useGetEpisode.mockImplementation(() => data)

    render(<EpisodePage episodeId={episodeId} podcastId={podcastId} />)

    const image = screen.getByAltText('Icon for podcast The Joe Budden Podcast')
    expect(image).toBeInTheDocument()
  })
  it('renders the episode title', async () => {
    const podcastId = '1535809341'
    const episodeId = '1000609059022'
    const data = episodeDummy

    useGetEpisode.mockImplementation(() => data)

    render(<EpisodePage episodeId={episodeId} podcastId={podcastId} />)

    const heading = screen.getByRole('heading', {
      name: 'Episode 618 | "They Got Us"',
    })
    expect(heading).toBeInTheDocument()
  })
})
