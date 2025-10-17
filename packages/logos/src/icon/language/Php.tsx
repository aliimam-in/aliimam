import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Php: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Php(
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
          d="M1.81896 8.66951H5.22792C6.22848 8.67791 6.95352 8.96639 7.40304 9.53447C7.85256 10.1026 8.00088 10.8785 7.84824 11.8622C7.78896 12.3118 7.65744 12.7526 7.45392 13.1851C7.25612 13.6215 6.98023 14.0181 6.63984 14.3553C6.21576 14.7962 5.76216 15.0761 5.2788 15.1949C4.7875 15.3146 4.28351 15.3744 3.77784 15.373H2.25144L1.76808 17.7898H0L1.81896 8.66951ZM3.3072 10.1196L2.544 13.9356C2.59488 13.944 2.64576 13.9483 2.69664 13.9483H2.87472C3.6888 13.9567 4.36728 13.8763 4.90992 13.7066C5.45256 13.5286 5.81736 12.9096 6.00384 11.8495C6.15648 10.9591 6.00384 10.446 5.54592 10.3104C5.0964 10.1748 4.53264 10.1112 3.85416 10.1196C3.7524 10.128 3.65496 10.1323 3.5616 10.1323H3.29448L3.3072 10.1196ZM9.86232 6.23999H11.6177L11.1216 8.66951H12.6989C13.5638 8.68655 14.2082 8.86463 14.6323 9.20375C15.0648 9.54287 15.192 10.1875 15.0139 11.1372L14.1617 15.373H12.3809L13.195 11.328C13.2797 10.9039 13.2542 10.603 13.1186 10.4249C12.983 10.2468 12.6905 10.1577 12.241 10.1577L10.829 10.145L9.786 15.373H8.03064L9.86232 6.23999ZM16.8989 8.66951H20.3078C21.3084 8.67791 22.0334 8.96639 22.483 9.53447C22.9325 10.1026 23.0808 10.8785 22.9282 11.8622C22.8689 12.3118 22.7374 12.7526 22.5338 13.1851C22.336 13.6215 22.0601 14.0181 21.7198 14.3553C21.2957 14.7962 20.8421 15.0761 20.3587 15.1949C19.8674 15.3146 19.3634 15.3744 18.8578 15.373H17.3314L16.848 17.7898H15.0799L16.8989 8.66951ZM18.3871 10.1196L17.6239 13.9356C17.6748 13.944 17.7257 13.9483 17.7766 13.9483H17.9546C18.7687 13.9567 19.4472 13.8763 19.9898 13.7066C20.5325 13.5286 20.8973 12.9096 21.0838 11.8495C21.2364 10.9591 21.0838 10.446 20.6258 10.3104C20.1763 10.1748 19.6126 10.1112 18.9341 10.1196C18.8323 10.128 18.7349 10.1323 18.6415 10.1323H18.3744L18.3871 10.1196Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Php.displayName = "Php";

Php.metadata = {
  name: "Php",
  category: "icon/language",
  tags: ["php", "icon"],
  description: "Php icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Php;
