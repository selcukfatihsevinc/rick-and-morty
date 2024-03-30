import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import Layout from "../Layout";
import { CHARACTERS_QUERY, TCharacter } from "../../shared/queries";
import Pagination from "../common/Pagination";
import { TPagination } from "../../shared/types";
import CharacterRow from "./CharacterRow";

const CharacterList = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("p") ?? 1);

  let { data, loading } = useQuery(CHARACTERS_QUERY, { variables: { page } });
  const characters = data?.characters?.results as TCharacter[];
  const pagination = data?.characters?.info as TPagination;

  return (
    <Layout>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          <div className="flex justify-end px-3 space-x-[15px] mb-2">
            <div className="w-[80px] text-left text-sm font-semibold">
              Species
            </div>
            <div className="w-[120px] text-left text-sm font-semibold">
              Origin
            </div>
            <div className="w-[120px] text-left text-sm font-semibold">
              Location
            </div>
          </div>

          <div className="border border-gray-200 rounded-md divide-gray-200 divide-y">
            {characters?.map((character) => {
              return <CharacterRow key={character.id} character={character} />;
            })}
          </div>

          {characters.length > 0 && (
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

export default CharacterList;
