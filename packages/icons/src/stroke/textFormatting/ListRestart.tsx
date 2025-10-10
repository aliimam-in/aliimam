import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ListRestartProps extends IconProps {
  type?: "stroke";
}

export const ListRestart: IconComponent<ListRestartProps> = React.forwardRef<
  SVGSVGElement,
  ListRestartProps
>(function ListRestart(
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
          d="M21 5H3M7 12H3M7 19H3M12 18C12.63 18.84 13.508 19.46 14.509 19.773 15.511 20.086 16.586 20.075 17.581 19.743 18.577 19.412 19.443 18.775 20.056 17.924 20.67 17.072 21 16.049 21 15 21 13.807 20.526 12.662 19.682 11.818 18.838 10.974 17.694 10.5 16.5 10.5 15.17 10.5 13.96 11.04 13.09 11.91L11 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 10V14H15"
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
          d="M21 5H3M7 12H3M7 19H3M12 18C12.63 18.84 13.508 19.46 14.509 19.773 15.511 20.086 16.586 20.075 17.581 19.743 18.577 19.412 19.443 18.775 20.056 17.924 20.67 17.072 21 16.049 21 15 21 13.807 20.526 12.662 19.682 11.818 18.838 10.974 17.694 10.5 16.5 10.5 15.17 10.5 13.96 11.04 13.09 11.91L11 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 10V14H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ListRestart doesn't support ${type}`);
  return null;
});

ListRestart.displayName = "ListRestart";

ListRestart.metadata = {
  name: "ListRestart",
  category: "stroke/textFormatting",
  tags: ["list", "restart", "icon"],
  description: "ListRestart icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListRestart;
