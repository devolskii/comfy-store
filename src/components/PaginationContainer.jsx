import { useLoaderData, useLocation, useNavigate } from "react-router";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  // console.log(loc);

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  // console.log(pages);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return null;
  else
    return (
      <div className="mt-16 flex justify-end">
        <div className="join">
          <button
            className={`join-item btn uppercase ${
              page < 2 ? "btn-disabled" : ""
            }`}
            onClick={() => {
              handlePageChange(page - 1);
            }}
          >
            prev
          </button>
          {pages.map((pageNo) => (
            <button
              key={pageNo}
              className={`join-item btn ${
                pageNo === page ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => {
                handlePageChange(pageNo);
              }}
            >
              {pageNo}
            </button>
          ))}
          <button
            className={`join-item btn uppercase ${
              page + 1 > pageCount ? "btn-disabled" : ""
            }`}
            onClick={() => {
              handlePageChange(page + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    );
};
export default PaginationContainer;
