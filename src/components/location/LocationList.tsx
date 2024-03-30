import { useQuery } from "@apollo/client";
import { useSearchParams, Link } from "react-router-dom";

import Layout from "../Layout";
import { LOCATIONS_QUERY, TLocation } from "../../shared/queries";
import { TPagination } from "../../shared/types";
import Pagination from "../common/Pagination";

const LocationList = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("p") ?? 1);

  let { data, loading } = useQuery(LOCATIONS_QUERY, { variables: { page } });
  const locations = data?.locations?.results as TLocation[];
  const pagination = data?.locations?.info as TPagination;

  return (
    <Layout>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          <div className="flex justify-end px-3 space-x-[15px] mb-2">
            <div className="w-[100px] text-left text-sm font-semibold">
              Type
            </div>
            <div className="w-[120px] text-left text-sm font-semibold">
              Dimension
            </div>
          </div>

          <div className="border border-gray-200 rounded-md divide-gray-200 divide-y">
            {locations?.map((location) => {
              return (
                <div
                  key={location.id}
                  className="p-3 flex flex-row items-center justify-between hover:bg-gray-100 rounded-md group"
                >
                  <Link
                    to={`/location/${location.id}`}
                    className="font-semibold group-hover:underline"
                  >
                    {location.name}
                  </Link>

                  <div className="flex flex-row items-center space-x-[15px]">
                    <span className="w-[100px] truncate text-left">
                      {location.type}
                    </span>
                    <span className="w-[120px] truncate text-left">
                      {location.dimension}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {locations.length > 0 && (
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

export default LocationList;
