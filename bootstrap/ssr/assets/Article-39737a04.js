import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { L as Lo, n as nl, O as Op, s as sl } from "../ssr.js";
import { L as Layout } from "./Layout-64d8c8c7.js";
import { C as CacheLink } from "./CacheLink-6abf4a74.js";
import parse, { domToReact } from "html-react-parser";
import { H as HeroTwo } from "./HeroTwo.jsx-8f45fa44.js";
import { H as HeroOne } from "./HeroOne.jsx-c1697ca8.js";
import { H as HeroThree } from "./HeroThree.jsx-3c5bbcef.js";
import { H as HeroFour } from "./HeroFour.jsx-163f0f22.js";
import "react-dom/server";
import "react";
import "lodash.isequal";
import "http";
import "process";
const Note = ({ title, children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "border-2 rounded-md w-full min-w-0 px-2 md:px-2 max-w-prose sm:max-w-none pb-[12px] border-yellow-500 my-12", children: [
    /* @__PURE__ */ jsx("div", { className: "flex text-yellow-500 -mt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center px-4 bg-[#0f1218] rounded-full", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "1.5",
          stroke: "currentColor",
          className: "w-6 h-6",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm font-semibold", children: title ?? "Note" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-4 py-1 react-note-block", children })
  ] });
};
const Post = ({ content, nextPost, prevPost }) => {
  const { baseUrl } = Lo().props;
  const { data } = content;
  const { frontmatter: frontMatter } = data;
  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) {
        return;
      }
      if (attribs.class === "cache-link") {
        return /* @__PURE__ */ jsx(CacheLink, { href: attribs["href"], isStatic: true, children: domToReact(children, options) });
      }
      if (attribs.class === "react-note-block") {
        return /* @__PURE__ */ jsx(Note, { title: attribs["data-title"], children: domToReact(children, options) });
      }
    }
  };
  const updatedContent = parse(content.value, options);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(nl, { children: [
      /* @__PURE__ */ jsx("title", { children: frontMatter.title }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          "head-key": "description",
          name: "description",
          content: frontMatter.description
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          "head-key": "og:description",
          property: "og:description",
          content: frontMatter.description
        }
      ),
      /* @__PURE__ */ jsx("meta", { "head-key": "author", name: "author", content: "Curious Dev Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          "head-key": "og:title",
          property: "og:title",
          content: frontMatter.title
        }
      ),
      /* @__PURE__ */ jsx("meta", { "head-key": "og:type", property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          "head-key": "og:url",
          property: "og:url",
          content: baseUrl + "/" + frontMatter.slug
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "article:published_time",
          content: `${frontMatter.date}T10:00:00+00:00`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(HeroOne, {}),
    /* @__PURE__ */ jsx(HeroTwo, {}),
    /* @__PURE__ */ jsx(HeroThree, {}),
    /* @__PURE__ */ jsx(HeroFour, {}),
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl m-auto mb-20 px-4", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-10", children: /* @__PURE__ */ jsx(
      CacheLink,
      {
        href: "/",
        className: "text-base hover:underline text-gray-300 hover:text-white font-semibold",
        children: "Go back to the homepage"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("article", { className: "max-w-3xl m-auto px-6", children: [
      /* @__PURE__ */ jsxs("header", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center flex-wrap pb-2", children: [
          /* @__PURE__ */ jsx(
            "time",
            {
              dateTime: new Date(frontMatter.date).toDateString("en-US"),
              className: "font-semibold text-gray-300 text-lg pr-5",
              children: new Date(frontMatter.date).toDateString("en-US").substring(3)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            frontMatter.categories ? frontMatter.categories.map((category) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "border border-yellow-400 text-yellow-400 rounded-md px-1 font-semibold",
                children: category
              },
              category
            )) : null,
            frontMatter.tags ? frontMatter.tags.map((tag) => /* @__PURE__ */ jsxs("span", { className: "text-yellow-400 font-semibold", children: [
              "#",
              tag
            ] }, tag)) : null
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-5xl !leading-[4rem] font-bold w-full mb-12 pb-4 border-b border-b-gray-700", children: frontMatter.title })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "max-w-3xl m-auto pb-24 text-white !text-lg prose\n          prose-p:text-gray-200\n          [&>ul>li]:pb-4\n          prose-code:text-gray-900 prose-code:bg-gray-400 prose-code:rounded-sm\n          prose-code:before:hidden prose-code:after:hidden prose-code:px-2\n          [&>div>.react-note-block>pre>code]:px-0\n          [&>pre>code]:px-0\n          [&>h2]:after:content-['🔗'] [&>h2]:after:opacity-0 hover:[&>h2]:after:opacity-100 [&>h2]:after:pl-4 [&>h2]:after:text-xl\n          [&>h3]:after:content-['🔗'] [&>h3]:after:opacity-0 hover:[&>h3]:after:opacity-100 [&>h3]:after:pl-4 [&>h3]:after:text-xl\n          [&>h4]:after:content-['🔗'] [&>h4]:after:opacity-0 hover:[&>h4]:after:opacity-100 [&>h4]:after:pl-4 [&>h4]:after:text-xl\n          [&>.code-title]:font-medium [&>.code-title]:-mb-10 [&>.code-title]:mt-10 [&>.code-title]:bg-gray-700 [&>.code-title]:pb-1 [&>.code-title]:pt-2 [&>.code-title]:rounded-t-lg\n          [&>.code-title]:px-3 [&>.code-title]:text-sm\n          [&>.code-title+pre]:rounded-none [&>.code-title+pre]:rounded-b-lg\n          [&>pre]:my-10\n          [&>data-remark-code-title]\n          [&>#table-of-contents+ul]:pb-0 \n          [&>#table-of-contents+ul>li_a]:no-underline\n          [&>#table-of-contents+ul>li>p]:mb-0\n          [&>#table-of-contents+ul>li>p]:mt-0\n          hover:[&>#table-of-contents+ul>li_a]:underline \n          prose-h2:text-3xl\n          prose-h3:text-2xl\n          prose-h4:text-xl\n          [&>h2>a]:text-white hover:[&>h2>a]:underline [&>h2>a]:no-underline\n          [&>h3>a]:text-white hover:[&>h3>a]:underline [&>h3>a]:no-underline\n          [&>h4>a]:text-white hover:[&>h4>a]:underline [&>h4>a]:no-underline\n          prose-a:text-blue-500 prose-a:underline prose-a:font-bold",
          children: updatedContent
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl m-auto px-6 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-10 py-0", children: [
      prevPost ? /* @__PURE__ */ jsxs(
        "div",
        {
          className: "py-6 w-full lg:w-1/2 border px-5 border-yellow-500 rounded-md",
          onMouseEnter: () => {
            Op.cache().prefetch(prevPost.slug);
          },
          children: [
            /* @__PURE__ */ jsx("p", { className: "pb-2 text-gray-400 font-semibold", children: "Previous Article" }),
            /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold", children: /* @__PURE__ */ jsx(sl, { href: prevPost.slug, className: "hover:underline", children: prevPost.title }) })
          ]
        }
      ) : null,
      nextPost ? /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ml-auto w-full lg:w-1/2 py-6 border px-5 border-yellow-500 rounded-md",
          onMouseEnter: () => {
            Op.cache().prefetch(nextPost.slug);
          },
          children: [
            /* @__PURE__ */ jsx("p", { className: "pb-2 text-gray-400 text-right font-semibold", children: "Next Article" }),
            /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold text-right", children: /* @__PURE__ */ jsx(sl, { href: nextPost.slug, className: "hover:underline", children: nextPost.title }) })
          ]
        }
      ) : null,
      /* @__PURE__ */ jsx("div", {})
    ] }) })
  ] });
};
Post.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Post as default
};
