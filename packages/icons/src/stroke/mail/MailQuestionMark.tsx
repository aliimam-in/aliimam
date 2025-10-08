import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MailQuestionMark: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MailQuestionMark(
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
        d="M22 10.5V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 19.1 2.9 20 4 20H16.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7 13.03 12.7C12.721 12.893 12.364 12.996 12 12.996 11.636 12.996 11.279 12.893 10.97 12.7L2 7M18 15.28C18.2 14.88 18.5 14.48 18.9 14.28 19.314 14.041 19.798 13.95 20.27 14.022 20.743 14.095 21.177 14.327 21.5 14.68 21.8 15.08 22 15.48 22 15.98 22 17.28 20 17.98 20 17.98M20 22V22.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MailQuestionMark.displayName = "MailQuestionMark";

MailQuestionMark.metadata = {
  name: "MailQuestionMark",
  category: "stroke/mail",
  tags: ["mail", "question", "mark", "icon"],
  description: "MailQuestionMark icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MailQuestionMark;
