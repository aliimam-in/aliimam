import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UndoDotProps extends IconProps {
  type?: "stroke";
}

export const UndoDot: IconComponent<UndoDotProps> = React.forwardRef<
  SVGSVGElement,
  UndoDotProps
>(function UndoDot(
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
          d="M21 17C20.9984 15.2633 20.4944 13.5642 19.5487 12.1076C18.6031 10.6509 17.2562 9.49898 15.6705 8.7907C14.0848 8.08243 12.3281 7.84806 10.6121 8.11587C8.89623 8.38368 7.29445 9.14222 6 10.3L3 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7V13H9M12 18C12.552 18 13 17.552 13 17 13 16.448 12.552 16 12 16 11.448 16 11 16.448 11 17 11 17.552 11.448 18 12 18Z"
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
          d="M21 17C20.9984 15.2633 20.4944 13.5642 19.5487 12.1075C18.6031 10.6509 17.2562 9.49895 15.6705 8.79067C14.0848 8.0824 12.3281 7.84803 10.6121 8.11584C8.89623 8.38365 7.29445 9.14219 6 10.3L3 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7V13H9M12 18C12.552 18 13 17.552 13 17 13 16.448 12.552 16 12 16 11.448 16 11 16.448 11 17 11 17.552 11.448 18 12 18Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`UndoDot doesn't support ${type}`);
  return null;
});

UndoDot.displayName = "UndoDot";

UndoDot.metadata = {
  name: "UndoDot",
  category: "stroke/textFormatting",
  tags: ["undo", "dot", "icon"],
  description: "UndoDot icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UndoDot;
