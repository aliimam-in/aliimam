import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MailOpen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MailOpen(
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
        d="M21.2 8.4C21.7 8.78 22 9.37 22 10V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V10C2 9.68951 2.07229 9.38328 2.21115 9.10557C2.35 8.82786 2.55161 8.58629 2.8 8.4L10.8 2.4C11.1462 2.14036 11.5673 2 12 2C12.4327 2 12.8538 2.14036 13.2 2.4L21.2 8.4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10L13.03 15.7C12.7213 15.8934 12.3643 15.996 12 15.996C11.6357 15.996 11.2787 15.8934 10.97 15.7L2 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MailOpen.displayName = "MailOpen";

MailOpen.metadata = {
  name: "MailOpen",
  category: "stroke/mail",
  tags: ["mail", "open", "icon"],
  description: "MailOpen icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MailOpen;
