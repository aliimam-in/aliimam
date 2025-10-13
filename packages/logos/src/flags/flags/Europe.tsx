import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Europe: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Europe(
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
          fill="#112f95"
        />
        <path
          d="M16 8.167 15.745 8.951H14.921L15.588 9.435 15.333 10.219 16 9.735 16.667 10.219 16.412 9.435 17.079 8.951H16.255L16 8.167ZM16.255 22.565 16 21.781 15.745 22.565H14.921L15.588 23.049 15.333 23.833 16 23.349 16.667 23.833 16.412 23.049 17.079 22.565H16.255ZM9.193 16.542 9.86 17.026 9.605 16.242 10.272 15.758H9.448L9.193 14.974 8.938 15.758H8.114L8.781 16.242 8.526 17.026 9.193 16.542ZM12.596 9.079 12.342 9.863H11.517L12.184 10.347 11.93 11.131 12.596 10.647 13.263 11.131 13.009 10.347 13.675 9.863H12.851L12.596 9.079ZM10.105 11.57 9.85 12.354H9.026L9.693 12.839 9.438 13.623 10.105 13.138 10.772 13.623 10.517 12.839 11.184 12.354H10.36L10.105 11.57ZM10.36 19.161 10.105 18.377 9.85 19.161H9.026L9.693 19.646 9.438 20.43 10.105 19.945 10.772 20.43 10.517 19.646 11.184 19.161H10.36ZM12.851 21.653 12.596 20.869 12.342 21.653H11.517L12.184 22.137 11.93 22.921 12.596 22.437 13.263 22.921 13.009 22.137 13.675 21.653H12.851ZM23.886 15.758H23.062L22.807 14.974 22.552 15.758H21.728L22.395 16.242 22.14 17.026 22.807 16.542 23.474 17.026 23.219 16.242 23.886 15.758ZM19.404 9.079 19.149 9.863H18.325L18.991 10.347 18.737 11.131 19.404 10.647 20.07 11.131 19.816 10.347 20.483 9.863H19.658L19.404 9.079ZM21.483 12.839 21.228 13.623 21.895 13.138 22.562 13.623 22.307 12.839 22.974 12.354H22.15L21.895 11.57 21.64 12.354H20.816L21.483 12.839ZM22.15 19.161 21.895 18.377 21.64 19.161H20.816L21.483 19.646 21.228 20.43 21.895 19.945 22.562 20.43 22.307 19.646 22.974 19.161H22.15ZM19.658 21.653 19.404 20.869 19.149 21.653H18.325L18.991 22.137 18.737 22.921 19.404 22.437 20.07 22.921 19.816 22.137 20.483 21.653H19.658Z"
          fill="#f6cd46"
        />
      </svg>
    );
  },
);

Europe.displayName = "Europe";

Europe.metadata = {
  name: "Europe",
  category: "flags/flags",
  tags: ["europe", "icon"],
  description: "Europe icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Europe;
