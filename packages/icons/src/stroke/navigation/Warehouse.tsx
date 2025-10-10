import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WarehouseProps extends IconProps {
  type?: "stroke";
}

export const Warehouse: IconComponent<WarehouseProps> = React.forwardRef<
  SVGSVGElement,
  WarehouseProps
>(function Warehouse(
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
          d="M18 21V10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9H7C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 19C22 19.53 21.789 20.039 21.414 20.414 21.039 20.789 20.53 21 20 21H4C3.47 21 2.961 20.789 2.586 20.414 2.211 20.039 2 19.53 2 19V8C2 7.623 2.106 7.254 2.306 6.935 2.506 6.616 2.793 6.36 3.132 6.197L11.082 2.223C11.366 2.076 11.681 2 12.001 2 12.32 2 12.635 2.076 12.919 2.223L20.867 6.197C21.207 6.36 21.493 6.616 21.693 6.935 21.894 7.254 22 7.623 22 8V19ZM6 13H18M6 17H18"
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
          d="M18 21V10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9H7C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 19C22 19.531 21.789 20.039 21.414 20.414 21.039 20.789 20.53 21 20 21H4C3.47 21 2.961 20.789 2.586 20.414 2.211 20.039 2 19.531 2 19V8C2 7.623 2.106 7.254 2.306 6.935 2.506 6.616 2.793 6.36 3.132 6.197L11.082 2.223C11.366 2.076 11.681 2 12.001 2 12.32 2 12.635 2.076 12.919 2.223L20.867 6.197C21.207 6.36 21.493 6.616 21.693 6.935 21.894 7.254 22 7.623 22 8V19ZM6 13H18M6 17H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Warehouse doesn't support ${type}`);
  return null;
});

Warehouse.displayName = "Warehouse";

Warehouse.metadata = {
  name: "Warehouse",
  category: "stroke/navigation",
  tags: ["warehouse", "icon"],
  description: "Warehouse icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Warehouse;
