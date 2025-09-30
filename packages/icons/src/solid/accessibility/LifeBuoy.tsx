import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LifeBuoyProps extends IconProps {
  type?: "solid" | "stroke";
}

export const LifeBuoy: IconComponent<LifeBuoyProps> = React.forwardRef<
  SVGSVGElement,
  LifeBuoyProps
>(function LifeBuoy(
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
        <g clipPath="url(#undefined-clip0_54_1194)">
          <path
            d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM14.6807 16.8018C13.8874 17.2456 12.9736 17.5 12 17.5C11.0261 17.5 10.1118 17.2458 9.31836 16.8018L7.14551 18.9746C8.52213 19.9346 10.1945 20.5 12 20.5C13.8053 20.5 15.477 19.9343 16.8535 18.9746L14.6807 16.8018ZM5.02441 7.14551C4.06465 8.52205 3.5 10.1947 3.5 12C3.5 13.8051 4.06493 15.4771 5.02441 16.8535L7.19727 14.6807C6.75359 13.8875 6.5 12.9735 6.5 12C6.5 11.0262 6.75333 10.1117 7.19727 9.31836L5.02441 7.14551ZM16.8018 9.31836C17.2458 10.1118 17.5 11.0261 17.5 12C17.5 12.9736 17.2456 13.8874 16.8018 14.6807L18.9746 16.8535C19.9343 15.477 20.5 13.8053 20.5 12C20.5 10.1945 19.9346 8.52213 18.9746 7.14551L16.8018 9.31836ZM12 3.5C10.1947 3.5 8.52205 4.06465 7.14551 5.02441L9.31836 7.19727C10.1117 6.75333 11.0262 6.5 12 6.5C12.9735 6.5 13.8875 6.75359 14.6807 7.19727L16.8535 5.02441C15.4771 4.06493 13.8051 3.5 12 3.5Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_54_1194">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
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
          d="M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22ZM4.93 4.93 9.17 9.17M14.83 9.17 19.07 4.93M14.83 14.83 19.07 19.07M9.17 14.83 4.93 19.07"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`LifeBuoy doesn't support ${type}`);
  return null;
});

LifeBuoy.displayName = "LifeBuoy";

LifeBuoy.metadata = {
  name: "LifeBuoy",
  category: "solid/accessibility",
  tags: ["life", "buoy", "icon"],
  description: "LifeBuoy icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LifeBuoy;
