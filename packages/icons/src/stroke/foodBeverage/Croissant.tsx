import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Croissant: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Croissant(
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
        d="M10.2 18H4.774C4.478 17.99 4.192 17.892 3.951 17.72 3.711 17.547 3.526 17.307 3.422 17.03 2.813 14.904 2.859 12.643 3.554 10.543M18 10.2V4.774C17.99 4.478 17.892 4.192 17.72 3.951 17.547 3.711 17.307 3.526 17.03 3.422 14.904 2.813 12.644 2.859 10.544 3.554"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5C19.061 5 20.078 5.316 20.828 5.879 21.579 6.441 22 7.204 22 8 22 8.53 21.789 9.039 21.414 9.414 21.039 9.789 20.531 10 20 10 18.19 10 16.414 10.49 14.861 11.42M5 18C5 19.061 5.316 20.078 5.879 20.828 6.441 21.579 7.204 22 8 22 8.53 22 9.039 21.789 9.414 21.414 9.789 21.039 10 20.53 10 20 9.999 18.19 10.49 16.413 11.42 14.86"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.70901 2.55401C7.28552 3.04973 5.99252 3.86084 4.92668 4.92668C3.86084 5.99252 3.04973 7.28552 2.55401 8.70901C2.48089 9.0167 2.50689 9.33962 2.6283 9.63164C2.74971 9.92367 2.96031 10.1698 3.23001 10.335L13.037 15.755C13.4168 15.965 13.8545 16.0457 14.2841 15.9851C14.7138 15.9245 15.1121 15.7257 15.4189 15.4189C15.7257 15.1121 15.9245 14.7138 15.9851 14.2841C16.0457 13.8545 15.965 13.4168 15.755 13.037L10.335 3.23001C10.1698 2.96031 9.92367 2.74971 9.63164 2.6283C9.33962 2.50689 9.0167 2.48089 8.70901 2.55401Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Croissant.displayName = "Croissant";

Croissant.metadata = {
  name: "Croissant",
  category: "stroke/foodBeverage",
  tags: ["croissant", "icon"],
  description: "Croissant icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Croissant;
