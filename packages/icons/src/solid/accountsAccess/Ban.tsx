import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BanProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Ban: IconComponent<BanProps> = React.forwardRef<
  SVGSVGElement,
  BanProps
>(function Ban(
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
  if (type === "solid") {
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
          d="M18.707 19.415C16.933 21.0207 14.5813 22 12 22C6.47715 22 2 17.5228 2 12C2 9.41845 2.97799 7.06516 4.58398 5.29102L18.707 19.415ZM12 2C17.5228 2 22 6.47715 22 12C22 14.5818 21.0213 16.9348 19.415 18.709L5.29102 4.58398C7.06516 2.97799 9.41845 2 12 2Z"
          fill="currentColor"
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
          d="M4.929 4.929 19.07 19.071M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Ban doesn't support ${type}`);
  return null;
});

Ban.displayName = "Ban";

Ban.metadata = {
  name: "Ban",
  category: "solid/accountsAccess",
  tags: ["ban", "icon"],
  description: "Ban icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ban;
