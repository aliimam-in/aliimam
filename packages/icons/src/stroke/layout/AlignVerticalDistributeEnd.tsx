import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignVerticalDistributeEnd: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignVerticalDistributeEnd(
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
        d="M17 14H7C5.895 14 5 14.895 5 16V18C5 19.105 5.895 20 7 20H17C18.105 20 19 19.105 19 18V16C19 14.895 18.105 14 17 14ZM15 4H9C7.895 4 7 4.895 7 6V8C7 9.105 7.895 10 9 10H15C16.105 10 17 9.105 17 8V6C17 4.895 16.105 4 15 4ZM2 20H22M2 10H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignVerticalDistributeEnd.displayName = "AlignVerticalDistributeEnd";

AlignVerticalDistributeEnd.metadata = {
  name: "AlignVerticalDistributeEnd",
  category: "stroke/layout",
  tags: ["align", "vertical", "distribute", "end", "icon"],
  description: "AlignVerticalDistributeEnd icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignVerticalDistributeEnd;
