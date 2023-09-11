import { Head, router } from "@inertiajs/react";
import Footer from "./Footer";

export default function Layout({ children, hideFooter }) {
  const production = import.meta.env.MODE === 'production';

  return (
    <>
      <Head>
        <title>Articles</title>
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
              <button type="button" className="mb-2 hover:opacity-90 bg-gray-900 border rounded-md border-gray-700 px-3 py-2" onClick={() => {router.cache().removeAll()}}>Clear Cache</button>
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
        </main>
        {!hideFooter ? <Footer /> : null}
      </div>
    </>
  );
}
