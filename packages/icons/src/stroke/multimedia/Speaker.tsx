import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SpeakerProps extends IconProps {
  type?: "stroke";
}

export const Speaker: IconComponent<SpeakerProps> = React.forwardRef<
  SVGSVGElement,
  SpeakerProps
>(function Speaker(
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
          d="M18 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V4C20 2.895 19.105 2 18 2ZM12 6H12.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18C14.209 18 16 16.209 16 14 16 11.791 14.209 10 12 10 9.791 10 8 11.791 8 14 8 16.209 9.791 18 12 18ZM12 14H12.01"
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
          d="M18 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V4C20 2.895 19.105 2 18 2ZM12 6H12.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18C14.209 18 16 16.209 16 14 16 11.791 14.209 10 12 10 9.791 10 8 11.791 8 14 8 16.209 9.791 18 12 18ZM12 14H12.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Speaker doesn't support ${type}`);
  return null;
});

Speaker.displayName = "Speaker";

Speaker.metadata = {
  name: "Speaker",
  category: "stroke/multimedia",
  tags: ["speaker", "icon"],
  description: "Speaker icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Speaker;
