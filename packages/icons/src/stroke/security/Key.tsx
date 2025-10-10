import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface KeyProps extends IconProps {
  type?: "stroke";
}

export const Key: IconComponent<KeyProps> = React.forwardRef<
  SVGSVGElement,
  KeyProps
>(function Key(
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
          d="M15.5 7.5 17.8 9.8C17.987 9.983 18.238 10.086 18.5 10.086 18.762 10.086 19.013 9.983 19.2 9.8L21.3 7.7C21.483 7.513 21.586 7.262 21.586 7 21.586 6.738 21.483 6.487 21.3 6.3L19 4M21 2 11.4 11.6M7.5 21C10.538 21 13 18.538 13 15.5 13 12.462 10.538 10 7.5 10 4.462 10 2 12.462 2 15.5 2 18.538 4.462 21 7.5 21Z"
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
          d="M15.5 7.5 17.8 9.8C17.987 9.983 18.238 10.086 18.5 10.086 18.762 10.086 19.013 9.983 19.2 9.8L21.3 7.7C21.483 7.513 21.586 7.262 21.586 7 21.586 6.738 21.483 6.487 21.3 6.3L19 4M21 2 11.4 11.6M7.5 21C10.538 21 13 18.538 13 15.5 13 12.462 10.538 10 7.5 10 4.462 10 2 12.462 2 15.5 2 18.538 4.462 21 7.5 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Key doesn't support ${type}`);
  return null;
});

Key.displayName = "Key";

Key.metadata = {
  name: "Key",
  category: "stroke/security",
  tags: ["key", "icon"],
  description: "Key icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Key;
