import { useLoaderData, useLocation, useNavigate } from "react-router";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  console.log(meta);

  const { page, pageCount } = meta.pagination;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // console.log(pages);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    // console.log(searchParams.toString());

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn join-item ${
          activeClass ? "bg-base-300 border-base-300 " : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    console.log("inside render page butons");

    const pageButtons = [];

    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));
    // dots
    if (page > 2) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }

    // active/current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    // console.log(pageButtons);
    return pageButtons;
  };

  if (pageCount < 2) {
    return null;
  } else {
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
          {pageCount < 6
            ? Array.from({ length: pageCount }, (_, index) => {
                return index + 1;
              }).map((pageNo) => (
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
              ))
            : renderPageButtons()}
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
  }
};
export default PaginationContainer;
