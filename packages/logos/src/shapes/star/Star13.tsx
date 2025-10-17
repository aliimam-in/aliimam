import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star13: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star13(
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
          d="M0.261307 1.49126C0.0190656 0.708634 -0.102055 0.317321 0.107633 0.107633C0.31732 -0.102055 0.708632 0.0190656 1.49126 0.261307L7.60932 2.155C8.53912 2.44279 9.26708 3.17076 9.55488 4.10056L11.9999 11.9999L4.10055 9.5549C3.17075 9.2671 2.44279 8.53913 2.15499 7.60933L0.261307 1.49126Z"
          fill="currentColor"
        />
        <path
          d="M12.0002 12L19.8994 14.445C20.8292 14.7328 21.5571 15.4608 21.8449 16.3906L23.7386 22.5086C23.9809 23.2913 24.102 23.6826 23.8923 23.8923C23.6826 24.1019 23.2913 23.9808 22.5087 23.7386L16.3906 21.8449C15.4608 21.5571 14.7328 20.8291 14.445 19.8993L12.0001 12.0002L9.55506 19.8994C9.26727 20.8292 8.53931 21.5572 7.60951 21.845L1.49144 23.7387C0.708818 23.9809 0.317505 24.1021 0.107818 23.8924C-0.10187 23.6827 0.0192506 23.2914 0.261491 22.5087L2.15518 16.3907C2.44297 15.4609 3.17094 14.7329 4.10074 14.4451L12 12.0001L14.4451 4.10067C14.7329 3.17087 15.4608 2.44291 16.3906 2.15511L22.5087 0.261422C23.2913 0.0191805 23.6826 -0.10194 23.8923 0.107748C24.102 0.317436 23.9809 0.708748 23.7386 1.49137L21.845 7.60945C21.5572 8.53925 20.8292 9.26721 19.8994 9.55501L12.0002 12Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Star13.displayName = "Star13";

Star13.metadata = {
  name: "Star13",
  category: "shapes/star",
  tags: ["star", "13", "icon"],
  description: "Star13 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star13;
