import { Input } from "@/components/ui/input";
import { useEditor } from "../hooks/useEditor";
import { Slide } from "../types";
import { useState } from "react";

export default function ContentEdit() {
  const {
    slides,
    currentSlideIndex,
    setSlides,
    userSettings,
    setUserSettings,
  } = useEditor();

  const currentSlide = slides[currentSlideIndex];
  const [noOfSlides, setNoOfSlides] = useState(slides?.length - 2);

  const handleContentChange = (field: "title" | "subtitle", value: string) => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[currentSlideIndex] = {
        ...newSlides[currentSlideIndex],
        [field]: value,
      };
      return newSlides;
    });
  };

  const handleNumberOfSlides = (value: string) => {
    if (Number(value) < 0) {
      return;
    }
    setSlides((prevSlides) => {
      const slideCount = Number(value);
      const endHook = prevSlides[prevSlides?.length - 1];

      if (slideCount > prevSlides?.length - 2) {
        const slidesWithoutEnd = prevSlides?.slice(0, -1);
        const diff = slideCount - (prevSlides?.length - 2);
        for (let i = 0; i < diff; i++) {
          slidesWithoutEnd.push({
            id: slidesWithoutEnd?.length + (i + 1),
            title: "",
            subtitle: "",
            checked: true,
          });
        }
        slidesWithoutEnd.push({ ...endHook, id: slidesWithoutEnd?.length + 1 });
        return slidesWithoutEnd;
      } else {
        const updatedSlides = [...prevSlides];
        const diff = prevSlides?.length - 1 - slideCount;
        for (let i = 0; i < diff; i++) {
          updatedSlides.pop();
        }
        updatedSlides.push({ ...endHook, id: updatedSlides?.length + 1 });
        return updatedSlides;
      }
    });
    setNoOfSlides(value);
  };

  if (!currentSlide) return null;

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Content Edit</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Number of Slides
        </label>
        <Input
          type="number"
          value={noOfSlides}
          onChange={(e) => handleNumberOfSlides(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <Input
          type="text"
          value={currentSlide.title}
          onChange={(e) => handleContentChange("title", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Subtitle
        </label>
        <Input
          type="text"
          value={currentSlide.subtitle}
          onChange={(e) => handleContentChange("subtitle", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-2">User Information</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          type="text"
          value={userSettings.userName}
          onChange={(e) =>
            setUserSettings((prevUserSettings) => ({
              ...prevUserSettings,
              userName: e.target.value,
            }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          LinkedIn Username
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            @
          </span>
          <Input
            type="text"
            value={userSettings.linkedInUsername}
            onChange={(e) =>
              setUserSettings((prevUserSettings) => ({
                ...prevUserSettings,
                linkedInUsername: e.target.value,
              }))
            }
            className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Profile Image URL
        </label>
        <Input
          type="text"
          value={userSettings.userImageUrl}
          onChange={(e) =>
            setUserSettings((prevUserSettings) => ({
              ...prevUserSettings,
              userImageUrl: e.target.value,
            }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>
  );
}
