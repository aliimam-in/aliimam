import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WandProps extends IconProps {
  type?: "stroke";
}

export const Wand: IconComponent<WandProps> = React.forwardRef<
  SVGSVGElement,
  WandProps
>(function Wand(
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
          d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8 19 13M15 9H15.01M17.8 6.2 19 5M3 21 12 12M12.2 6.2 11 5"
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
          d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8 19 13M15 9H15.01M17.8 6.2 19 5M3 21 12 12M12.2 6.2 11 5"
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
          d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8 19 13M15 9H15.01M17.8 6.2 19 5M3 21 12 12M12.2 6.2 11 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Wand doesn't support ${type}`);
  return null;
});

Wand.displayName = "Wand";

Wand.metadata = {
  name: "Wand",
  category: "stroke/photography",
  tags: ["wand", "icon"],
  description: "Wand icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wand;
