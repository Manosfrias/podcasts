import wrapper from '@/styles/wrapper'
import styled from 'styled-components'

import BlurryImage from './BlurryImage'

const Aside = styled.aside`
  ${wrapper};
  overflow: hidden;
`

const TextSection = styled.section`
  border-top: 1px solid var(--line-color);
  padding: var(--card-padding);
  h1,
  h2 {
    font-size: var(--primary-font-size);
    line-height: 1em;
  }
  p {
    font-size: var(--secondary-font-size);
    font-variant: italic;
    margin-top: 0.5rem;
  }
`

const PodcastCard = ({ data }) => {
  const { title, detailImage, author, description } = data
  return (
    <Aside>
      {detailImage && (
        <BlurryImage
          width={600}
          height={600}
          src={detailImage}
          alt={`Icon for podcast ${title}`}
        />
      )}
      <TextSection>
        <h1>{title}</h1>
        <p>by: {author}</p>
      </TextSection>
      <TextSection>
        <h2>Description</h2>
        <p>{description}</p>
      </TextSection>
    </Aside>
  )
}

export default PodcastCard
