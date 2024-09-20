import { useEditor } from "../hooks/useEditor";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { getSlideNo } from "../utils/generatePdf";

interface MiniPreviewProps {
  slide: { id: number; title: string; subtitle: string; checked: boolean };
  index: number;
  isActive: boolean;
  handleSlideCheck: (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => void;
  onClick: () => void;
}

export default function MiniPreview({
  slide,
  index,
  isActive,
  handleSlideCheck,
  onClick,
}: MiniPreviewProps) {
  const { currentTheme, slides } = useEditor();
  const isFirstOrLastSlide = index === 0 || index === slides.length - 1;
  const updatedIdx = getSlideNo(slides, slide);

  return (
    <div
      className={`cursor-pointer px-2 pb-2 border ${
        isActive ? "ring-2" : "border-gray-300"
      }`}
      style={{ borderColor: isActive ? currentTheme.title : undefined }}
      onClick={onClick}
    >
      <div className="flex items-center justify-end py-[1.5px]">
        <CheckCircledIcon
          color={`${slide.checked ? "rgb(31, 119, 180)" : "black"}`}
          onClick={(e) => handleSlideCheck(e, index)}
        />
      </div>

      <div
        className={`w-24 h-32 rounded-lg shadow-sm p-2 flex flex-col ${
          slide.checked ? "" : "opacity-60"
        }`}
        style={{ backgroundColor: currentTheme.background }}
      >
        {!isFirstOrLastSlide && (
          <div
            className="w-4 h-4 rounded-full text-white flex items-center justify-center text-[6px] font-bold mb-1 font-roboto"
            style={{ backgroundColor: currentTheme.title }}
          >
            {updatedIdx === -1 ? "" : updatedIdx}
          </div>
        )}
        <h2
          className="font-bold mb-1 leading-tight text-left text-[8px] font-poppins line-clamp-2"
          style={{ color: currentTheme.title }}
        >
          {slide.title}
        </h2>
        <p
          className="text-left text-[6px] font-roboto line-clamp-3 flex-grow"
          style={{ color: currentTheme.subtitle }}
        >
          {slide.subtitle}
        </p>
      </div>
    </div>
  );
}
