import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import Layout from "../Layout";
import { CHARACTERS_QUERY, TCharacter } from "../../shared/queries";
import Pagination from "../common/Pagination";
import { TPagination } from "../../shared/types";

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
          <div>
            {characters?.map((characater) => {
              return <div key={characater.id}>{characater.name}</div>;
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
