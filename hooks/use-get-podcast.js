import { useEffect, useState } from 'react'

import storePodcast from '@/api/podcast/store-podcast'

const useGetPodcast = (id) => {
  const [podcast, setPodcast] = useState({})

  useEffect(() => {
    storePodcast(id).then((podcast) => {
      setPodcast(podcast)
    })
  }, [id])

  return podcast
}

export default useGetPodcast
