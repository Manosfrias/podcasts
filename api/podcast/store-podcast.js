import moment from 'moment'

import storePodcasts from '../podcasts/store-podcasts'
import fetchDetailPodcast from './fetch-detail-podcast'

const storePodcast = (id) => {
  return checkLocalStorage(id)
}

const checkLocalStorage = async (id) => {
  const localPodcasts = localStorage.getItem('podcasts')
  if (!localPodcasts) {
    return storePodcasts().then(() => store(id))
  }

  return await store(id)
}

const store = async (id) => {
  if (!id) {
    return null
  }

  const today = moment()
  const localPodcasts = localStorage.getItem('podcasts')

  const { storageKey, podcasts } = JSON.parse(localPodcasts)

  const filteredPodcast = podcasts.filter(
    (podcast) => podcast.id.toString() === id.toString(),
  )[0]
  const filteredPodcastIndex = podcasts.indexOf(filteredPodcast)
  const isMoreThan24 = today.diff(localPodcasts?.storageKey, 'd') > 0

  if (!filteredPodcast?.storageKey && !isMoreThan24) {
    const detail = await fetchDetailPodcast(id)
    podcasts[filteredPodcastIndex] = {
      ...filteredPodcast,
      ...detail,
      storageKey: today,
    }

    localStorage.setItem('podcasts', JSON.stringify({ storageKey, podcasts }))
  }
  return podcasts[filteredPodcastIndex]
}

export default storePodcast
