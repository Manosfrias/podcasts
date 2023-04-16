const formatThumbPodcast = (data) => {
  return {
    id: data?.id?.attributes["im:id"] ?? null,
    title: data["im:name"]?.label ?? "No title",
    image: data["im:image"][2]?.label ?? null,
    author: data["im:artist"]?.label ?? "No author",
    description: data.summary?.label ?? "No description",
  };
};

export default formatThumbPodcast;
