import Layout from "../Components/Layout";
import { Link } from "../inertiajsflow/react/index.esm";
const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] py-10 px-4">
      <h1 className="text-8xl font-black mb-2">404</h1>
      <h2 className="text-5xl mb-8">Page Not Found</h2>
      <p className="text-center text-gray-500 text-xl leading-loose font-semibold">
        The page you are looking for was not found. <br/> Maybe your URL got messed
        up?
      </p>
      <Link href="/" className="text-white mt-10 text-lg hover:underline font-semibold border px-4 py-2 rounded-md">Go back home</Link>
    </section>
  );
};

NotFound.layout = (page) => <Layout children={page} hideFooter />;

export default NotFound;
