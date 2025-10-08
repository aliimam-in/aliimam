import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface EllipsisProps extends IconProps {
  type?: "stroke";
}

export const Ellipsis: IconComponent<EllipsisProps> = React.forwardRef<
  SVGSVGElement,
  EllipsisProps
>(function Ellipsis(
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
          d="M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13ZM19 13C19.552 13 20 12.552 20 12 20 11.448 19.552 11 19 11 18.448 11 18 11.448 18 12 18 12.552 18.448 13 19 13ZM5 13C5.552 13 6 12.552 6 12 6 11.448 5.552 11 5 11 4.448 11 4 11.448 4 12 4 12.552 4.448 13 5 13Z"
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
          d="M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13ZM19 13C19.552 13 20 12.552 20 12 20 11.448 19.552 11 19 11 18.448 11 18 11.448 18 12 18 12.552 18.448 13 19 13ZM5 13C5.552 13 6 12.552 6 12 6 11.448 5.552 11 5 11 4.448 11 4 11.448 4 12 4 12.552 4.448 13 5 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Ellipsis doesn't support ${type}`);
  return null;
});

Ellipsis.displayName = "Ellipsis";

Ellipsis.metadata = {
  name: "Ellipsis",
  category: "stroke/layout",
  tags: ["ellipsis", "icon"],
  description: "Ellipsis icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipsis;
