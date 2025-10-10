import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SwatchBookProps extends IconProps {
  type?: "stroke";
}

export const SwatchBook: IconComponent<SwatchBookProps> = React.forwardRef<
  SVGSVGElement,
  SwatchBookProps
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
          d="M10.9999 8.00005L13.2999 5.70004C13.5232 5.47596 13.7886 5.29824 14.0808 5.17709C14.3731 5.05595 14.6864 4.99377 15.0027 4.99414C15.3191 4.99451 15.6322 5.05742 15.9242 5.17926C16.2161 5.30109 16.4811 5.47944 16.7039 5.70405L18.5999 7.60004C18.8305 7.82185 19.0144 8.08753 19.1408 8.38146C19.2673 8.67538 19.3336 8.99162 19.3361 9.31157C19.3385 9.63152 19.2769 9.94873 19.1549 10.2445C19.033 10.5403 18.8531 10.8088 18.6259 11.034L9.8999 19.8"
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
          d="M11 7.99998L13.3 5.69998C13.5233 5.4759 13.7887 5.29818 14.081 5.17703C14.3732 5.05588 14.6865 4.99371 15.0029 4.99408C15.3192 4.99445 15.6324 5.05736 15.9243 5.1792C16.2163 5.30103 16.4812 5.47938 16.704 5.70398L18.6 7.59998C18.8306 7.82179 19.0145 8.08747 19.141 8.3814C19.2674 8.67532 19.3338 8.99156 19.3362 9.31151C19.3386 9.63146 19.277 9.94866 19.1551 10.2445C19.0331 10.5403 18.8532 10.8087 18.626 11.034L9.90002 19.8"
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
          d="M10.9999 8.00005L13.2999 5.70004C13.5232 5.47596 13.7886 5.29824 14.0808 5.17709C14.3731 5.05595 14.6864 4.99377 15.0027 4.99414C15.3191 4.99451 15.6322 5.05742 15.9242 5.17926C16.2161 5.30109 16.4811 5.47944 16.7039 5.70405L18.5999 7.60004C18.8305 7.82185 19.0144 8.08753 19.1408 8.38146C19.2673 8.67538 19.3336 8.99162 19.3361 9.31157C19.3385 9.63152 19.2769 9.94873 19.1549 10.2445C19.033 10.5403 18.8531 10.8088 18.6259 11.034L9.8999 19.8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SwatchBook doesn't support ${type}`);
  return null;
});

SwatchBook.displayName = "SwatchBook";

SwatchBook.metadata = {
  name: "SwatchBook",
  category: "stroke/photography",
  tags: ["swatch", "book", "icon"],
  description: "SwatchBook icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SwatchBook;
