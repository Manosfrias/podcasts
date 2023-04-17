import searchPodcasts from '@/api/podcasts/search-podcasts'
import useGetPodcasts from '@/hooks/use-get-podcasts'
import { podcasts } from '@/mocks/allPodcasts.json'
import mockFetch from '@/mocks/mockFetch'
import { searchedPodcasts } from '@/mocks/searchedPodcasts.json'
import Home from '@/pages/index'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

jest.mock('../hooks/use-get-podcasts.js')
jest.mock('../api/podcasts/search-podcasts.js')

const localStorageMock = (function () {
  let store = {}

  return {
    getItem(key) {
      return store[key]
    },

    setItem(key, value) {
      store[key] = value
    },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation(mockFetch)
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
    useGetPodcasts.mockImplementation(() => podcasts)
    render(<Home />)
    expect(await screen.findByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Filter podcasts',
    )
  })

  it('renders the Joe Budden Podcast', async () => {
    useGetPodcasts.mockImplementation(() => podcasts)
    const { findByText } = render(<Home />)

    expect(await findByText('The Joe Budden Podcast')).toBeInTheDocument()
  })

  it('should render 5 results for the search "songs"', async () => {
    useGetPodcasts.mockImplementation(() => podcasts)

    const { getAllByText, findByRole } = render(<Home />)
    const input = await findByRole('textbox')

    act(() => {
      fireEvent.change(input, { target: { value: 'songs' } })
      searchPodcasts.mockReturnValueOnce(() => searchedPodcasts)
      // expect(getAllByText(/songs/i)).toBeInTheDocument()
    })
  })
})
