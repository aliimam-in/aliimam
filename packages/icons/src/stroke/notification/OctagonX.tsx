import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface OctagonXProps extends IconProps {
  type?: "stroke";
}

export const OctagonX: IconComponent<OctagonXProps> = React.forwardRef<
  SVGSVGElement,
  OctagonXProps
>(function OctagonX(
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
          d="M15 9 9 15M2.586 16.726C2.211 16.351 2 15.842 2 15.312V8.688C2 8.158 2.211 7.649 2.586 7.274L7.274 2.586C7.649 2.211 8.158 2 8.688 2H15.312C15.842 2 16.351 2.211 16.726 2.586L21.414 7.274C21.789 7.649 22 8.158 22 8.688V15.312C22 15.842 21.789 16.351 21.414 16.726L16.726 21.414C16.351 21.789 15.842 22 15.312 22H8.688C8.158 22 7.649 21.789 7.274 21.414L2.586 16.726ZM9 9 15 15"
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
          d="M15 9 9 15M2.586 16.726C2.211 16.351 2 15.842 2 15.312V8.688C2 8.158 2.211 7.649 2.586 7.274L7.274 2.586C7.649 2.211 8.158 2 8.688 2H15.312C15.842 2 16.351 2.211 16.726 2.586L21.414 7.274C21.789 7.649 22 8.158 22 8.688V15.312C22 15.842 21.789 16.351 21.414 16.726L16.726 21.414C16.351 21.789 15.842 22 15.312 22H8.688C8.158 22 7.649 21.789 7.274 21.414L2.586 16.726ZM9 9 15 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`OctagonX doesn't support ${type}`);
  return null;
});

OctagonX.displayName = "OctagonX";

OctagonX.metadata = {
  name: "OctagonX",
  category: "stroke/notification",
  tags: ["octagon", "icon"],
  description: "OctagonX icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default OctagonX;
