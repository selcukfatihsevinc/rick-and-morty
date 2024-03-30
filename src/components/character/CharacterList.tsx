import { useQuery } from "@apollo/client";
import Layout from "../Layout";
import { CHARACTERS_QUERY, TCharacter } from "../../server/queries";

const CharacterList = () => {
  let { data, loading } = useQuery(CHARACTERS_QUERY, {
    variables: { page: 1, filter: {} },
  });

  return (
    <Layout>
      {loading && <div>loading...</div>}

      {!loading && (
        <div>
          {(data?.characters?.results as TCharacter[])?.map((characater) => {
            return <div>{characater.name}</div>;
          })}
        </div>
      )}
    </Layout>
  );
};

export default CharacterList;
