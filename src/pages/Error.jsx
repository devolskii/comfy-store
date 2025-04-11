import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className=" h-screen grid place-items-center">
        <div className=" text-center">
          <h1 className="text-9xl font-semibold text-primary">404</h1>
          <p className="mt-4 text-3xl font-bold tracking-tight">
            page not found
          </p>
          <p className="mt-6 text-lg">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link className="uppercase mt-10 btn btn-secondary" to="/">
            Go back home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="h-screen grid place-items-center">
      <h1 className="mt-4 text-4xl font-bold lowercase tracking-tight">
        There was an error...
      </h1>
    </main>
  );
};
export default Error;
