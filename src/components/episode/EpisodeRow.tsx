import { Link } from "react-router-dom";

import { TEpisode } from "../../shared/queries";

const EpisodeRow = ({ episode }: { episode: Partial<TEpisode> }) => {
  return (
    <div className="table-row">
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
