import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import Layout from "../Layout";
import { LOCATIONS_QUERY, TLocation } from "../../shared/queries";
import { TPagination } from "../../shared/types";
import Pagination from "../common/Pagination";
import LocationRow from "./LocationRow";

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
          <div className="table-header">
            <div className="w-[100px] table-header-cell">Type</div>
            <div className="w-[120px] table-header-cell">Dimension</div>
          </div>

          <div className="list-wrapper">
            {locations?.map((location) => {
              return <LocationRow key={location.id} location={location} />;
            })}
          </div>

          {locations?.length > 0 && (
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
