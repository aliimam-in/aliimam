import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Reply: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Reply(
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
          d="M20 18V16C20 14.9391 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12H4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 17L4 12L9 7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Reply.displayName = "Reply";

Reply.metadata = {
  name: "Reply",
  category: "stroke/mail",
  tags: ["reply", "icon"],
  description: "Reply icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Reply;
