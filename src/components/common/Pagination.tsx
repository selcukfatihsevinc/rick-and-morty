import { useSearchParams } from "react-router-dom";

const Pagination = ({
  prev,
  next,
  total,
  perPage = 20,
}: {
  prev: number | null;
  next: number | null;
  total: number;
  perPage?: number;
}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("p") ?? 1);

  return (
    <div className="mt-6 mb-9 flex flex-row items-center justify-between">
      <div>
        showing{" "}
        <span className="font-semibold">{(page - 1) * perPage + 1}</span>-
        <span className="font-semibold">
          {page * perPage > total ? total : page * perPage}
        </span>{" "}
        of <span className="font-semibold">{total}</span> entries
      </div>

      <div className="flex flex-row space-x-[8px]">
        {prev && (
          <button onClick={() => setSearchParams({ p: String(prev) })}>
            Prev
          </button>
        )}
        {next && (
          <button onClick={() => setSearchParams({ p: String(next) })}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
