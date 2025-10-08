import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GiftProps extends IconProps {
  type?: "stroke";
}

export const Gift: IconComponent<GiftProps> = React.forwardRef<
  SVGSVGElement,
  GiftProps
>(function Gift(
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
          d="M20 8H4C3.448 8 3 8.448 3 9V11C3 11.552 3.448 12 4 12H20C20.552 12 21 11.552 21 11V9C21 8.448 20.552 8 20 8ZM12 8V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 12V19C19 19.53 18.789 20.039 18.414 20.414 18.039 20.789 17.53 21 17 21H7C6.47 21 5.961 20.789 5.586 20.414 5.211 20.039 5 19.53 5 19V12M7.5 8C6.837 8 6.201 7.737 5.732 7.268 5.263 6.799 5 6.163 5 5.5 5 4.837 5.263 4.201 5.732 3.732 6.201 3.263 6.837 3 7.5 3 8.465 2.983 9.41 3.451 10.213 4.343 11.015 5.235 11.638 6.509 12 8 12.362 6.509 12.985 5.235 13.787 4.343 14.59 3.451 15.535 2.983 16.5 3 17.163 3 17.799 3.263 18.268 3.732 18.737 4.201 19 4.837 19 5.5 19 6.163 18.737 6.799 18.268 7.268 17.799 7.737 17.163 8 16.5 8"
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
          d="M20 8H4C3.448 8 3 8.448 3 9V11C3 11.552 3.448 12 4 12H20C20.552 12 21 11.552 21 11V9C21 8.448 20.552 8 20 8ZM12 8V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 12V19C19 19.53 18.789 20.039 18.414 20.414 18.039 20.789 17.53 21 17 21H7C6.47 21 5.961 20.789 5.586 20.414 5.211 20.039 5 19.53 5 19V12M7.5 8C6.837 8 6.201 7.737 5.732 7.268 5.263 6.799 5 6.163 5 5.5 5 4.837 5.263 4.201 5.732 3.732 6.201 3.263 6.837 3 7.5 3 8.465 2.983 9.41 3.451 10.213 4.343 11.015 5.235 11.638 6.509 12 8 12.362 6.509 12.985 5.235 13.787 4.343 14.59 3.451 15.535 2.983 16.5 3 17.163 3 17.799 3.263 18.268 3.732 18.737 4.201 19 4.837 19 5.5 19 6.163 18.737 6.799 18.268 7.268 17.799 7.737 17.163 8 16.5 8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Gift doesn't support ${type}`);
  return null;
});

Gift.displayName = "Gift";

Gift.metadata = {
  name: "Gift",
  category: "stroke/gaming",
  tags: ["gift", "icon"],
  description: "Gift icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gift;
