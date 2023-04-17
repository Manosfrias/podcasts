import wrapper from '@/styles/wrapper'
import Link from 'next/link'
import styled from 'styled-components'
import { css } from 'styled-components'

const Header = styled.header`
  ${wrapper};
  display: flex;
  align-items: center;
  font-size: var(--accent-font-size);
  font-weight: 700;
  height: 50px;
  margin-bottom: 25px;
  padding: 0 var(--card-padding);
`
const sharedCol = css`
  color: var(--secondary-color);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
  min-height: 40px;
  padding: 5px;
`
const TitleCol = styled.li`
  ${sharedCol};
  border-bottom: 1px solid var(--line-color);
  font-size: var(--primary-font);
  font-weight: 700;
  padding-bottom: 5px;
`
const Col = styled.li`
  &:nth-child(odd) {
    background-color: var(--line-color);
  }
  &:hover {
    opacity: 1;
  }
`
const Title = styled.span`
  flex: 1 0 70%;
`
const Data = styled.span`
  flex: 1 0 15%;
`
const StyledLink = styled(Link)`
  ${sharedCol};
  font-size: var(--secondary-font);
  ${Title} {
    color: var(--accent-color);
  }
`
const Wrapper = styled.ul`
  ${wrapper};
  padding: var(--card-padding);
  &:hover ${Col}:not(:hover) {
    opacity: 0.5;
  }
`
const EpisodesList = ({ podcastId, episodes, episodesCount }) => {
  return (
    <section>
      <Header>Episodes: {episodesCount}</Header>
      <Wrapper
        role="table"
        aria-label="Episodes' list"
        aria-describedby="Last 20 episodes"
      >
        <TitleCol>
          <Title role="columnheader" aria-sort="none">
            Title
          </Title>
          <Data role="columnheader" aria-sort="none">
            Date
          </Data>
          <Data role="columnheader" aria-sort="none">
            Duration
          </Data>
        </TitleCol>
        {episodes.map((episode) => {
          const { title, date, duration, id } = episode
          return (
            <Col key={id}>
              <StyledLink href={`/podcast/${podcastId}/episode/${id}`}>
                <Title role="columnheader" aria-sort="none">
                  {title}
                </Title>
                <Data role="columnheader" aria-sort="none">
                  {date}
                </Data>
                <Data role="columnheader" aria-sort="none">
                  {duration}
                </Data>
              </StyledLink>
            </Col>
          )
        })}
      </Wrapper>
    </section>
  )
}

export default EpisodesList
