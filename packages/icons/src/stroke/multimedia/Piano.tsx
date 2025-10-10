import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PianoProps extends IconProps {
  type?: "stroke";
}

export const Piano: IconComponent<PianoProps> = React.forwardRef<
  SVGSVGElement,
  PianoProps
>(function Piano(
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
          d="M18.5 8C17.1 8 15.9 7.2 15.3 6 14.732 4.425 13.608 3.111 12.14 2.306 10.671 1.501 8.959 1.26 7.326 1.629 5.692 1.997 4.249 2.95 3.269 4.307 2.288 5.664 1.837 7.333 2 9V20C2 20.531 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H20C20.531 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.531 22 20V11.5C22 9.6 20.4 8 18.5 8ZM2 14H22M6 14V18M10 14V18M14 14V18M18 14V18"
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
          d="M18.5 8C17.1 8 15.9 7.2 15.3 6 14.732 4.425 13.608 3.111 12.14 2.306 10.671 1.501 8.959 1.26 7.326 1.629 5.692 1.997 4.249 2.95 3.269 4.307 2.288 5.664 1.837 7.333 2 9V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H20C20.531 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.53 22 20V11.5C22 9.6 20.4 8 18.5 8ZM2 14H22M6 14V18M10 14V18M14 14V18M18 14V18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Piano doesn't support ${type}`);
  return null;
});

Piano.displayName = "Piano";

Piano.metadata = {
  name: "Piano",
  category: "stroke/multimedia",
  tags: ["piano", "icon"],
  description: "Piano icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Piano;
