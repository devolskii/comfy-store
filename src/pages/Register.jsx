import { Link, Form } from "react-router";
import { SubmitBtn, Input } from "../components";
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="">
        <fieldset
          method="post"
          className="fieldset card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        >
          <legend className="fieldset-legend text-center text-3xl font-bold">
            Register
          </legend>
          <Input type="text" label="username" name="username" />
          <Input type="email" label="email" name="identifier" />
          <Input type="password" label="password" name="password" />
          <div className="">
            <SubmitBtn text="register" />
            <p className="text-center mt-4 text-xl">
              Already a member?{" "}
              <Link
                to="/login"
                className="ml-2 link link-hover link-primary capitalize"
              >
                login
              </Link>
            </p>
          </div>
        </fieldset>
      </Form>
    </section>
  );
};
export default Register;
