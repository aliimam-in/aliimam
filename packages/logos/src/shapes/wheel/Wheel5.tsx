import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wheel5: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wheel5(
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
          d="M12.96 0H11.04V9.68238L4.1935 2.83588L2.83586 4.19353L9.68233 11.04H0V12.96H9.68235L2.83588 19.8065L4.19353 21.1641L11.04 14.3176V24H12.96V14.3177L19.8064 21.1641L21.1641 19.8064L14.3176 12.96H24V11.04H14.3176L21.1641 4.19355L19.8064 2.83591L12.96 9.68235V0Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Wheel5.displayName = "Wheel5";

Wheel5.metadata = {
  name: "Wheel5",
  category: "shapes/wheel",
  tags: ["wheel", "icon"],
  description: "Wheel5 icon from shapes/wheel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wheel5;
