import Badged from "@/components/Badged";
import Search from "@/components/Search";
import SearchBar from "@/components/SearchBar";
import ThumbPodcast from "@/components/ThumbPodcast";
import useGetPodcasts from "@/hooks/use-get-podcasts";
import useToggleLoading from "@/hooks/use-toggle-loading";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
export default function Home() {
  const initialPodcasts = useGetPodcasts();
  const [podcasts, setPodcasts] = useState([]);

  useToggleLoading(initialPodcasts?.length > 0);

  useEffect(() => {
    setPodcasts(initialPodcasts);
  }, [initialPodcasts]);

  return (
    podcasts && (
      <>
        <SearchBar>
          <Badged>{podcasts.length}</Badged>
          <Search getSearchResults={(results) => setPodcasts(results)} />
        </SearchBar>

        <Section>
          {podcasts.map((podcast, key) => (
            <ThumbPodcast data={podcast} key={podcast?.id ?? key} />
          ))}
        </Section>
      </>
    )
  );
}
