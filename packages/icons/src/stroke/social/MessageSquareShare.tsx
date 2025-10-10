import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessageSquareShare: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessageSquareShare(
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
        d="M12 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V21.286C2 21.426 2.042 21.564 2.12 21.68 2.198 21.797 2.309 21.888 2.438 21.942 2.568 21.996 2.711 22.01 2.848 21.982 2.986 21.955 3.113 21.887 3.212 21.788L5.414 19.586C5.789 19.211 6.298 19 6.828 19H20C20.53 19 21.039 18.789 21.414 18.414 21.789 18.039 22 17.53 22 17V13M16 3H22V9M16 9 22 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageSquareShare.displayName = "MessageSquareShare";

MessageSquareShare.metadata = {
  name: "MessageSquareShare",
  category: "stroke/social",
  tags: ["message", "square", "share", "icon"],
  description: "MessageSquareShare icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageSquareShare;
