import { useQuery } from "@apollo/client";

import Layout from "../Layout";
import { LOCATIONS_QUERY, TLocation } from "../../server/queries";

const LocationList = () => {
  let { data, loading } = useQuery(LOCATIONS_QUERY, {
    variables: { page: 1, filter: {} },
  });

  return (
    <Layout>
      {loading && <div>loading...</div>}

      {!loading && (
        <div>
          {(data?.locations?.results as TLocation[])?.map((location) => {
            return <div>{location.name}</div>;
          })}
        </div>
      )}
    </Layout>
  );
};

export default LocationList;
