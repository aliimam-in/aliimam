import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FoldVerticalProps extends IconProps {
  type?: "stroke";
}

export const FoldVertical: IconComponent<FoldVerticalProps> = React.forwardRef<
  SVGSVGElement,
  FoldVerticalProps
>(function FoldVertical(
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
          d="M12 22V16M12 8V2M4 12H2M10 12H8M16 12H14M22 12H20M15 19 12 16 9 19M15 5 12 8 9 5"
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
          d="M12 22V16M12 8V2M4 12H2M10 12H8M16 12H14M22 12H20M15 19 12 16 9 19M15 5 12 8 9 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FoldVertical doesn't support ${type}`);
  return null;
});

FoldVertical.displayName = "FoldVertical";

FoldVertical.metadata = {
  name: "FoldVertical",
  category: "stroke/layout",
  tags: ["fold", "vertical", "icon"],
  description: "FoldVertical icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FoldVertical;
