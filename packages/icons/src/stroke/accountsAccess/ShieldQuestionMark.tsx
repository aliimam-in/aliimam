import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ShieldQuestionMark: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ShieldQuestionMark(
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
        d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6.00002C4 5.73481 4.10536 5.48045 4.29289 5.29292C4.48043 5.10538 4.73478 5.00002 5 5.00002C7 5.00002 9.5 3.80002 11.24 2.28002C11.4519 2.09902 11.7214 1.99957 12 1.99957C12.2786 1.99957 12.5481 2.09902 12.76 2.28002C14.51 3.81002 17 5.00002 19 5.00002C19.2652 5.00002 19.5196 5.10538 19.7071 5.29292C19.8946 5.48045 20 5.73481 20 6.00002V13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 9C9.34 8.339 9.805 7.783 10.413 7.429 11.022 7.076 11.735 6.947 12.428 7.067 13.122 7.186 13.751 7.545 14.207 8.081 14.662 8.617 14.915 9.296 14.92 10 14.92 12 11.92 13 11.92 13M12 17H12.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ShieldQuestionMark.displayName = "ShieldQuestionMark";

ShieldQuestionMark.metadata = {
  name: "ShieldQuestionMark",
  category: "stroke/accountsAccess",
  tags: ["shield", "question", "mark", "icon"],
  description: "ShieldQuestionMark icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShieldQuestionMark;
