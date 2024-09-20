import ContentEdit from "./ContentEdit";
import MiniPreview from "./MiniPreview";
import Preview from "./Preview";
import ThemeSelector from "./ThemeSelector";
import { useEditor } from "../hooks/useEditor";
import { useEditorApi } from "../hooks/useEditorApi";
import { Slide } from "../types";

export default function Editor() {
  const {
    slides,
    setSlides,
    currentSlideIndex,
    setCurrentSlideIndex,
    currentTheme,
  } = useEditor();

  const { handleDownload } = useEditorApi();

  const handleSlideCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    setSlides((prev: Slide[]) => {
      const temp = [...prev];
      temp[idx] = { ...temp[idx], checked: !temp[idx].checked };
      return temp;
    });
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <Preview />
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-[735px] md:w-auto flex space-x-2 overflow-x-auto pb-2 mb-4 md:mb-0">
            {slides.map((slide: Slide, index: number) => (
              <MiniPreview
                key={index}
                slide={slide}
                handleSlideCheck={handleSlideCheck}
                index={index}
                isActive={index === currentSlideIndex}
                onClick={() => setCurrentSlideIndex(index)}
              />
            ))}
          </div>
          <button
            onClick={handleDownload}
            className={`px-4 py-2 text-white text-sm rounded transition-colors w-full md:w-auto`}
            style={{ backgroundColor: currentTheme.title }}
          >
            Download PDF
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-white p-4 shadow-lg overflow-auto">
        <ContentEdit />
        <ThemeSelector />
      </div>
    </div>
  );
}
