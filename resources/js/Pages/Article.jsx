import {
  Link,
  Head,
  usePage,
  router,
} from "@inertiajs/react";
import Layout from "../Components/Layout.jsx";
import CacheLink from "../Components/CacheLink.jsx";
import Note from "../Components/Note.jsx";
import parse, { domToReact } from "html-react-parser";

const Post = ({ content, nextPost, prevPost }) => {
  const { baseUrl } = usePage().props;
  const { data } = content;
  const { frontmatter: frontMatter } = data;

  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) {
        return;
      }

      if (attribs.class === "cache-link") {
        return (
          <CacheLink href={attribs["href"]} isStatic>
            {domToReact(children, options)}
          </CacheLink>
        );
      }

      if (attribs.class === "react-note-block") {
        return (
          <Note title={attribs["data-title"]}>
            {domToReact(children, options)}
          </Note>
        );
      }
    },
  };
  const updatedContent = parse(content.value, options);

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta
          head-key="description"
          name="description"
          content={frontMatter.description}
        />
        <meta
          head-key="og:description"
          property="og:description"
          content={frontMatter.description}
        />
        <meta head-key="author" name="author" content="Curious Dev Lab" />
        <meta
          head-key="og:title"
          property="og:title"
          content={frontMatter.title}
        />
        <meta head-key="og:type" property="og:type" content="article" />
        <meta
          head-key="og:url"
          property="og:url"
          content={baseUrl + "/" + frontMatter.slug}
        />
        <meta
          property="article:published_time"
          content={`${frontMatter.date}T10:00:00+00:00`}
        />
      </Head>
      <div className="max-w-6xl m-auto mb-20 px-4">
        <div className="flex justify-center pt-10">
          <CacheLink
            href="/"
            className="text-base hover:underline text-gray-300 hover:text-white font-semibold"
          >
            Go back to the homepage
          </CacheLink>
        </div>
      </div>

      <article className="max-w-3xl m-auto px-6">
        <header>
          <div className="flex flex-row items-center flex-wrap pb-2">
            <time
              dateTime={new Date(frontMatter.date).toDateString("en-US")}
              className="font-semibold text-gray-300 text-lg pr-5"
            >
              {new Date(frontMatter.date).toDateString("en-US").substring(3)}
            </time>
            <div className="flex flex-wrap gap-2">
              {frontMatter.categories
                ? frontMatter.categories.map((category) => (
                    <span
                      key={category}
                      className="border border-yellow-400 text-yellow-400 rounded-md px-1 font-semibold"
                    >
                      {category}
                    </span>
                  ))
                : null}
              {frontMatter.tags
                ? frontMatter.tags.map((tag) => (
                    <span key={tag} className="text-yellow-400 font-semibold">
                      #{tag}
                    </span>
                  ))
                : null}
            </div>
          </div>

          <h1 className="text-5xl lg:text-5xl !leading-[4rem] font-bold w-full mb-12 pb-4 border-b border-b-gray-700">
            {frontMatter.title}
          </h1>
        </header>
        <div
          className="max-w-3xl m-auto pb-24 text-white !text-lg prose
          prose-p:text-gray-200
          [&>ul>li]:pb-4
          prose-code:text-gray-900 prose-code:bg-gray-400 prose-code:rounded-sm
          prose-code:before:hidden prose-code:after:hidden prose-code:px-2
          [&>div>.react-note-block>pre>code]:px-0
          [&>pre>code]:px-0
          [&>h2]:after:content-['🔗'] [&>h2]:after:opacity-0 hover:[&>h2]:after:opacity-100 [&>h2]:after:pl-4 [&>h2]:after:text-xl
          [&>h3]:after:content-['🔗'] [&>h3]:after:opacity-0 hover:[&>h3]:after:opacity-100 [&>h3]:after:pl-4 [&>h3]:after:text-xl
          [&>h4]:after:content-['🔗'] [&>h4]:after:opacity-0 hover:[&>h4]:after:opacity-100 [&>h4]:after:pl-4 [&>h4]:after:text-xl
          [&>.code-title]:font-medium [&>.code-title]:-mb-10 [&>.code-title]:mt-10 [&>.code-title]:bg-gray-700 [&>.code-title]:pb-1 [&>.code-title]:pt-2 [&>.code-title]:rounded-t-lg
          [&>.code-title]:px-3 [&>.code-title]:text-sm
          [&>.code-title+pre]:rounded-none [&>.code-title+pre]:rounded-b-lg
          [&>pre]:my-10
          [&>data-remark-code-title]
          [&>#table-of-contents+ul]:pb-0 
          [&>#table-of-contents+ul>li_a]:no-underline
          [&>#table-of-contents+ul>li>p]:mb-0
          [&>#table-of-contents+ul>li>p]:mt-0
          hover:[&>#table-of-contents+ul>li_a]:underline 
          prose-h2:text-3xl
          prose-h3:text-2xl
          prose-h4:text-xl
          [&>h2>a]:text-white hover:[&>h2>a]:underline [&>h2>a]:no-underline
          [&>h3>a]:text-white hover:[&>h3>a]:underline [&>h3>a]:no-underline
          [&>h4>a]:text-white hover:[&>h4>a]:underline [&>h4>a]:no-underline
          prose-a:text-blue-500 prose-a:underline prose-a:font-bold"
        >
          {updatedContent}
        </div>
      </article>
      <section className="max-w-4xl m-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row gap-10 py-0">
          {prevPost ? (
            <div
              className="py-6 w-full lg:w-1/2 border px-5 border-yellow-500 rounded-md"
              onMouseEnter={() => {
                router.cache().prefetch(prevPost.slug);
              }}
            >
              <p className="pb-2 text-gray-400 font-semibold">
                Previous Article
              </p>
              <h5 className="text-xl font-bold">
                <Link href={prevPost.slug} className="hover:underline">
                  {prevPost.title}
                </Link>
              </h5>
            </div>
          ) : null}

          {nextPost ? (
            <div
              className="ml-auto w-full lg:w-1/2 py-6 border px-5 border-yellow-500 rounded-md"
              onMouseEnter={() => {
                router.cache().prefetch(nextPost.slug);
              }}
            >
              <p className="pb-2 text-gray-400 text-right font-semibold">
                Next Article
              </p>
              <h5 className="text-xl font-bold text-right">
                <Link href={nextPost.slug} className="hover:underline">
                  {nextPost.title}
                </Link>
              </h5>
            </div>
          ) : null}
          <div></div>
        </div>
      </section>
    </>
  );
};

Post.layout = (page) => <Layout children={page} />;

export default Post;
