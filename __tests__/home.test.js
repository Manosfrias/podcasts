import { podcasts } from '@/mocks/allPodcasts.json'
import mockFetch from '@/mocks/mockFetch'
import Home from '@/pages/index'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

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
  window.localStorage.setItem('podcasts', JSON.stringify(podcasts))
  jest.spyOn(window, 'fetch').mockImplementation(mockFetch)
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Home', () => {
  it('renders a searchbox', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'placeholder',
        'Filter podcasts',
      )
    })
  })

  it('should render some results', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(localStorage.getItem('podcasts')).toEqual(JSON.stringify(podcasts))
      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'songs' } })
    })
  })
})
