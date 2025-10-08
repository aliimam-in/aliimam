import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mailbox: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Mailbox(
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
        d="M22 17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V9.5C2 7 4 5 6.5 5H18C20.2 5 22 6.8 22 9V17Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9H18V11M6.5 5C9 5 11 7 11 9.5V17C11 17.53 10.789 18.039 10.414 18.414 10.039 18.789 9.53 19 9 19M6 10H7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Mailbox.displayName = "Mailbox";

Mailbox.metadata = {
  name: "Mailbox",
  category: "stroke/mail",
  tags: ["mailbox", "icon"],
  description: "Mailbox icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mailbox;
