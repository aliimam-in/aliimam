import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TwitchProps extends IconProps {
  type?: "stroke";
}

export const Twitch: IconComponent<TwitchProps> = React.forwardRef<
  SVGSVGElement,
  TwitchProps
>(function Twitch(
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
          d="M11 11V7M16 11V7M21 2H3V18H8V22L12 18H17L21 14V2Z"
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
          d="M11 11V7M16 11V7M21 2H3V18H8V22L12 18H17L21 14V2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Twitch doesn't support ${type}`);
  return null;
});

Twitch.displayName = "Twitch";

Twitch.metadata = {
  name: "Twitch",
  category: "stroke/social",
  tags: ["twitch", "icon"],
  description: "Twitch icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Twitch;
