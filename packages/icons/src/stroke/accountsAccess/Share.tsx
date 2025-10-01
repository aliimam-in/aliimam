import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Share: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Share(
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
          d="M12 2V15M16 6 12 2 8 6M4 12V20C4 20.53 4.211 21.039 4.586 21.414 4.961 21.789 5.47 22 6 22H18C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Share.displayName = "Share";

Share.metadata = {
  name: "Share",
  category: "stroke/accountsAccess",
  tags: ["share", "icon"],
  description: "Share icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Share;
