import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const QrCode: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function QrCode(
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
      ...props
    },
    forwardedRef,
  ) {
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
          d="M7 3H4C3.448 3 3 3.448 3 4V7C3 7.552 3.448 8 4 8H7C7.552 8 8 7.552 8 7V4C8 3.448 7.552 3 7 3ZM20 3H17C16.448 3 16 3.448 16 4V7C16 7.552 16.448 8 17 8H20C20.552 8 21 7.552 21 7V4C21 3.448 20.552 3 20 3ZM7 16H4C3.448 16 3 16.448 3 17V20C3 20.552 3.448 21 4 21H7C7.552 21 8 20.552 8 20V17C8 16.448 7.552 16 7 16ZM21 16H18C17.47 16 16.961 16.211 16.586 16.586 16.211 16.961 16 17.47 16 18V21M21 21V21.01M12 7V10C12 10.53 11.789 11.039 11.414 11.414 11.039 11.789 10.53 12 10 12H7M3 12H3.01M12 3H12.01M12 16V16.01M16 12H17M21 12V12.01M12 21V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

QrCode.displayName = "QrCode";

QrCode.metadata = {
  name: "QrCode",
  category: "stroke/codingDevelopment",
  tags: ["qr", "code", "icon"],
  description: "QrCode icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default QrCode;
