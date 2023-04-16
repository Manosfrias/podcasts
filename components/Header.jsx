import Link from "next/link";
import styled from "styled-components";

const Head = styled.header`
  border-bottom: 1px solid var(--line-color);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.5rem;
  height: 50px;
  padding: 0 var(--layout-padding) 0;
`;
const Spinner = styled.span`
  background: var(--accent-color);
  box-shadow: 0 0 0 0 var(--accent-color);
  border-radius: 50%;
  height: 25px;
  width: 25px;

  animation: pulse-blue 2s infinite;

  @keyframes pulse-blue {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(var(--accent-color-rgb), 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0);
    }
  }
`;
const Header = (props) => {
  return (
    <Head {...props}>
      <Link href="/">Podcaster</Link>
      <Spinner />
    </Head>
  );
};

export default Header;
