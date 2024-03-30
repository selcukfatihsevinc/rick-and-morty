import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { SINGLE_EPISODE_QUERY, TEpisode } from "../../shared/queries";

const EpisodeDetail = () => {
  let { id } = useParams();

  let { data, loading } = useQuery(SINGLE_EPISODE_QUERY, {
    variables: { id },
  });

  const episode = data?.episode as TEpisode;

  return (
    <div className={`h-full max-w-[800px] mx-auto`}>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          <Link to="/episodes" className="h-[40px] flex items-center">
            {"<"} back
          </Link>

          <div className="flex flex-row items-center pt-[80px] pb-[30px]">
            <div className="text-4xl font-semibold flex flex-row items-center space-x-[10px]">
              <span className="text-gray-400">{episode.episode}</span>
              <span className="">{episode.name}</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-md p-6 hidden">
            episode data
          </div>
        </>
      )}
    </div>
  );
};

export default EpisodeDetail;
