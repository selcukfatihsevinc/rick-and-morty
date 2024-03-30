import { useQuery } from "@apollo/client";

import Layout from "../Layout";
import { EPISODES_QUERY, TEpisode } from "../../server/queries";

const EpisodeList = () => {
  let { data, loading } = useQuery(EPISODES_QUERY, {
    variables: { page: 1, filter: {} },
  });

  return (
    <Layout>
      {loading && <div>loading...</div>}

      {!loading && (
        <div>
          {(data?.episodes?.results as TEpisode[])?.map((episode) => {
            return <div>{episode.name}</div>;
          })}
        </div>
      )}
    </Layout>
  );
};

export default EpisodeList;
