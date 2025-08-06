import { NoDataSvg } from "./NoDataSvg";
import "./NotFound.css"
const NotFoundPage = () => (
  <>
    <div className="login-center-wrapper1">
      {/* <div className="login-bg-overlay"></div> */}
      <div className="container login-container1" style={{ position: "relative" }}>
        <div className="text-center" style={{ width: "100%" }}>
          <NoDataSvg />
          <h4 className="mt-9 mb-9 text-2xl leading-snug font-medium text-gray-900">
            Sorry, we didn't find any match!
          </h4>
          <a
            href="/"
            className="rounded-md bg-yellow-500 px-6 py-2 text-white transition hover:bg-yellow-600"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  </>
);

export default NotFoundPage;
