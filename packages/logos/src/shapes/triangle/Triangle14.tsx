import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle14: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle14(
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
      <g fill="currentColor" clipPath="url(#undefined-clip0_2068_217)">
        <path d="M11.307 4.012C11.307 1.719 11.307.573 10.545.143 9.783-.287 8.767.286 6.735 1.432L5.265 2.261C3.233 3.407 2.217 3.981 2.217 4.84 2.217 5.7 3.233 6.273 5.265 7.42L6.735 8.248C8.767 9.395 9.783 9.968 10.545 9.538 11.307 9.108 11.307 7.962 11.307 5.669V4.012ZM4.573 8.592C2.54 7.446 1.524 6.873.762 7.302 0 7.732 0 8.879 0 11.171V12.829C0 15.121 0 16.268.762 16.698 1.524 17.128 2.54 16.554 4.573 15.408L6.042 14.579C8.074 13.433 9.09 12.86 9.09 12 9.09 11.14 8.074 10.567 6.042 9.421L4.573 8.592ZM5.265 16.58C3.233 17.727 2.217 18.3 2.217 19.16 2.217 20.019 3.233 20.593 5.265 21.739L6.735 22.568C8.767 23.714 9.783 24.287 10.545 23.857 11.307 23.427 11.307 22.281 11.307 19.988V18.331C11.307 16.038 11.307 14.892 10.545 14.462 9.783 14.032 8.767 14.605 6.735 15.752L5.265 16.58ZM12.693 19.988C12.693 22.281 12.693 23.427 13.455 23.857 14.217 24.287 15.233 23.714 17.266 22.568L18.735 21.739C20.767 20.593 21.783 20.019 21.783 19.16 21.783 18.3 20.767 17.727 18.735 16.58L17.266 15.752C15.233 14.605 14.217 14.032 13.455 14.462 12.693 14.892 12.693 16.038 12.693 18.331V19.988ZM19.427 15.408C21.46 16.554 22.476 17.128 23.238 16.698 24 16.268 24 15.121 24 12.829V11.171C24 8.879 24 7.732 23.238 7.302 22.476 6.873 21.46 7.446 19.427 8.592L17.958 9.421C15.926 10.567 14.91 11.14 14.91 12 14.91 12.86 15.926 13.433 17.958 14.579L19.427 15.408ZM18.735 7.42C20.767 6.273 21.783 5.7 21.783 4.84 21.783 3.981 20.767 3.407 18.735 2.261L17.266 1.432C15.233.286 14.217-.287 13.455.143 12.693.573 12.693 1.719 12.693 4.012V5.669C12.693 7.962 12.693 9.108 13.455 9.538 14.217 9.968 15.233 9.395 17.266 8.248L18.735 7.42Z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_217">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle14.displayName = "Triangle14";

Triangle14.metadata = {
  name: "Triangle14",
  category: "shapes/triangle",
  tags: ["triangle", "14", "icon"],
  description: "Triangle14 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle14;
