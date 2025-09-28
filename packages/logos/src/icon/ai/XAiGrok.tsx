import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const XAIGrok: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function XAIGrok(
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
        d="M18.7841 7.73065L19.1998 24H22.5297L22.946 1.80804L18.7841 7.73065ZM22.946 0H17.8651L9.89206 11.3467L12.4325 14.9618L22.946 0ZM1 24H6.08089L8.62183 20.3849L6.08089 16.7693L1 24ZM1 7.73065L12.4325 24H17.5134L6.08089 7.73065H1Z"
        fill="currentColor"
      />
    </svg>
  );
});

XAIGrok.displayName = "XAIGrok";

XAIGrok.metadata = {
  name: "XAIGrok",
  category: "icon/ai",
  tags: ["xa", "grok", "icon"],
  description: "XAIGrok icon from icon/ai category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default XAIGrok;
