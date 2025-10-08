import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MoonStarProps extends IconProps {
  type?: "solid" | "stroke";
}

export const MoonStar: IconComponent<MoonStarProps> = React.forwardRef<
  SVGSVGElement,
  MoonStarProps
>(function MoonStar(
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
          d="M20 1.5C20.828 1.5 21.5 2.172 21.5 3V3.5H22C22.828 3.5 23.5 4.172 23.5 5 23.5 5.828 22.828 6.5 22 6.5H21.5V7C21.5 7.828 20.828 8.5 20 8.5 19.172 8.5 18.5 7.828 18.5 7V6.5H18C17.172 6.5 16.5 5.828 16.5 5 16.5 4.172 17.172 3.5 18 3.5H18.5V3C18.5 2.172 19.172 1.5 20 1.5ZM20.985 12.486C20.891 14.222 20.297 15.894 19.273 17.299 18.25 18.705 16.841 19.784 15.217 20.406 13.593 21.027 11.824 21.166 10.124 20.804 8.423 20.441 6.864 19.595 5.634 18.365 4.405 17.136 3.558 15.577 3.196 13.876 2.833 12.176 2.971 10.407 3.593 8.783 4.215 7.159 5.293 5.75 6.699 4.726 8.104 3.703 9.776 3.108 11.512 3.014 11.917 2.992 12.129 3.474 11.914 3.817 11.195 4.968 10.887 6.328 11.041 7.676 11.194 9.024 11.8 10.28 12.759 11.24 13.719 12.199 14.975 12.805 16.323 12.959 17.671 13.112 19.031 12.804 20.182 12.085 20.526 11.87 21.007 12.081 20.985 12.486Z"
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
          d="M18 5H22M20 3V7M20.985 12.486C20.891 14.222 20.297 15.894 19.273 17.299 18.25 18.705 16.841 19.784 15.217 20.406 13.593 21.027 11.824 21.166 10.124 20.804 8.423 20.442 6.864 19.595 5.634 18.365 4.405 17.136 3.558 15.577 3.196 13.876 2.833 12.176 2.971 10.407 3.593 8.783 4.215 7.159 5.293 5.75 6.699 4.726 8.104 3.703 9.776 3.108 11.512 3.014 11.917 2.992 12.129 3.474 11.914 3.817 11.195 4.968 10.887 6.328 11.041 7.676 11.194 9.024 11.8 10.28 12.759 11.24 13.719 12.199 14.975 12.805 16.323 12.959 17.671 13.112 19.031 12.804 20.182 12.085 20.526 11.87 21.007 12.081 20.985 12.486Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MoonStar doesn't support ${type}`);
  return null;
});

MoonStar.displayName = "MoonStar";

MoonStar.metadata = {
  name: "MoonStar",
  category: "solid/accessibility",
  tags: ["moon", "star", "icon"],
  description: "MoonStar icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MoonStar;
