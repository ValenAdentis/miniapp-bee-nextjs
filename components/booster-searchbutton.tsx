"use client";

import { useEffect, useRef, useState } from "react";

type EarnKeysBarProps = {
  value?: string;
  onChange?: (value: string) => void;
  onKeysClick?: () => void;
};

export default function EarnKeysBar({
  value: controlledValue,
  onChange,
  onKeysClick,
}: EarnKeysBarProps) {
  const [internalValue, setInternalValue] = useState("");
  const [editing, setEditing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const value = controlledValue ?? internalValue;

  const updateValue = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  /* Focus input when editing starts */
  useEffect(() => {
    if (editing) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [editing]);

  /* Handle clicks outside this component */
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (
        containerRef.current &&
        !containerRef.current.contains(target)
      ) {
        if (value.trim() === "") {
          setEditing(false);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [value]);

  const handleLeftClick = () => {
    setEditing(true);
  };

  const handleKeysClick = () => {
    setEditing(true);
    onKeysClick?.();
  };

  return (
    <div
      ref={containerRef}
      className="
        flex
        h-[34px]
        w-[347px]
        items-center
        rounded-[8px]
        border
        border-[#3b3938]
        bg-[#292827]
      "
    >
      {/* LEFT SIDE */}
      <div
        className="min-w-0 flex-1 mx-2"
        onClick={handleLeftClick}
      >
        {editing ? (
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => updateValue(e.target.value)}
            className="
              h-[25px]
              w-full
              bg-transparent
              px-[2px]
              text-[11px]
              text-white
              outline-none
              placeholder:text-[#777]
            "
            placeholder="Enter your text..."
          />
        ) : (
          <button
            type="button"
            className="
              flex
              w-full
              items-center
              gap-[5px]
              text-left
              text-[11px]
              font-medium
              text-[#ffad00]
            "
          >
            {/* Your icon */}
            {/* <img
              src="/keyicon.png"
              alt=""
              className="h-[17px] w-[17px] shrink-0 object-contain"
            /> */}

            <span className="px-[2px] truncate">
              Daily Cipher
            </span>
          </button>
        )}
      </div>

      {/* RIGHT BUTTON */}
      <button
        type="button"
        onClick={handleKeysClick}
        className="
          flex
          h-[29px]
          w-[80px]
          shrink-0
          items-center
          justify-center
          gap-[3px]
          rounded-[8px]
          bg-gradient-to-b
          from-[#ffad17]
          to-[#ff8700]
          text-[9px]
          font-medium
          text-white
          active:scale-[0.97]
        "
      >
        <img
          src="/flyingbeeicon.png"
          alt=""
          className="h-[14px] w-[14px] object-contain"
        />

        <span>+1,000,000</span>
      </button>
    </div>
  );
}