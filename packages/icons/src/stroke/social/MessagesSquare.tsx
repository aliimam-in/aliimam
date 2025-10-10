import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessagesSquare: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessagesSquare(
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
        d="M16 10C16 10.53 15.789 11.039 15.414 11.414 15.039 11.789 14.53 12 14 12H6.828C6.298 12 5.789 12.211 5.414 12.586L3.212 14.788C3.113 14.887 2.986 14.955 2.848 14.982 2.711 15.01 2.568 14.996 2.438 14.942 2.309 14.888 2.198 14.797 2.12 14.68 2.042 14.564 2 14.426 2 14.286V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V10ZM20 9C20.53 9 21.039 9.211 21.414 9.586 21.789 9.961 22 10.47 22 11V21.286C22 21.426 21.958 21.564 21.88 21.68 21.802 21.797 21.691 21.888 21.562 21.942 21.432 21.996 21.289 22.01 21.152 21.982 21.014 21.955 20.887 21.887 20.788 21.788L18.586 19.586C18.211 19.211 17.702 19 17.172 19H10C9.47 19 8.961 18.789 8.586 18.414 8.211 18.039 8 17.53 8 17V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessagesSquare.displayName = "MessagesSquare";

MessagesSquare.metadata = {
  name: "MessagesSquare",
  category: "stroke/social",
  tags: ["messages", "square", "icon"],
  description: "MessagesSquare icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessagesSquare;
