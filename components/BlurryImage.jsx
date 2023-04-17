import Image from 'next/image'
import styled from 'styled-components'

const CardImage = styled(Image)`
  display: block;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  width: 100%;
`
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const BlurryImage = (props) => {
  return (
    <CardImage
      {...props}
      placeholder="blur"
      blurDataURL={rgbDataURL(237, 181, 6)}
    />
  )
}

export default BlurryImage
