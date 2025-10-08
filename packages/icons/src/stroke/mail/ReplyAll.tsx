import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReplyAll: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReplyAll(
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
        d="M12 17L7 12L12 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 18V16C22 14.939 21.579 13.922 20.828 13.172 20.078 12.421 19.061 12 18 12H7M7 17 2 12 7 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReplyAll.displayName = "ReplyAll";

ReplyAll.metadata = {
  name: "ReplyAll",
  category: "stroke/mail",
  tags: ["reply", "all", "icon"],
  description: "ReplyAll icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReplyAll;
