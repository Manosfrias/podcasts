import moment from 'moment'

const formatEpisode = (data) => {
  return {
    id: data.trackId,
    title: data.trackName,
    date: moment(data.releaseDate).format('DD/M/YYYY'),
    duration: moment(data.trackTimeMillis).format('hh:mm:ss'),
    url: data.episodeUrl,
    description: data.description,
  }
}

export default formatEpisode
