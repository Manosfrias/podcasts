import { useEffect, useState } from 'react'

import wrapper from '@/styles/wrapper'
import { Interweave } from 'interweave'
import { EmailMatcher, UrlMatcher } from 'interweave-autolink'
import styled from 'styled-components'

const Section = styled.section`
  ${wrapper};
  padding: var(--card-padding);
`

const Audio = styled.audio`
  margin-top: 25px;
  width: 100%;
`

const Text = styled.div`
  margin-top: 25px;
  a {
    color: var(--accent-color);
  }
`

const EpisodeCard = ({ data }) => {
  const { title, url, description } = data
  const [desc, setDesc] = useState(null)

  useEffect(() => setDesc(description), [])

  return (
    <Section>
      <h2>{title}</h2>
      {description && (
        <Text>
          <Interweave
            newWindow={true}
            matchers={[new EmailMatcher('email'), new UrlMatcher('url')]}
            noWrap
            content={desc}
          />
        </Text>
      )}
      <Audio controls>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </Audio>
    </Section>
  )
}

export default EpisodeCard
