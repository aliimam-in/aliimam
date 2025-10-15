import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Oman: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Oman(
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
        viewBox="0 0 32 32"
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
          d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
          fill="#cd312c"
        />
        <path
          d="M11 20V28H27C29.209 28 31 26.209 31 24V20H11Z"
          fill="#377d41"
        />
        <path
          d="M27 4H11V12H31V8C31 5.791 29.209 4 27 4ZM9.225 12.667C8.643 12.062 7.446 11.48 7.008 10.55 7.004 10.548 7.004 10.543 7.008 10.541 6.963 10.302 7.104 10.038 7.288 9.914 7.313 10.296 7.864 10.024 8.044 10.005 7.886 10.414 9.131 10.145 9.268 10.218 9.481 10.238 9.351 9.688 9.385 9.586 9.373 9.424 7.884 9.329 8.044 9.69 7.86 9.726 7.836 9.509 7.584 9.539 9.311 6.613 8.693 6.461 7.072 9.333L7.116 9.353C6.907 9.673 7.101 9.003 7.011 8.869V8.776C6.899 8.782 6.741 8.711 6.763 8.596H6.756V8.594H6.719V8.414H6.683V8.05H6.646V7.82H6.659C7.064 7.342 7.236 7.41 6.511 7.001 5.805 7.401 5.961 7.322 6.329 7.82H6.342V8.05H6.306V8.414H6.27V8.595H6.232L6.225 8.596C6.252 8.681 6.125 8.782 5.977 8.777V8.944C5.853 9.119 6.045 9.302 5.955 9.483 5.921 9.437 5.891 9.394 5.862 9.353L5.906 9.333C4.302 6.489 3.661 6.592 5.377 9.509 5.13 9.497 5.126 9.701 4.935 9.661 5.065 9.302 3.847 9.451 3.711 9.478 3.52 9.516 3.599 10.006 3.594 10.11 3.587 10.272 5.126 10.383 4.935 9.976 5.133 9.972 5.501 10.245 5.681 9.978 5.798 10.022 5.905 10.116 5.956 10.24H5.954L5.946 10.248C5.958 10.493 4.746 10.449 4.649 10.449 4.655 10.449 4.524 10.456 4.525 10.451 3.521 10.517 4.972 11.161 4.972 11.161 4.972 11.161 5.366 11.26 5.411 11.26 4.219 12.138 3.77 13.316 4.882 12.336 4.882 12.336 5.642 11.472 6.15 11.312 6.219 11.298 6.721 11.112 6.746 11.09 7.216 11.566 7.699 11.96 7.921 12.183 8.143 12.406 9.984 13.406 9.226 12.669L9.225 12.667Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Oman.displayName = "Oman";

Oman.metadata = {
  name: "Oman",
  category: "symbols/flags",
  tags: ["oman", "icon"],
  description: "Oman icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Oman;
