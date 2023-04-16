import moment from 'moment'

import fetchPodcasts from './fetch-podcasts'

const storePodcasts = async () => {
  const localPodcasts = localStorage?.getItem('podcasts')
  const today = moment()
  const isMoreThan24 = today.diff(localPodcasts?.storageKey, 'd') > 0

  if (!localPodcasts && !isMoreThan24) {
    const podcasts = await fetchPodcasts()
    localStorage.setItem(
      'podcasts',
      JSON.stringify({ storageKey: today, podcasts }),
    )
    return podcasts
  }

  const { podcasts } = JSON.parse(localPodcasts)
  return podcasts
}

export default storePodcasts
