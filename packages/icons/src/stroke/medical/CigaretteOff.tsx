import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CigaretteOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CigaretteOff(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M12 12H3C2.735 12 2.48 12.105 2.293 12.293 2.105 12.48 2 12.735 2 13V15C2 15.265 2.105 15.52 2.293 15.707 2.48 15.895 2.735 16 3 16H16M18 8C18 5.5 16 5.5 16 3M2 2 22 22M21 12C21.265 12 21.52 12.105 21.707 12.293 21.895 12.48 22 12.735 22 13V15C22 15.176 21.954 15.348 21.866 15.5 21.778 15.652 21.652 15.778 21.5 15.866M22 8C22 5.5 20 5.5 20 3M7 12V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CigaretteOff.displayName = "CigaretteOff";

CigaretteOff.metadata = {
  name: "CigaretteOff",
  category: "stroke/medical",
  tags: ["cigarette", "off", "icon"],
  description: "CigaretteOff icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CigaretteOff;
