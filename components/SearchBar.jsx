import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  gap: 5px;
  margin-top: -2.5%;
  padding-bottom: 3%;
`
const SearchBar = ({ children }) => {
  return <Section>{children}</Section>
}

export default SearchBar
