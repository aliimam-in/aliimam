import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ellipse1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ellipse1(
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
      viewBox="0 0 64 64"
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
      <g clipPath="url(#undefined-clip0_2051_96)">
        <path
          d="M64 32C64 14.327 49.673 0 32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32ZM36.735 27.2646C39.3654 29.895 43.3594 30.4541 51.3475 31.5725L54.4 32L51.3475 32.4272C43.3594 33.5456 39.3654 34.1046 36.735 36.735C34.105 39.3654 33.5456 43.3594 32.4272 51.3475L32 54.4L31.5728 51.3475C30.4544 43.3594 29.895 39.3654 27.265 36.735C24.6346 34.1046 20.6406 33.5456 12.6525 32.4272L9.6 32L12.6525 31.5725C20.6406 30.4541 24.6346 29.895 27.265 27.2646C29.8954 24.6342 30.4544 20.6406 31.5728 12.6525L32 9.6L32.4272 12.6522C33.5456 20.6403 34.105 24.6346 36.735 27.2646Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2051_96">
          <path fill="#fff" d="M0 0H64V64H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Ellipse1.displayName = "Ellipse1";

Ellipse1.metadata = {
  name: "Ellipse1",
  category: "shapes/shapes",
  tags: ["ellipse", "icon"],
  description: "Ellipse1 icon from shapes/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipse1;
