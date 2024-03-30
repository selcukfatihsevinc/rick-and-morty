import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import Layout from "../Layout";
import { EPISODES_QUERY, TEpisode } from "../../shared/queries";
import Pagination from "../common/Pagination";
import { TPagination } from "../../shared/types";

const EpisodeList = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("p") ?? 1);

  let { data, loading } = useQuery(EPISODES_QUERY, { variables: { page } });
  const episodes = data?.episodes?.results as TEpisode[];
  const pagination = data?.episodes?.info as TPagination;

  return (
    <Layout>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          <div>
            {episodes?.map((episode) => {
              return <div>{episode.name}</div>;
            })}
          </div>

          {episodes.length > 0 && (
            <Pagination
              prev={pagination?.prev}
              next={pagination?.next}
              total={pagination?.count}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default EpisodeList;
