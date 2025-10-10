import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AudioLinesProps extends IconProps {
  type?: "stroke";
}

export const AudioLines: IconComponent<AudioLinesProps> = React.forwardRef<
  SVGSVGElement,
  AudioLinesProps
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
  }

  if (type === "stroke") {
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
  }

  console.error(`AudioLines doesn't support ${type}`);
  return null;
});

AudioLines.displayName = "AudioLines";

AudioLines.metadata = {
  name: "AudioLines",
  category: "stroke/multimedia",
  tags: ["audio", "lines", "icon"],
  description: "AudioLines icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AudioLines;
