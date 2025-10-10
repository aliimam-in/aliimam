import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Grid2X2PlusProps extends IconProps {
  type?: "stroke";
}

export const Grid2X2Plus: IconComponent<Grid2X2PlusProps> = React.forwardRef<
  SVGSVGElement,
  Grid2X2PlusProps
>(function Grid2X2Plus(
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
          d="M12 3V20C12 20.265 11.895 20.52 11.707 20.707 11.52 20.895 11.265 21 11 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V11C21 11.265 20.895 11.52 20.707 11.707 20.52 11.895 20.265 12 20 12H3M16 19H22M19 22V16"
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
          d="M12 3V20C12 20.265 11.895 20.52 11.707 20.707 11.52 20.895 11.265 21 11 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V11C21 11.265 20.895 11.52 20.707 11.707 20.52 11.895 20.265 12 20 12H3M16 19H22M19 22V16"
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
          d="M12 3V20C12 20.265 11.895 20.52 11.707 20.707 11.52 20.895 11.265 21 11 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V11C21 11.265 20.895 11.52 20.707 11.707 20.52 11.895 20.265 12 20 12H3M16 19H22M19 22V16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Grid2X2Plus doesn't support ${type}`);
  return null;
});

Grid2X2Plus.displayName = "Grid2X2Plus";

Grid2X2Plus.metadata = {
  name: "Grid2X2Plus",
  category: "stroke/textFormatting",
  tags: ["grid", "plus", "icon"],
  description: "Grid2X2Plus icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Grid2X2Plus;
