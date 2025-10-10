import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface NewspaperProps extends IconProps {
  type?: "stroke";
}

export const Newspaper: IconComponent<NewspaperProps> = React.forwardRef<
  SVGSVGElement,
  NewspaperProps
>(function Newspaper(
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
          d="M15 18H10M18 14H10M4 22H20C20.53 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.53 22 20V4C22 3.47 21.789 2.961 21.414 2.586 21.039 2.211 20.53 2 20 2H8C7.47 2 6.961 2.211 6.586 2.586 6.211 2.961 6 3.47 6 4V20C6 20.53 5.789 21.039 5.414 21.414 5.039 21.789 4.53 22 4 22ZM4 22C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V11C2 10.47 2.211 9.961 2.586 9.586 2.961 9.211 3.47 9 4 9H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 6H11C10.4477 6 10 6.44772 10 7V9C10 9.55228 10.4477 10 11 10H17C17.5523 10 18 9.55228 18 9V7C18 6.44772 17.5523 6 17 6Z"
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
          d="M15 18H10M18 14H10M4 22H20C20.53 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.53 22 20V4C22 3.47 21.789 2.961 21.414 2.586 21.039 2.211 20.53 2 20 2H8C7.47 2 6.961 2.211 6.586 2.586 6.211 2.961 6 3.47 6 4V20C6 20.53 5.789 21.039 5.414 21.414 5.039 21.789 4.53 22 4 22ZM4 22C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V11C2 10.47 2.211 9.961 2.586 9.586 2.961 9.211 3.47 9 4 9H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 6H11C10.4477 6 10 6.44772 10 7V9C10 9.55228 10.4477 10 11 10H17C17.5523 10 18 9.55228 18 9V7C18 6.44772 17.5523 6 17 6Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Newspaper doesn't support ${type}`);
  return null;
});

Newspaper.displayName = "Newspaper";

Newspaper.metadata = {
  name: "Newspaper",
  category: "stroke/multimedia",
  tags: ["newspaper", "icon"],
  description: "Newspaper icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Newspaper;
