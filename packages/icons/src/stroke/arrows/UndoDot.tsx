import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UndoDot: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UndoDot(
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
        d="M21 17C20.9984 15.2633 20.4944 13.5642 19.5487 12.1075C18.6031 10.6509 17.2562 9.49896 15.6705 8.79069C14.0848 8.08241 12.3281 7.84804 10.6121 8.11585C8.89623 8.38366 7.29445 9.14221 6 10.3L3 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7V13H9M12 18C12.552 18 13 17.552 13 17 13 16.448 12.552 16 12 16 11.448 16 11 16.448 11 17 11 17.552 11.448 18 12 18Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UndoDot.displayName = "UndoDot";

UndoDot.metadata = {
  name: "UndoDot",
  category: "stroke/arrows",
  tags: ["undo", "dot", "icon"],
  description: "UndoDot icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UndoDot;
