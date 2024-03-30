import { Link } from "react-router-dom";

import { TCharacter } from "../../shared/queries";

const CharacterRow = ({ character }: { character: Partial<TCharacter> }) => {
  return (
    <div className="p-3 flex flex-row items-center justify-between hover:bg-gray-100 group">
      <div className="flex flex-row items-center">
        <img
          src={character.image}
          alt={character.name}
          width={40}
          className="rounded-md mr-[10px]"
        />
        <Link
          to={`/character/${character.id}`}
          className="font-semibold group-hover:underline"
        >
          {character.name}
        </Link>
      </div>
      <div className="flex flex-row items-center space-x-[15px]">
        {/* <div>{character.status}</div> */}
        <div className="w-[80px] truncate text-left">{character.species}</div>
        {/* <div>{character.type}</div> */}
        {/* <div>{character.gender}</div> */}
        <div className="w-[120px] truncate text-left">
          {character?.origin?.name}
        </div>
        <div className="w-[120px] truncate text-left">
          {character?.location?.name}
        </div>
      </div>
    </div>
  );
};

export default CharacterRow;
