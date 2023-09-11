import { Link, Head } from "@inertiajs/react";
import Layout from "../Components/Layout";
import CacheLink from "../Components/CacheLink";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <meta head-key="og:type" property="og:type" content="website" />
      </Head>
      <section className="max-w-6xl m-auto px-4 pt-24 pb-24 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-yellow-400 w-full mb-3">
          <CacheLink href="/">Curious Dev Lab</CacheLink>
        </h1>
        <p className="text-xl">Writing about Laravel and Javascript.</p>
      </section>

      <section className="max-w-4xl m-auto px-4 pb-32">
        <h5 className="text-lg mb-3 font-semibold">Latest Articles</h5>
        <ul className="flex flex-col space-y-6">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <div className="border border-gray-600 overflow-hidden hover:border-yellow-100 flex flex-col lg:flex-row lg:items-start justify-between py-4 px-4 bg-gray-900 rounded-md">
                <div className="lg:pr-10">
                  <h2 className="text-xl font-semibold hover:underline">
                    {index <= 5 ? (
                      <CacheLink isStatic href={post.slug}>
                        {post.title}
                      </CacheLink>
                    ) : (
                      <Link href={post.slug}> {post.title}</Link>
                    )}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.categories
                      ? post.categories.map((category) => (
                          <span
                            key={category}
                            className="border border-yellow-400 text-yellow-400 rounded-md px-1 font-semibold"
                          >
                            {category}
                          </span>
                        ))
                      : null}
                    {post.tags
                      ? post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-yellow-400 font-semibold"
                          >
                            #{tag}
                          </span>
                        ))
                      : null}
                  </div>
                </div>
                <time
                  dateTime={new Date(post.date).toDateString("en-US")}
                  className="flex-none text-gray-400 text-base ml-auto lg:ml-0"
                >
                  {new Date(post.date).toDateString().substring(3)}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Home.layout = (page) => <Layout children={page} />;

export default Home;
