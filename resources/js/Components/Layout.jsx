import { usePage, Head, router } from "../inertiajsflow/react/index.esm.js";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const { production } = usePage().props;

  const [cachedPages, setCachedPages] = useState([])

  const handleCacheUpdated = () =>  {
    const pages = router.cache().all()
    setCachedPages(Object.keys(pages).map((key) => {
      return { key: key, pending: pages[key].pending || false }
    }))
  }

  useEffect(() => {
    document.addEventListener('cache:updated', handleCacheUpdated)

    return () => { document.removeEventListener('cache:updated', handleCacheUpdated) }
  }, [])

  //console.log(cachedPages);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          head-key="description"
          name="description"
          content="Welcome to Dev Curious Lab. We write about Laravel and React."
        />
        <meta
          head-key="og:description"
          property="og:description"
          content="Welcome to Dev Curious Lab. We write about Laravel and React."
        />
        <meta property="og:image" content="/curious-dev-lab-banner.jpg" />
        <meta
          property="og:image:alt"
          content="Banner for curiousdevlab.com, Learn. Code. Write."
        />
      </Head>
      <div id="top" className="font-sans bg-[#0f141b] text-white text-sm font-normal leading-relaxed antialiased min-h-screen w-full">
        <main>
          {!production ? (
            <div className="fixed top-5 right-5">
              <div className="bg-gray-900 border border-gray-700 px-3 py-2 rounded">
                <p className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                  @xs
                </p>
                <p className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                  @sm
                </p>
                <p className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
                  @md
                </p>
                <p className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
                  @lg
                </p>
                <p className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
                  @xl
                </p>
                <p className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
                  @2xl
                </p>
              </div>
            </div>
          ) : null}
          {children}
          <div className="fixed bottom-8 right-10">
            <a href="#top" className="flex items-center hover:opacity-60 bg-gray-900 border border-gray-700 px-5 py-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="block ml-2 text-sm font-bold">Scroll to Top</span>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
