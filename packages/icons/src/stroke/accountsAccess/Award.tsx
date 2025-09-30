import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Award: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Award(
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
          d="M15.477 12.89L16.992 21.416C17.009 21.5164 16.9949 21.6196 16.9516 21.7118C16.9084 21.8039 16.838 21.8807 16.7499 21.9318C16.6619 21.9829 16.5603 22.0059 16.4588 21.9977C16.3573 21.9895 16.2607 21.9506 16.182 21.886L12.602 19.199C12.4292 19.0699 12.2192 19.0001 12.0035 19.0001C11.7878 19.0001 11.5778 19.0699 11.405 19.199L7.819 21.885C7.74032 21.9494 7.64386 21.9883 7.54249 21.9965C7.44112 22.0047 7.33967 21.9818 7.25166 21.9309C7.16365 21.8799 7.09327 21.8033 7.04991 21.7113C7.00656 21.6193 6.99228 21.5163 7.009 21.416L8.523 12.89"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Award.displayName = "Award";

Award.metadata = {
  name: "Award",
  category: "stroke/accountsAccess",
  tags: ["award", "icon"],
  description: "Award icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Award;
