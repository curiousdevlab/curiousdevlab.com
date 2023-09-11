import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { L as Lo, n as nl, O as Op } from "../ssr.js";
const Footer = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("footer", { className: "max-w-4xl m-auto px-4 py-10", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 right-10", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#top",
        className: "flex items-center hover:border-gray-500 bg-gray-900 border border-gray-700 px-5 py-3 rounded-full",
        children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "w-6 h-6",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "block ml-2 text-sm font-bold", children: "Scroll to Top" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-400 pb-3", children: [
        "Code highlighting provided by",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "hover:underline text-white",
            href: "https://torchlight.dev/",
            target: "_blank",
            children: "Torchlight"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Built with React, Inertia, Laravel and Tailwind CSS" })
    ] })
  ] }) });
};
function Layout({ children, hideFooter }) {
  const { production } = Lo().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(nl, { children: [
      /* @__PURE__ */ jsx("title", { children: "Articles" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          "head-key": "description",
          name: "description",
          content: "Welcome to Dev Curious Lab. We write about Laravel and React."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          "head-key": "og:description",
          property: "og:description",
          content: "Welcome to Dev Curious Lab. We write about Laravel and React."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "/curious-dev-lab-banner.jpg" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image:alt",
          content: "Banner for curiousdevlab.com, Learn. Code. Write."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "top", className: "font-sans bg-[#0f141b] text-white text-sm font-normal leading-relaxed antialiased min-h-screen w-full", children: [
      /* @__PURE__ */ jsxs("main", { children: [
        !production ? /* @__PURE__ */ jsxs("div", { className: "fixed top-5 right-5", children: [
          /* @__PURE__ */ jsx("button", { type: "button", className: "mb-2 hover:opacity-90 bg-gray-900 border rounded-md border-gray-700 px-3 py-2", onClick: () => {
            Op.cache().removeAll();
          }, children: "Clear Cache" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 border border-gray-700 px-3 py-2 rounded", children: [
            /* @__PURE__ */ jsx("p", { className: "block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden", children: "@xs" }),
            /* @__PURE__ */ jsx("p", { className: "hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden", children: "@sm" }),
            /* @__PURE__ */ jsx("p", { className: "hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden", children: "@md" }),
            /* @__PURE__ */ jsx("p", { className: "hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden", children: "@lg" }),
            /* @__PURE__ */ jsx("p", { className: "hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden", children: "@xl" }),
            /* @__PURE__ */ jsx("p", { className: "hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block", children: "@2xl" })
          ] })
        ] }) : null,
        children
      ] }),
      !hideFooter ? /* @__PURE__ */ jsx(Footer, {}) : null
    ] })
  ] });
}
export {
  Layout as L
};
