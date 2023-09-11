import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { n as nl } from "../ssr.js";
import { L as Layout } from "./Layout-64d8c8c7.js";
import { C as CacheLink } from "./CacheLink-6abf4a74.js";
import "react-dom/server";
import "react";
import "lodash.isequal";
import "http";
import "process";
const Home = ({ posts }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(nl, { children: /* @__PURE__ */ jsx("meta", { "head-key": "og:type", property: "og:type", content: "website" }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-6xl m-auto px-4 pt-24 pb-24 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl font-bold text-yellow-400 w-full mb-3", children: /* @__PURE__ */ jsx(CacheLink, { href: "/", children: "Curious Dev Lab" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-xl", children: "Writing about Laravel, React, and Javascript." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl m-auto px-4 pb-32", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-lg mb-3 font-semibold", children: "Latest Articles" }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col space-y-6", children: posts.map((post) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "border border-gray-600 overflow-hidden hover:border-yellow-100 flex flex-col lg:flex-row lg:items-start justify-between py-4 px-4 bg-gray-900 rounded-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:pr-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold hover:underline", children: /* @__PURE__ */ jsx(CacheLink, { isStatic: true, href: post.slug, children: post.title }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
            post.categories ? post.categories.map((category) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "border border-yellow-400 text-yellow-400 rounded-md px-1 font-semibold",
                children: category
              },
              category
            )) : null,
            post.tags ? post.tags.map((tag) => /* @__PURE__ */ jsxs(
              "span",
              {
                className: "text-yellow-400 font-semibold",
                children: [
                  "#",
                  tag
                ]
              },
              tag
            )) : null
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "time",
          {
            dateTime: new Date(post.date).toDateString("en-US"),
            className: "flex-none text-gray-400 text-base ml-auto lg:ml-0",
            children: new Date(post.date).toDateString().substring(3)
          }
        )
      ] }) }, post.slug)) })
    ] })
  ] });
};
Home.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
export {
  Home as default
};
