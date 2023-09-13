import { jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
const CacheLink = ({ children, isStatic, ...props }) => {
  return /* @__PURE__ */ jsx(Link, { ...props, children });
};
export {
  CacheLink as C
};
