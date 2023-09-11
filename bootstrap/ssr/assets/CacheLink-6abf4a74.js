import { jsx } from "react/jsx-runtime";
import { O as Op, s as sl } from "../ssr.js";
import { useEffect } from "react";
const CacheLink = ({ children, isStatic, ...props }) => {
  const staticPage = isStatic ?? false;
  useEffect(() => {
    setTimeout(() => {
      Op.cache().prefetch(props.href, { durationInMinutes: 5, isStatic: staticPage });
    }, [500]);
  }, []);
  return /* @__PURE__ */ jsx(sl, { isStatic: staticPage, ...props, children });
};
export {
  CacheLink as C
};
