import { jsxs, jsx } from "react/jsx-runtime";
function HeroFour() {
  return /* @__PURE__ */ jsxs("div", { className: "relative isolate overflow-hidden bg-gray-900", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
            "pattern",
            {
              id: "983e3e4c-de6d-4c3f-8d64-b9761d1534cc",
              width: 200,
              height: 200,
              x: "50%",
              y: -1,
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ jsx("path", { d: "M.5 200V.5H200", fill: "none" })
            }
          ) }),
          /* @__PURE__ */ jsx("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-800/20", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z",
              strokeWidth: 0
            }
          ) }),
          /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20",
            style: {
              clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-11",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
            alt: "Your Company"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-24 sm:mt-32 lg:mt-16", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex space-x-6", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20", children: "What's new" }),
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300", children: /* @__PURE__ */ jsx("span", { children: "Just shipped v1.0" }) })
        ] }) }),
        /* @__PURE__ */ jsx("h1", { className: "mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl", children: "Deploy FOUR to the cloud with confidence" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-8 text-gray-300", children: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-x-6", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400",
              children: "Get started"
            }
          ),
          /* @__PURE__ */ jsxs("a", { href: "#", className: "text-sm font-semibold leading-6 text-white", children: [
            "Learn more ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl flex-none sm:max-w-5xl lg:max-w-none", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
          alt: "App screenshot",
          width: 2432,
          height: 1442,
          className: "w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
        }
      ) }) })
    ] })
  ] });
}
export {
  HeroFour as H
};
