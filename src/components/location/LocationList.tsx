import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

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
          <div>
            {locations?.map((location) => {
              return <div>{location.name}</div>;
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
