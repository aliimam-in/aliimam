import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BombProps extends IconProps {
  type?: "stroke";
}

export const Bomb: IconComponent<BombProps> = React.forwardRef<
  SVGSVGElement,
  BombProps
>(function Bomb(
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
          d="M11 22C15.9706 22 20 17.9706 20 13C20 8.02944 15.9706 4 11 4C6.02944 4 2 8.02944 2 13C2 17.9706 6.02944 22 11 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.35 4.65 16.3 2.7C16.752 2.251 17.363 1.998 18 1.998 18.637 1.998 19.249 2.251 19.7 2.7L21.3 4.3C21.524 4.523 21.701 4.788 21.823 5.08 21.944 5.371 22.006 5.684 22.006 6 22.006 6.316 21.944 6.629 21.823 6.92 21.701 7.212 21.524 7.477 21.3 7.7L19.35 9.65M22 2 20.5 3.5"
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
          d="M11 22C15.9706 22 20 17.9706 20 13C20 8.02944 15.9706 4 11 4C6.02944 4 2 8.02944 2 13C2 17.9706 6.02944 22 11 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.35 4.65 16.3 2.7C16.752 2.251 17.363 1.998 18 1.998 18.637 1.998 19.249 2.251 19.7 2.7L21.3 4.3C21.524 4.523 21.701 4.788 21.823 5.08 21.944 5.371 22.006 5.684 22.006 6 22.006 6.316 21.944 6.629 21.823 6.92 21.701 7.212 21.524 7.477 21.3 7.7L19.35 9.65M22 2 20.5 3.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Bomb doesn't support ${type}`);
  return null;
});

Bomb.displayName = "Bomb";

Bomb.metadata = {
  name: "Bomb",
  category: "stroke/security",
  tags: ["bomb", "icon"],
  description: "Bomb icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bomb;
