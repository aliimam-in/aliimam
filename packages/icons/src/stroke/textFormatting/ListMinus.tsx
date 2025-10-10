import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ListMinusProps extends IconProps {
  type?: "stroke";
}

export const ListMinus: IconComponent<ListMinusProps> = React.forwardRef<
  SVGSVGElement,
  ListMinusProps
>(function ListMinus(
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
          d="M16 5H3M11 12H3M16 19H3M21 12H15"
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
          d="M16 5H3M11 12H3M16 19H3M21 12H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ListMinus doesn't support ${type}`);
  return null;
});

ListMinus.displayName = "ListMinus";

ListMinus.metadata = {
  name: "ListMinus",
  category: "stroke/textFormatting",
  tags: ["list", "minus", "icon"],
  description: "ListMinus icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListMinus;
