import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ListXProps extends IconProps {
  type?: "stroke";
}

export const ListX: IconComponent<ListXProps> = React.forwardRef<
  SVGSVGElement,
  ListXProps
>(function ListX(
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
          d="M16 5H3M11 12H3M16 19H3M15.5 9.5 20.5 14.5M20.5 9.5 15.5 14.5"
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
          d="M16 5H3M11 12H3M16 19H3M15.5 9.5 20.5 14.5M20.5 9.5 15.5 14.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ListX doesn't support ${type}`);
  return null;
});

ListX.displayName = "ListX";

ListX.metadata = {
  name: "ListX",
  category: "stroke/textFormatting",
  tags: ["list", "icon"],
  description: "ListX icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListX;
