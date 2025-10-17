import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ellipse2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ellipse2(
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
      <g clipPath="url(#undefined-clip0_2068_772)">
        <path
          d="M12 8.64C10.1443 8.64 8.64 10.1443 8.64 12C8.64 13.8557 10.1443 15.36 12 15.36C13.8557 15.36 15.36 13.8557 15.36 12C15.36 10.1443 13.8557 8.64 12 8.64ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_772">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Ellipse2.displayName = "Ellipse2";

Ellipse2.metadata = {
  name: "Ellipse2",
  category: "shapes/ellipse",
  tags: ["ellipse", "icon"],
  description: "Ellipse2 icon from shapes/ellipse category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipse2;
