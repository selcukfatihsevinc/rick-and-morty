import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { SINGLE_CHARACTER_QUERY, TCharacter } from "../../shared/queries";
import EpisodeRow from "../episode/EpisodeRow";

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
            <div className="flex flex-row">
              <span className="font-semibold w-[80px]">Status:</span>
              <span>{character.status}</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold w-[80px]">Species:</span>
              <span>{character.species}</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold w-[80px]">Type:</span>
              <span>{character.type}</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold w-[80px]">Gender:</span>
              <span>{character.gender}</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold w-[80px]">Origin:</span>
              <span>{character.origin.name}</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold w-[80px]">Location:</span>
              <span>{character.location.name}</span>
            </div>
          </div>

          {character?.episode?.length > 0 && (
            <div className="mb-9">
              <h2 className="text-2xl font-semibold text-gray-500 mt-9 mb-3">
                Episodes
              </h2>

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
