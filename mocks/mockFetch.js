import podcasts from './allPodcasts.json'

export default async function mockFetch(url) {
  switch (url) {
    case 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json': {
      return {
        ok: true,
        status: 200,
        json: async () => podcasts,
      }
    }
    case `https://api.allorigins.win/get?url=${encodeURIComponent(
      'https://itunes.apple.com/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=20',
    )}`: {
      return {
        ok: true,
        status: 200,
        json: async () => podcasts,
      }
    }
    default: {
      throw new Error(`Unhandled request: ${url}`)
    }
  }
}
