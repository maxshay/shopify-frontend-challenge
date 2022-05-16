import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center mt-4">
      This page does not exist, please go back to{" "}
      <Link to="/" className="text-blue-600 underline">
        home
      </Link>
    </div>
  );
}

export default NotFoundPage;
