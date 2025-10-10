import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Undo2Props extends IconProps {
  type?: "stroke";
}

export const Undo2: IconComponent<Undo2Props> = React.forwardRef<
  SVGSVGElement,
  Undo2Props
>(function Undo2(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9 14L4 9L9 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 9H14.5C15.2223 9 15.9375 9.14226 16.6048 9.41866C17.272 9.69506 17.8784 10.1002 18.3891 10.6109C18.8998 11.1216 19.3049 11.728 19.5813 12.3952C19.8577 13.0625 20 13.7777 20 14.5C20 15.2223 19.8577 15.9375 19.5813 16.6048C19.3049 17.272 18.8998 17.8784 18.3891 18.3891C17.8784 18.8998 17.272 19.3049 16.6048 19.5813C15.9375 19.8577 15.2223 20 14.5 20H11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9 14L4 9L9 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 9H14.5C15.2223 9 15.9375 9.14226 16.6048 9.41866C17.272 9.69506 17.8784 10.1002 18.3891 10.6109C18.8998 11.1216 19.3049 11.728 19.5813 12.3952C19.8577 13.0625 20 13.7777 20 14.5C20 15.2223 19.8577 15.9375 19.5813 16.6048C19.3049 17.272 18.8998 17.8784 18.3891 18.3891C17.8784 18.8998 17.272 19.3049 16.6048 19.5813C15.9375 19.8577 15.2223 20 14.5 20H11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Undo2 doesn't support ${type}`);
  return null;
});

Undo2.displayName = "Undo2";

Undo2.metadata = {
  name: "Undo2",
  category: "stroke/textFormatting",
  tags: ["undo", "icon"],
  description: "Undo2 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Undo2;
