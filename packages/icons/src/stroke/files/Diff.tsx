import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DiffProps extends IconProps {
  type?: "stroke";
}

export const Diff: IconComponent<DiffProps> = React.forwardRef<
  SVGSVGElement,
  DiffProps
>(function Diff(
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
          d="M12 3V17M5 10H19M5 21H19"
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
          d="M12 3V17M5 10H19M5 21H19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Diff doesn't support ${type}`);
  return null;
});

Diff.displayName = "Diff";

Diff.metadata = {
  name: "Diff",
  category: "stroke/files",
  tags: ["diff", "icon"],
  description: "Diff icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Diff;
