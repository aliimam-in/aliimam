import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WholeWord: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WholeWord(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M7 15C8.657 15 10 13.657 10 12 10 10.343 8.657 9 7 9 5.343 9 4 10.343 4 12 4 13.657 5.343 15 7 15ZM10 9V15M17 15C18.657 15 20 13.657 20 12 20 10.343 18.657 9 17 9 15.343 9 14 10.343 14 12 14 13.657 15.343 15 17 15ZM14 7V15M22 17V18C22 18.5 21.5 19 21 19H3C2.5 19 2 18.5 2 18V17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WholeWord.displayName = "WholeWord";

WholeWord.metadata = {
  name: "WholeWord",
  category: "stroke/textFormatting",
  tags: ["whole", "word", "icon"],
  description: "WholeWord icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WholeWord;
