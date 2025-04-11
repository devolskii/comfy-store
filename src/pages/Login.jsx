import { Link, Form } from "react-router";
import { SubmitBtn, Input } from "../components";
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="">
        <fieldset
          method="post"
          className="fieldset card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        >
          <legend className="fieldset-legend text-center text-3xl font-bold">
            Login
          </legend>
          <Input
            type="email"
            label="email"
            name="identifier"
            defaultValue="test@test.com"
          />
          <Input
            type="password"
            label="password"
            name="password"
            defaultValue="secret"
          />
          <div className="">
            <SubmitBtn text="login" />
            <button
              type="button"
              className="btn btn-secondary btn-block mt-4 uppercase"
            >
              guest user
            </button>
            <p className="text-center mt-4 text-xl">
              Not a member yet?{" "}
              <Link
                to="/register"
                className="ml-2 link link-hover link-primary capitalize"
              >
                register
              </Link>
            </p>
          </div>
        </fieldset>
      </Form>
    </section>
  );
};
export default Login;
