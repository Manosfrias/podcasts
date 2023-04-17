import searchPodcasts from '@/api/podcasts/search-podcasts'
import useGetPodcasts from '@/hooks/use-get-podcasts'
import { podcasts } from '@/mocks/allPodcasts.json'
import podcastsDummy from '@/mocks/podcastsDummy'
import searchDummy from '@/mocks/searchDummy'
import Home from '@/pages/index'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

jest.mock('../hooks/use-get-podcasts.js')
jest.mock('../api/podcasts/search-podcasts.js')

beforeEach(() => {
  window.localStorage.setItem('podcasts', JSON.stringify(podcasts))
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Home', () => {
  it('has proper data on', async () => {
    render(<Home />)

    await waitFor(() =>
      expect(localStorage.getItem('podcasts')).toEqual(
        JSON.stringify(podcasts),
      ),
    )
  })

  it('renders the search box', async () => {
    useGetPodcasts.mockImplementation(() => podcastsDummy)
    render(<Home />)
    expect(await screen.findByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Filter podcasts',
    )
  })

  it('renders the Joe Budden Podcast', async () => {
    useGetPodcasts.mockImplementation(() => podcastsDummy)
    const { findByText } = render(<Home />)

    expect(await findByText('The Joe Budden Podcast')).toBeInTheDocument()
  })

  it('should render 5 results for the search "songs"', async () => {
    useGetPodcasts.mockImplementation(() => podcastsDummy)
    searchPodcasts.mockImplementation(() => searchDummy)

    const { getAllByText, findByRole } = render(<Home />)
    const input = await findByRole('textbox')

    await act(async () => {
      fireEvent.change(input, { target: { value: 'songs' } })
    })

    expect(getAllByText(/songs/i)).toHaveLength(5)
  })
})
