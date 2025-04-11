import { useNavigation } from "react-router";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  console.log(navigation);
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block uppercase"
      disabled={!isSubmitting}
    >
      {/* SUBMITTING CHANGE PLEASE */}
      {!isSubmitting ? (
        <span className="loading loading-spinner loading-lg" />
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
