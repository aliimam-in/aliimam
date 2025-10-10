import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Sparkle: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Sparkle(
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
        d="M11.017 2.81395C11.0598 2.58456 11.1815 2.37737 11.3611 2.22827C11.5406 2.07917 11.7666 1.99756 12 1.99756C12.2333 1.99756 12.4593 2.07917 12.6389 2.22827C12.8184 2.37737 12.9401 2.58456 12.983 2.81395L14.034 8.37195C14.1086 8.7671 14.3006 9.13057 14.585 9.41492C14.8693 9.69928 15.2328 9.89131 15.628 9.96595L21.186 11.017C21.4153 11.0598 21.6225 11.1815 21.7716 11.3611C21.9207 11.5406 22.0023 11.7666 22.0023 12C22.0023 12.2333 21.9207 12.4593 21.7716 12.6389C21.6225 12.8184 21.4153 12.9401 21.186 12.983L15.628 14.034C15.2328 14.1086 14.8693 14.3006 14.585 14.585C14.3006 14.8693 14.1086 15.2328 14.034 15.628L12.983 21.186C12.9401 21.4153 12.8184 21.6225 12.6389 21.7716C12.4593 21.9207 12.2333 22.0023 12 22.0023C11.7666 22.0023 11.5406 21.9207 11.3611 21.7716C11.1815 21.6225 11.0598 21.4153 11.017 21.186L9.96595 15.628C9.89131 15.2328 9.69928 14.8693 9.41492 14.585C9.13057 14.3006 8.7671 14.1086 8.37195 14.034L2.81395 12.983C2.58456 12.9401 2.37737 12.8184 2.22827 12.6389C2.07917 12.4593 1.99756 12.2333 1.99756 12C1.99756 11.7666 2.07917 11.5406 2.22827 11.3611C2.37737 11.1815 2.58456 11.0598 2.81395 11.017L8.37195 9.96595C8.7671 9.89131 9.13057 9.69928 9.41492 9.41492C9.69928 9.13057 9.89131 8.7671 9.96595 8.37195L11.017 2.81395Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Sparkle.displayName = "Sparkle";

Sparkle.metadata = {
  name: "Sparkle",
  category: "stroke/shapes",
  tags: ["sparkle", "icon"],
  description: "Sparkle icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sparkle;
