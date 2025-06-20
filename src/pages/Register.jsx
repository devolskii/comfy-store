import { Link, Form, redirect } from "react-router";
import { SubmitBtn, Input } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  try {
    await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    // console.log(error);

    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
  }
};

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
          <Input type="email" label="email" name="email" />
          <Input type="password" label="password" name="password" />
          <div className="">
            <SubmitBtn text="register" />
            <p className="text-center mt-4 text-sm">
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
