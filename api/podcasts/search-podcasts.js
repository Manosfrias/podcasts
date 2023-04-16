const searchPodcasts = (query) => {
  const localPodcasts = localStorage.getItem('podcasts')
  const { podcasts } = JSON.parse(localPodcasts)
  return podcasts?.filter((podcast) => {
    return podcast.title.toLowerCase().includes(query.toLowerCase())
  })
}

export default searchPodcasts
