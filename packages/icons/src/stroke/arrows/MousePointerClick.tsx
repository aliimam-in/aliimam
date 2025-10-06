import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MousePointerClick: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MousePointerClick(
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
        d="M14 4.1 12 6M5.1 8 2.2 7.2M6 12 4.1 14M7.2 2.2 8 5.1M9.037 9.69C8.998 9.599 8.988 9.498 9.007 9.4 9.026 9.303 9.073 9.213 9.143 9.143 9.213 9.073 9.303 9.025 9.4 9.007 9.498 8.988 9.599 8.998 9.69 9.037L20.69 13.537C20.788 13.577 20.871 13.647 20.926 13.738 20.982 13.828 21.007 13.933 20.999 14.039 20.991 14.144 20.949 14.244 20.88 14.325 20.812 14.405 20.719 14.462 20.616 14.486L16.267 15.527C16.087 15.57 15.923 15.662 15.793 15.792 15.662 15.923 15.57 16.087 15.527 16.266L14.487 20.616C14.463 20.719 14.406 20.812 14.326 20.881 14.245 20.95 14.145 20.992 14.039 21 13.933 21.009 13.828 20.983 13.737 20.927 13.647 20.871 13.577 20.788 13.537 20.69L9.037 9.69Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MousePointerClick.displayName = "MousePointerClick";

MousePointerClick.metadata = {
  name: "MousePointerClick",
  category: "stroke/arrows",
  tags: ["mouse", "pointer", "click", "icon"],
  description: "MousePointerClick icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MousePointerClick;
