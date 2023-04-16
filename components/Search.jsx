import searchPodcasts from '@/api/podcasts/search-podcasts'
import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid var(--line-color);
  border-radius: var(--border-radius);
  color: var(--primary-color);
  padding: 5px;
  &:focus {
    border-color: var(--accent-color);
    outline-color: var(--accent-color);
  }
`

const Search = ({ getSearchResults }) => {
  const handleSubmit = (query) => {
    const podcasts = searchPodcasts(query)
    getSearchResults(podcasts)
  }

  return (
    <Input
      type="text"
      className="search-input"
      placeholder="Filter podcasts"
      onChange={(e) => handleSubmit(e.target.value)}
    />
  )
}

export default Search
