import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NotebookPen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NotebookPen(
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
        d="M13.4 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V20C4 20.53 4.211 21.039 4.586 21.414 4.961 21.789 5.47 22 6 22H18C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V12.6M2 6H6M2 10H6M2 14H6M2 18H6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.378 5.62603C21.7763 5.22767 22.0001 4.68739 22.0001 4.12403C22.0001 3.56067 21.7763 3.02038 21.378 2.62203C20.9796 2.22367 20.4393 1.99988 19.876 1.99988C19.3126 1.99988 18.7723 2.22367 18.374 2.62203L13.364 7.63403C13.1262 7.87165 12.9522 8.16536 12.858 8.48803L12.021 11.358C11.9959 11.4441 11.9944 11.5353 12.0166 11.6221C12.0389 11.7089 12.084 11.7882 12.1474 11.8516C12.2108 11.915 12.2901 11.9601 12.3769 11.9824C12.4637 12.0046 12.5549 12.0031 12.641 11.978L15.511 11.141C15.8336 11.0468 16.1274 10.8728 16.365 10.635L21.378 5.62603Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

NotebookPen.displayName = "NotebookPen";

NotebookPen.metadata = {
  name: "NotebookPen",
  category: "stroke/textFormatting",
  tags: ["notebook", "pen", "icon"],
  description: "NotebookPen icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NotebookPen;
