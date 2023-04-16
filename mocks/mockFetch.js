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
    case 'https://dog.ceo/api/breed/husky/images':
    case 'https://dog.ceo/api/breed/cattledog/images': {
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
