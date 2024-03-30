import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { SINGLE_LOCATION_QUERY, TLocation } from "../../shared/queries";
import CharacterRow from "../character/CharacterRow";

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
          <Link
            to="/locations"
            className="h-[40px] flex items-center font-medium"
          >
            {"<"} Locations
          </Link>

          <div className="flex flex-row items-center pt-[80px] pb-[30px]">
            <div className="text-4xl font-semibold flex flex-row items-center space-x-[10px]">
              <span className="">{location.name}</span>
            </div>
          </div>

          {location?.residents?.length > 0 && (
            <div className="mb-9">
              <h2 className="text-2xl font-semibold text-gray-500 mt-9 mb-3">
                Residents
              </h2>

              <div className="list-wrapper">
                {location?.residents?.map((resident) => {
                  return (
                    <CharacterRow key={resident.id} character={resident} />
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LocationDetail;
