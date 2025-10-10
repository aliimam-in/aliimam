import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GavelProps extends IconProps {
  type?: "stroke";
}

export const Gavel: IconComponent<GavelProps> = React.forwardRef<
  SVGSVGElement,
  GavelProps
>(function Gavel(
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
          d="M14 13 5.619 21.38C5.422 21.577 5.188 21.733 4.931 21.84 4.673 21.947 4.397 22.002 4.119 22.002 3.556 22.002 3.016 21.778 2.618 21.381 2.22 20.983 1.997 20.443 1.997 19.88 1.996 19.318 2.22 18.778 2.618 18.38L11.002 9.999M16 16 22 10M21.5 10.5 13.5 2.5M8 8 14 2M8.5 7.5 16.5 15.5"
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
          d="M14 13 5.619 21.38C5.422 21.577 5.188 21.733 4.931 21.84 4.673 21.947 4.397 22.002 4.119 22.002 3.556 22.002 3.016 21.778 2.619 21.381 2.221 20.983 1.997 20.443 1.997 19.88 1.997 19.318 2.22 18.778 2.618 18.38L11.002 9.999M16 16 22 10M21.5 10.5 13.5 2.5M8 8 14 2M8.5 7.5 16.5 15.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Gavel doesn't support ${type}`);
  return null;
});

Gavel.displayName = "Gavel";

Gavel.metadata = {
  name: "Gavel",
  category: "stroke/tools",
  tags: ["gavel", "icon"],
  description: "Gavel icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gavel;
