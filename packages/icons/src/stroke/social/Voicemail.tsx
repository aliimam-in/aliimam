import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface VoicemailProps extends IconProps {
  type?: "stroke";
}

export const Voicemail: IconComponent<VoicemailProps> = React.forwardRef<
  SVGSVGElement,
  VoicemailProps
>(function Voicemail(
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
          d="M6 16C8.209 16 10 14.209 10 12 10 9.791 8.209 8 6 8 3.791 8 2 9.791 2 12 2 14.209 3.791 16 6 16ZM18 16C20.209 16 22 14.209 22 12 22 9.791 20.209 8 18 8 15.791 8 14 9.791 14 12 14 14.209 15.791 16 18 16ZM6 16H18"
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
          d="M6 16C8.209 16 10 14.209 10 12 10 9.791 8.209 8 6 8 3.791 8 2 9.791 2 12 2 14.209 3.791 16 6 16ZM18 16C20.209 16 22 14.209 22 12 22 9.791 20.209 8 18 8 15.791 8 14 9.791 14 12 14 14.209 15.791 16 18 16ZM6 16H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Voicemail doesn't support ${type}`);
  return null;
});

Voicemail.displayName = "Voicemail";

Voicemail.metadata = {
  name: "Voicemail",
  category: "stroke/social",
  tags: ["voicemail", "icon"],
  description: "Voicemail icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Voicemail;
