import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { SINGLE_LOCATION_QUERY, TLocation } from "../../shared/queries";

const LocationDetail = () => {
  let { id } = useParams();

  let { data, loading } = useQuery(SINGLE_LOCATION_QUERY, {
    variables: { id },
  });

  const location = data?.location as TLocation;

  return (
    <div className={`h-full max-w-[800px] mx-auto`}>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          <Link to="/locations" className="h-[40px] flex items-center">
            {"<"} Locations
          </Link>

          <div className="flex flex-row items-center pt-[80px] pb-[30px]">
            <div className="text-4xl font-semibold flex flex-row items-center space-x-[10px]">
              <span className="">{location.name}</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-md p-6 hidden">
            location data
          </div>
        </>
      )}
    </div>
  );
};

export default LocationDetail;
