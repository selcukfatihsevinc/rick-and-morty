import { Link } from "react-router-dom";

import { TLocation } from "../../shared/queries";

const LocationRow = ({ location }: { location: TLocation }) => {
  return (
    <div className="p-3 flex flex-row items-center justify-between hover:bg-gray-100 rounded-md group">
      <Link
        to={`/location/${location.id}`}
        className="font-semibold group-hover:underline"
      >
        {location.name}
      </Link>

      <div className="flex flex-row items-center space-x-[15px]">
        <span className="w-[100px] truncate text-left">{location.type}</span>
        <span className="w-[120px] truncate text-left">
          {location.dimension}
        </span>
      </div>
    </div>
  );
};

export default LocationRow;
