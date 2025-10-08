import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RulerProps extends IconProps {
  type?: "stroke";
}

export const Ruler: IconComponent<RulerProps> = React.forwardRef<
  SVGSVGElement,
  RulerProps
>(function Ruler(
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
          d="M21.3 15.3C21.524 15.523 21.701 15.788 21.823 16.08 21.944 16.371 22.006 16.684 22.006 17 22.006 17.316 21.944 17.629 21.823 17.92 21.701 18.212 21.524 18.477 21.3 18.7L18.7 21.3C18.477 21.524 18.212 21.701 17.92 21.822 17.629 21.944 17.316 22.006 17 22.006 16.684 22.006 16.371 21.944 16.08 21.822 15.788 21.701 15.523 21.524 15.3 21.3L2.7 8.7C2.251 8.248 1.998 7.637 1.998 7 1.998 6.363 2.251 5.752 2.7 5.3L5.3 2.7C5.752 2.251 6.363 1.998 7 1.998 7.637 1.998 8.248 2.251 8.7 2.7L21.3 15.3ZM14.5 12.5 16.5 10.5M11.5 9.5 13.5 7.5M8.5 6.5 10.5 4.5M17.5 15.5 19.5 13.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
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
          d="M21.3 15.3C21.524 15.523 21.701 15.788 21.823 16.08 21.944 16.371 22.006 16.684 22.006 17 22.006 17.316 21.944 17.629 21.823 17.92 21.701 18.212 21.524 18.477 21.3 18.7L18.7 21.3C18.477 21.524 18.212 21.701 17.92 21.823 17.629 21.944 17.316 22.006 17 22.006 16.684 22.006 16.371 21.944 16.08 21.823 15.788 21.701 15.523 21.524 15.3 21.3L2.7 8.7C2.251 8.248 1.998 7.637 1.998 7 1.998 6.363 2.251 5.752 2.7 5.3L5.3 2.7C5.752 2.251 6.363 1.998 7 1.998 7.637 1.998 8.248 2.251 8.7 2.7L21.3 15.3ZM14.5 12.5 16.5 10.5M11.5 9.5 13.5 7.5M8.5 6.5 10.5 4.5M17.5 15.5 19.5 13.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Ruler doesn't support ${type}`);
  return null;
});

Ruler.displayName = "Ruler";

Ruler.metadata = {
  name: "Ruler",
  category: "stroke/layout",
  tags: ["ruler", "icon"],
  description: "Ruler icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ruler;
