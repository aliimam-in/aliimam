import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RssProps extends IconProps {
  type?: "stroke";
}

export const Rss: IconComponent<RssProps> = React.forwardRef<
  SVGSVGElement,
  RssProps
>(function Rss(
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
          d="M4 11C6.387 11 8.676 11.948 10.364 13.636 12.052 15.324 13 17.613 13 20M4 4C8.243 4 12.313 5.686 15.314 8.686 18.314 11.687 20 15.757 20 20M5 20C5.552 20 6 19.552 6 19 6 18.448 5.552 18 5 18 4.448 18 4 18.448 4 19 4 19.552 4.448 20 5 20Z"
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
          d="M4 11C6.387 11 8.676 11.948 10.364 13.636 12.052 15.324 13 17.613 13 20M4 4C8.243 4 12.313 5.686 15.314 8.686 18.314 11.687 20 15.757 20 20M5 20C5.552 20 6 19.552 6 19 6 18.448 5.552 18 5 18 4.448 18 4 18.448 4 19 4 19.552 4.448 20 5 20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Rss doesn't support ${type}`);
  return null;
});

Rss.displayName = "Rss";

Rss.metadata = {
  name: "Rss",
  category: "stroke/social",
  tags: ["rss", "icon"],
  description: "Rss icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rss;
