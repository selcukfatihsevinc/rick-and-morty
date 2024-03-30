import { useQuery } from "@apollo/client";
import { useSearchParams, Link } from "react-router-dom";

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
          <div className="border border-gray-200 rounded-md divide-gray-200 divide-y">
            {episodes?.map((episode) => {
              return (
                <div
                  key={episode.id}
                  className="p-3 flex flex-row items-center hover:bg-gray-100 rounded-md group"
                >
                  <Link
                    to={`/episode/${episode.id}`}
                    className="w-[80px] font-semibold group-hover:underline"
                  >
                    {episode.episode}
                  </Link>
                  <span>{episode.name}</span>
                </div>
              );
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
