import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes)
{
  return classes.filter(Boolean).join(" ");
}

function ImageGallery(props)
{
  const { images } = props;
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image}
              className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50">
              {({ selected }) => (
                <>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      src={image}
                      alt=""
                      className="object-cover object-center w-full h-full"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-indigo-500" : "ring-transparent",
                      "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
        {images.map((image) => (
          <Tab.Panel key={image}>
            <img
              src={image}
              alt={image}
              className="object-cover object-center w-full h-full sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default ImageGallery;