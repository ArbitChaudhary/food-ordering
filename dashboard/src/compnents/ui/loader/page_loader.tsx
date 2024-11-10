import GridLoader from "react-spinners/GridLoader";

function PageLoader() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <GridLoader size={30} loading color="#123288" />
    </div>
  );
}
export default PageLoader;
