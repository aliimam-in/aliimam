import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquarePen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquarePen(
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
        d="M12 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3751 2.62501C18.7729 2.22719 19.3125 2.00369 19.8751 2.00369C20.4377 2.00369 20.9773 2.22719 21.3751 2.62501C21.7729 3.02284 21.9964 3.5624 21.9964 4.12501C21.9964 4.68762 21.7729 5.22719 21.3751 5.62501L12.3621 14.639C12.1246 14.8763 11.8313 15.0499 11.5091 15.144L8.63609 15.984C8.55005 16.0091 8.45883 16.0106 8.372 15.9884C8.28517 15.9661 8.20592 15.9209 8.14254 15.8576C8.07916 15.7942 8.03398 15.7149 8.01174 15.6281C7.98949 15.5413 7.991 15.4501 8.01609 15.364L8.85609 12.491C8.95062 12.1691 9.12463 11.8761 9.36209 11.639L18.3751 2.62501Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquarePen.displayName = "SquarePen";

SquarePen.metadata = {
  name: "SquarePen",
  category: "stroke/textFormatting",
  tags: ["square", "pen", "icon"],
  description: "SquarePen icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquarePen;
