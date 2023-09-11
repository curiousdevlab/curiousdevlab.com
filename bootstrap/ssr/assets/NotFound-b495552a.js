import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-64d8c8c7.js";
import { s as sl } from "../ssr.js";
import "react-dom/server";
import "react";
import "lodash.isequal";
import "http";
import "process";
const NotFound = () => {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center justify-center min-h-[calc(100vh-150px)] py-10 px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-8xl font-black mb-2", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "text-5xl mb-8", children: "Page Not Found" }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-gray-500 text-xl leading-loose font-semibold", children: [
      "The page you are looking for was not found. ",
      /* @__PURE__ */ jsx("br", {}),
      " Maybe your URL got messed up?"
    ] }),
    /* @__PURE__ */ jsx(sl, { href: "/", className: "text-white mt-10 text-lg hover:underline font-semibold border px-4 py-2 rounded-md", children: "Go back home" })
  ] });
};
NotFound.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, hideFooter: true });
export {
  NotFound as default
};
