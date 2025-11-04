import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract63: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract63(
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
        d="M13.2248 11.179L24 12L13.2248 12.821C13.0095 12.8381 12.8381 13.0095 12.821 13.2248L12 24L11.179 13.2248C11.1619 13.0095 10.9905 12.8381 10.7752 12.821L0 12L10.7752 11.179C10.9905 11.1619 11.1619 10.9905 11.179 10.7752L12 0L12.821 10.7752C12.8381 10.9905 13.0095 11.1619 13.2248 11.179Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract63.displayName = "Abstract63";

Abstract63.metadata = {
  name: "Abstract63",
  category: "shapes/abstract",
  tags: ["abstract", "63", "icon"],
  description: "Abstract63 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract63;
