import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ExternalLinkProps extends IconProps {
  type?: "stroke";
}

export const ExternalLink: IconComponent<ExternalLinkProps> = React.forwardRef<
  SVGSVGElement,
  ExternalLinkProps
>(function ExternalLink(
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
          d="M15 3H21V9M10 14 21 3M18 13V19C18 19.53 17.789 20.039 17.414 20.414 17.039 20.789 16.53 21 16 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V8C3 7.47 3.211 6.961 3.586 6.586 3.961 6.211 4.47 6 5 6H11"
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
          d="M15 3H21V9M10 14 21 3M18 13V19C18 19.53 17.789 20.039 17.414 20.414 17.039 20.789 16.53 21 16 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V8C3 7.47 3.211 6.961 3.586 6.586 3.961 6.211 4.47 6 5 6H11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ExternalLink doesn't support ${type}`);
  return null;
});

ExternalLink.displayName = "ExternalLink";

ExternalLink.metadata = {
  name: "ExternalLink",
  category: "stroke/textFormatting",
  tags: ["external", "link", "icon"],
  description: "ExternalLink icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ExternalLink;
