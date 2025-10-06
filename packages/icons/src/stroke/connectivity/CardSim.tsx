import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CardSimProps extends IconProps {
  type?: "stroke";
}

export const CardSim: IconComponent<CardSimProps> = React.forwardRef<
  SVGSVGElement,
  CardSimProps
>(function CardSim(
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
          d="M12 14V18M14.172 2C14.702 2 15.211 2.211 15.586 2.586L19.414 6.414C19.789 6.789 20 7.298 20 7.828V20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H6C5.47 22 4.961 21.789 4.586 21.414 4.211 21.039 4 20.53 4 20V4C4 3.47 4.211 2.961 4.586 2.586 4.961 2.211 5.47 2 6 2H14.172ZM8 14H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 10H9C8.44772 10 8 10.4477 8 11V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V11C16 10.4477 15.5523 10 15 10Z"
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
          d="M12 14V18M14.172 2C14.702 2 15.211 2.211 15.586 2.586L19.414 6.414C19.789 6.789 20 7.298 20 7.828V20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H6C5.47 22 4.961 21.789 4.586 21.414 4.211 21.039 4 20.53 4 20V4C4 3.47 4.211 2.961 4.586 2.586 4.961 2.211 5.47 2 6 2H14.172ZM8 14H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 10H9C8.44772 10 8 10.4477 8 11V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V11C16 10.4477 15.5523 10 15 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CardSim doesn't support ${type}`);
  return null;
});

CardSim.displayName = "CardSim";

CardSim.metadata = {
  name: "CardSim",
  category: "stroke/connectivity",
  tags: ["card", "sim", "icon"],
  description: "CardSim icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CardSim;
