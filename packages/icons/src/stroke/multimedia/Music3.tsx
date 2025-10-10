import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Music3Props extends IconProps {
  type?: "stroke";
}

export const Music3: IconComponent<Music3Props> = React.forwardRef<
  SVGSVGElement,
  Music3Props
>(function Music3(
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
          d="M12 22C14.209 22 16 20.209 16 18 16 15.791 14.209 14 12 14 9.791 14 8 15.791 8 18 8 20.209 9.791 22 12 22ZM16 18V2"
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
          d="M12 22C14.209 22 16 20.209 16 18 16 15.791 14.209 14 12 14 9.791 14 8 15.791 8 18 8 20.209 9.791 22 12 22ZM16 18V2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Music3 doesn't support ${type}`);
  return null;
});

Music3.displayName = "Music3";

Music3.metadata = {
  name: "Music3",
  category: "stroke/multimedia",
  tags: ["music", "icon"],
  description: "Music3 icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Music3;
