import { jsxs, jsx } from "react/jsx-runtime";
function NotFound() {
  return /* @__PURE__ */ jsxs("main", { className: "flex flex-col items-center justify-center py-10 px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Not Found" })
  ] });
}
export {
  NotFound as default
};
