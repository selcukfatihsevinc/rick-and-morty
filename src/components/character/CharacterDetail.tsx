import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { SINGLE_CHARACTER_QUERY, TCharacter } from "../../shared/queries";
import EpisodeRow from "../episode/EpisodeRow";
import DetailInfo from "../common/DetailInfo";
import DetailSectionTitle from "../common/DetailSectionTitle";

const CharacterDetail = () => {
  let { id } = useParams();

  let { data, loading } = useQuery(SINGLE_CHARACTER_QUERY, {
    variables: { id },
  });

  const character = data?.character as TCharacter;

  return (
    <div className={`h-full max-w-[800px] mx-auto`}>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          <Link
            to="/characters"
            className="h-[40px] flex items-center font-medium"
          >
            {"<"} Characters
          </Link>

          <div className="flex flex-row items-center pt-[80px] pb-[30px]">
            <img
              src={character.image}
              alt={character.name}
              width={60}
              className="rounded-md mr-[15px]"
            />
            <div className="text-4xl font-semibold">{character.name}</div>
          </div>

          <div className="border border-gray-200 rounded-md p-6">
            <DetailInfo title="Status" value={character.status} />
            <DetailInfo title="Species" value={character.species} />
            <DetailInfo title="Type" value={character.type} />
            <DetailInfo title="Gender" value={character.gender} />
            <DetailInfo title="Origin" value={String(character.origin.name)} />
            <DetailInfo
              title="Location"
              value={String(character.location.name)}
            />
          </div>

          {character?.episode?.length > 0 && (
            <div className="mb-9">
              <DetailSectionTitle title="Episodes" />
              <div className="list-wrapper">
                {character?.episode?.map((episode) => {
                  return <EpisodeRow key={episode.id} episode={episode} />;
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
