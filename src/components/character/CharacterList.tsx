import { useQuery } from "@apollo/client";
import { useSearchParams, Link } from "react-router-dom";

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
            {characters?.map((characater) => {
              return (
                <div
                  key={characater.id}
                  className="p-3 flex flex-row items-center justify-between hover:bg-gray-100 rounded-md group"
                >
                  <div className="flex flex-row items-center">
                    <img
                      src={characater.image}
                      alt={characater.name}
                      width={40}
                      className="rounded-md mr-[10px]"
                    />
                    <Link
                      to={`/character/${characater.id}`}
                      className="font-semibold group-hover:underline"
                    >
                      {characater.name}
                    </Link>
                  </div>
                  <div className="flex flex-row items-center space-x-[15px]">
                    {/* <div>{characater.status}</div> */}
                    <div className="w-[80px] truncate text-left">
                      {characater.species}
                    </div>
                    {/* <div>{characater.type}</div> */}
                    {/* <div>{characater.gender}</div> */}
                    <div className="w-[120px] truncate text-left">
                      {characater.origin.name}
                    </div>
                    <div className="w-[120px] truncate text-left">
                      {characater.location.name}
                    </div>
                  </div>
                </div>
              );
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