import { useEffect, useState } from 'react'

import storePodcasts from '@/api/podcasts/store-podcasts'

const useGetPodcasts = () => {
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    storePodcasts().then((podcasts) => setPodcasts(podcasts))
  }, [])

  return podcasts
}

export default useGetPodcasts
