import { Link, Form, redirect, useNavigate } from "react-router";
import { SubmitBtn, Input } from "../components";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    console.log(store);
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data);
    try {
      const response = await customFetch.post("/auth/local", data);
      // console.log(response);
      store.dispatch(loginUser(response.data));
      toast.success("successfully logged in");
      return redirect(`/`);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Welcome, Guest User");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed, try again!");
    }
  };
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
          <Input type="email" label="email" name="identifier" />
          <Input type="password" label="password" name="password" />
          <div className="">
            <SubmitBtn text="login" />
            <button
              type="button"
              className="btn btn-secondary btn-block mt-4 uppercase"
              onClick={loginAsGuestUser}
            >
              guest user
            </button>
            <p className="text-center mt-4 text-sm">
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
