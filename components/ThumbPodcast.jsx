import wrapper from '@/styles/wrapper'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const ThumbImage = styled(Image)`
  border: 1px solid var(--line-color);
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  transition: var(--transition);
`

const Figcaption = styled.figcaption`
  ${wrapper};
  height: 100%;
  margin-top: -30px;
  padding: 40px 20px 20px;
  transition: var(--transition);
  h3 {
    font-size: 1rem;
    line-height: 1em;
  }
  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    ${ThumbImage} {
      transform: scale(1.01);
    }
    ${Figcaption} {
      box-shadow: var(--box-shadow-hover);
    }
  }
`

const ThumbPodcast = ({ data }) => {
  const { title, image, author, id } = data
  return (
    <Link href={`/podcast/${id}`}>
      <Figure>
        <ThumbImage
          width={170}
          height={170}
          src={image}
          alt={`Icon for podcast ${title}`}
        />
        <Figcaption>
          <h3>{title}</h3>
          <p>Author: {author}</p>
        </Figcaption>
      </Figure>
    </Link>
  )
}

export default ThumbPodcast
