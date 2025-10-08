import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Plug2Props extends IconProps {
  type?: "stroke";
}

export const Plug2: IconComponent<Plug2Props> = React.forwardRef<
  SVGSVGElement,
  Plug2Props
>(function Plug2(
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
          d="M9 2V8M15 2V8M12 17V22M5 8H19M6 11V8H18V11C18 12.591 17.368 14.117 16.243 15.243 15.117 16.368 13.591 17 12 17 10.409 17 8.883 16.368 7.757 15.243 6.632 14.117 6 12.591 6 11Z"
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
          d="M9 2V8M15 2V8M12 17V22M5 8H19M6 11V8H18V11C18 12.591 17.368 14.117 16.243 15.243 15.117 16.368 13.591 17 12 17 10.409 17 8.883 16.368 7.757 15.243 6.632 14.117 6 12.591 6 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Plug2 doesn't support ${type}`);
  return null;
});

Plug2.displayName = "Plug2";

Plug2.metadata = {
  name: "Plug2",
  category: "stroke/devices",
  tags: ["plug", "icon"],
  description: "Plug2 icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Plug2;
