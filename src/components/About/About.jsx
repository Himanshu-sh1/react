import React from 'react'

export default function About() {
  return (
      <div className="py-16  bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                       Using React.js for web development may be extremely convenient because React is one of those cases
                       where you get the hang of a single technology to reuse it across a range of platforms easily. 
                       And all due to being a natural library, with the primary purpose of creating separate web design 
                       elements and components (anything from buttons and labels to grids and interactive features).
                      </p>
                      <p className="mt-4 text-gray-600">
                       React can be used to build web, mobile, and desktop applications, making it a versatile framework 
                       for cross-platform development.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
