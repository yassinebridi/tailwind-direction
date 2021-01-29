import Head from 'next/head';
import { categories, products } from '../data';

export default function Home() {
  const changeDir = () => {
    const d = document.documentElement;
    console.log({ d });

    const dir = d.getAttribute('dir');
    console.log({ dir });

    if (dir === 'ltr') {
      d.setAttribute('dir', 'rtl');
    } else {
      d.setAttribute('dir', 'ltr');
    }
  };

  return (
    <div className="font-poppins">
      <Head>
        <title>Rebuilding Allbirds</title>
      </Head>
      <div className="px-4 py-3 text-white bg-gray-500">
        <p className="text-xs font-semibold text-center">
          Gift with confidence. Returns are extended till January 15th.
        </p>
      </div>
      <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-white">
        <div className="flex">
          <button className="w-8 h-8">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img
            className="h-9"
            src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
            alt="Allbirds"
          />
        </div>
        <div className="flex items-center">
          <button className="w-8 h-8" onClick={changeDir}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z" />
            </svg>
          </button>
          <button className="w-8 h-8 ml-6">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </header>
      <main>
        <div>
          <div className="flex items-center justify-between px-8 pt-4 pb-3 md:px-12">
            <div>
              <div className="text-xs font-bold text-gray-900 space-x-1">
                <a href="#" className="underline">
                  Home
                </a>
                <span>/</span>
              </div>
              <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                Women's Shoes
              </h1>
            </div>
            <div>
              <button className="block w-6 h-6">
                <svg
                  className="transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="py-2 overflow-x-auto bg-gray-100 scrollbars-hidden">
            <div className="inline-flex px-8 text-sm space-x-5 md:px-12">
              {categories.map((category, i) => (
                <a
                  key={i}
                  href="#"
                  key={category}
                  className="font-medium text-gray-800 whitespace-nowrap"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="px-8 py-6 space-y-14 md:px-12">
            {products.map((product, i) => (
              <div key={i} className="">
                <div>
                  <div>
                    <h2 className="text-lg font-bold md:text-xl">
                      {product.name}
                    </h2>
                    <p className="text-sm font-medium text-gray-800">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 md:grid md:grid-cols-2 md:gap-6 md:items-start">
                    <div className="shadow-xl">
                      <div className="shadow-lg">
                        <a href="#">
                          <div>
                            <img
                              className="w-full"
                              src={product.styles[0].image}
                              alt=""
                            />
                          </div>
                          <div className="px-4 pt-3">
                            <h3 className="text-sm font-bold">
                              {product.name}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-gray-800">
                              {product.styles[0].name}
                            </p>
                          </div>
                        </a>
                        <div className="px-4 pb-4 mt-1">
                          <p className="text-sm font-medium text-gray-800">
                            {product.styles[0].price}
                          </p>
                          <div className="flex items-center mt-4 space-x-6 md:space-x-2">
                            {product.styles.slice(0, 5).map((style, i) => (
                              <span
                                className="md:flex-1 md:min-w-0 md:flex"
                                key={i}
                              >
                                <button
                                  className={`h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none ${
                                    i === 0
                                      ? 'ring-2 ring-offset-1 ring-gray-300'
                                      : ''
                                  } md:rounded-none md:w-full md:aspect-w-1 md:aspect-h-1 md:border-0 ${
                                    i === 0 ? 'md:ring-0' : ''
                                  }`}
                                >
                                  <span className="sr-only">{style.name}</span>
                                  <span className="flex flex-col w-full h-full transform -rotate-45 md:hidden">
                                    <span
                                      className="w-6 h-3"
                                      style={{
                                        backgroundColor: style.colors[0],
                                      }}
                                    ></span>
                                    <span
                                      className="w-6 h-3"
                                      style={{
                                        backgroundColor: style.colors[1],
                                      }}
                                    ></span>
                                  </span>
                                  <span className="hidden md:h-full md:w-full md:flex">
                                    <img src={style.image} alt="" />
                                    <span
                                      className={`absolute inset-0 ${
                                        i === 0
                                          ? 'md:ring-1 md:ring-inset md:ring-offset-0 md:ring-gray-300'
                                          : ''
                                      }`}
                                    ></span>
                                  </span>
                                </button>
                              </span>
                            ))}
                            <span className="md:flex-1 md:min-w-0 md:flex">
                              <button
                                type="button"
                                className="flex items-center justify-center text-gray-600 border rounded-full h-7 w-7 hover:border-gray-400 md:aspect-w-1 md:aspect-h-1 md:w-full md:rounded-none"
                              >
                                <span className="flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 md:h-7 md:w-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="border-t">
                          <button className="flex justify-between w-full px-4 py-2 text-sm">
                            <span className="font-bold">Quick Add</span>
                            <span>
                              <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="relative">
                        <img
                          className="w-full"
                          src={product.previewImage}
                          alt=""
                        />
                        <div className="absolute inset-0">
                          <div className="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-900 opacity-95"></div>
                          <div className="absolute inset-x-0 bottom-0">
                            <p className="px-6 pb-6 font-bold text-white capitalize">
                              {product.previewText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-12 bg-gray-800">
        <div className="px-6">
          <form action="#" method="POST">
            <div>
              <label
                htmlFor="email_address"
                className="block text-sm font-medium text-white"
              >
                Enter your email to stay in touch!
              </label>
              <div className="mt-1.5 relative">
                <input
                  type="text"
                  className="block w-full text-white bg-gray-600 border-2 border-transparent focus:border-white focus:ring-0 transition"
                />
                <div
                  className="absolute inset-0 border-b-2 border-white pointer-events-none"
                  aria-hidden
                ></div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="block w-full px-4 py-3 text-sm font-bold tracking-widest text-white uppercase bg-gray-600 rounded hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}
