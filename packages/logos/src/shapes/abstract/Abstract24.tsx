import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract24: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract24(
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
        d="M17.0477 11.2772C15.4502 9.53971 12.8678 8.75834 10.5677 9.31318C12.1037 5.64243 17.3875 4.6729 20.1274 7.58723C22.8941 10.1656 22.1722 15.2263 18.8218 16.933C19.1366 14.8692 18.4416 12.7343 17.0477 11.2772ZM14.7552 10.6494C16.7309 11.6477 18.0135 13.6712 18.0115 15.9328C18.0576 19.1409 15.287 21.9227 12.0384 21.844C9.71135 21.8152 7.6992 20.4656 6.74112 18.4344C11.2666 19.4365 15.625 15.1668 14.7533 10.6494H14.7552ZM10.8211 14.7137C11.5718 14.8577 12.3955 14.875 13.1539 14.7521C11.3683 18.0274 6.44545 18.6782 3.87073 15.9443C1.00993 13.2969 1.89312 7.99616 5.49696 6.43148C4.53504 10.1195 7.10016 14.0686 10.8211 14.7137ZM9.31584 13.2565C7.40928 12.2333 6.18816 10.252 6.18816 8.04032C6.17472 2.04656 14.2445 -0.109433 17.2243 5.09143C12.5587 4.07391 8.15424 8.6585 9.31584 13.2565ZM12 0C5.37216 0 0 5.37173 0 12.001C0 18.6302 5.37216 24 12 24C18.6278 24 24 18.6283 24 12.001C24 5.37365 18.6278 0 12 0Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract24.displayName = "Abstract24";

Abstract24.metadata = {
  name: "Abstract24",
  category: "shapes/abstract",
  tags: ["abstract", "24", "icon"],
  description: "Abstract24 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract24;
