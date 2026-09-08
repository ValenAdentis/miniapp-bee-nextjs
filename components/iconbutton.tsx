"use client";

type IconButtonProps = {
  text: string;
  src: string;
  onClick: () => void;
};

export default function IconButton({
  text,
  src,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-[45px] flex-col items-center p-0"
    >
      <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[10px] bg-[#292929]">
        <img
          src={src}
          alt={text}
          className="h-[23px] w-[23px] object-contain"
        />
      </div>

      <span className="mt-[4px] whitespace-nowrap text-[8px] text-white">
        {text}
      </span>
    </button>
  );
}