import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MergeProps extends IconProps {
  type?: "stroke";
}

export const Merge: IconComponent<MergeProps> = React.forwardRef<
  SVGSVGElement,
  MergeProps
>(function Merge(
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
          d="M8 6L12 2L16 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2V12.3C12.006 12.833 11.905 13.361 11.704 13.854 11.503 14.347 11.205 14.795 10.828 15.172L4 22M20 22 15 17"
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
          d="M8 6L12 2L16 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2V12.3C12.006 12.833 11.905 13.361 11.704 13.854 11.503 14.347 11.205 14.795 10.828 15.172L4 22M20 22 15 17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Merge doesn't support ${type}`);
  return null;
});

Merge.displayName = "Merge";

Merge.metadata = {
  name: "Merge",
  category: "stroke/codingDevelopment",
  tags: ["merge", "icon"],
  description: "Merge icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Merge;
