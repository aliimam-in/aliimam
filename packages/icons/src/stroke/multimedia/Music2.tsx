import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Music2Props extends IconProps {
  type?: "stroke";
}

export const Music2: IconComponent<Music2Props> = React.forwardRef<
  SVGSVGElement,
  Music2Props
>(function Music2(
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
          d="M8 22C10.209 22 12 20.209 12 18 12 15.791 10.209 14 8 14 5.791 14 4 15.791 4 18 4 20.209 5.791 22 8 22ZM12 18V2L19 6"
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
          d="M8 22C10.209 22 12 20.209 12 18 12 15.791 10.209 14 8 14 5.791 14 4 15.791 4 18 4 20.209 5.791 22 8 22ZM12 18V2L19 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Music2 doesn't support ${type}`);
  return null;
});

Music2.displayName = "Music2";

Music2.metadata = {
  name: "Music2",
  category: "stroke/multimedia",
  tags: ["music", "icon"],
  description: "Music2 icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Music2;
