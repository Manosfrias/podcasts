import styled from 'styled-components'

const Span = styled.section`
  background: var(--accent-color);
  border-radius: 50px;
  color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: 700;
  padding: 5px;
`
const Badged = ({ children }) => {
  return <Span>{children}</Span>
}

export default Badged
