import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SmartphoneProps extends IconProps {
  type?: "stroke";
}

export const Smartphone: IconComponent<SmartphoneProps> = React.forwardRef<
  SVGSVGElement,
  SmartphoneProps
>(function Smartphone(
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
          d="M17 2H7C5.895 2 5 2.895 5 4V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V4C19 2.895 18.105 2 17 2ZM12 18H12.01"
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
          d="M17 2H7C5.895 2 5 2.895 5 4V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V4C19 2.895 18.105 2 17 2ZM12 18H12.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Smartphone doesn't support ${type}`);
  return null;
});

Smartphone.displayName = "Smartphone";

Smartphone.metadata = {
  name: "Smartphone",
  category: "stroke/devices",
  tags: ["smartphone", "icon"],
  description: "Smartphone icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Smartphone;
