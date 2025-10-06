import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SwatchBook: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SwatchBook(
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
        d="M11 17C11 18.0609 10.5786 19.0783 9.82843 19.8284C9.07828 20.5786 8.06087 21 7 21C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9C9.53043 3 10.0391 3.21071 10.4142 3.58579C10.7893 3.96086 11 4.46957 11 5V17Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7 13H19C19.53 13 20.039 13.211 20.414 13.586 20.789 13.961 21 14.47 21 15V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H7M7 17H7.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9999 8.00001L13.2999 5.70001C13.5232 5.47593 13.7886 5.29821 14.0808 5.17706C14.3731 5.05592 14.6864 4.99374 15.0027 4.99411C15.3191 4.99448 15.6322 5.05739 15.9242 5.17923C16.2161 5.30106 16.4811 5.47941 16.7039 5.70401L18.5999 7.60001C18.8305 7.82182 19.0144 8.0875 19.1408 8.38143C19.2673 8.67535 19.3336 8.99159 19.3361 9.31154C19.3385 9.63149 19.2769 9.94869 19.1549 10.2445C19.033 10.5403 18.8531 10.8087 18.6259 11.034L9.8999 19.8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SwatchBook.displayName = "SwatchBook";

SwatchBook.metadata = {
  name: "SwatchBook",
  category: "stroke/design",
  tags: ["swatch", "book", "icon"],
  description: "SwatchBook icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SwatchBook;
