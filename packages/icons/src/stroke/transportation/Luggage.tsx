import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LuggageProps extends IconProps {
  type?: "stroke";
}

export const Luggage: IconComponent<LuggageProps> = React.forwardRef<
  SVGSVGElement,
  LuggageProps
>(function Luggage(
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
          d="M6 20C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H18C18.5304 6 19.0391 6.21071 19.4142 6.58579C19.7893 6.96086 20 7.46957 20 8V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 18V4C8 3.47 8.211 2.961 8.586 2.586 8.961 2.211 9.47 2 10 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V18M10 20H14M16 22C17.105 22 18 21.105 18 20 18 18.895 17.105 18 16 18 14.895 18 14 18.895 14 20 14 21.105 14.895 22 16 22ZM8 22C9.105 22 10 21.105 10 20 10 18.895 9.105 18 8 18 6.895 18 6 18.895 6 20 6 21.105 6.895 22 8 22Z"
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
          d="M6 20C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H18C18.5304 6 19.0391 6.21071 19.4142 6.58579C19.7893 6.96086 20 7.46957 20 8V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 18V4C8 3.47 8.211 2.961 8.586 2.586 8.961 2.211 9.47 2 10 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V18M10 20H14M16 22C17.105 22 18 21.105 18 20 18 18.895 17.105 18 16 18 14.895 18 14 18.895 14 20 14 21.105 14.895 22 16 22ZM8 22C9.105 22 10 21.105 10 20 10 18.895 9.105 18 8 18 6.895 18 6 18.895 6 20 6 21.105 6.895 22 8 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Luggage doesn't support ${type}`);
  return null;
});

Luggage.displayName = "Luggage";

Luggage.metadata = {
  name: "Luggage",
  category: "stroke/transportation",
  tags: ["luggage", "icon"],
  description: "Luggage icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Luggage;
