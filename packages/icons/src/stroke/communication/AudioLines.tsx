import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AudioLines: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AudioLines(
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
        d="M2 10V13M6 6V17M10 3V21M14 8V15M18 5V18M22 10V13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AudioLines.displayName = "AudioLines";

AudioLines.metadata = {
  name: "AudioLines",
  category: "stroke/communication",
  tags: ["audio", "lines", "icon"],
  description: "AudioLines icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AudioLines;
