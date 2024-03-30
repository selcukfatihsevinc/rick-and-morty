import { Link } from "react-router-dom";

import { TEpisode } from "../../shared/queries";

const EpisodeRow = ({ episode }: { episode: TEpisode }) => {
  return (
    <div className="p-3 flex flex-row items-center hover:bg-gray-100 rounded-md group">
      <Link
        to={`/episode/${episode.id}`}
        className="w-[80px] font-semibold group-hover:underline"
      >
        {episode.episode}
      </Link>
      <span>{episode.name}</span>
    </div>
  );
};

export default EpisodeRow;
