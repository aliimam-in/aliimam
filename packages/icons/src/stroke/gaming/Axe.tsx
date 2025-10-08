import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Axe: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Axe(
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
          d="M14 12L5.619 20.38C5.42202 20.577 5.18815 20.7334 4.93076 20.84C4.67336 20.9467 4.39748 21.0016 4.11885 21.0017C3.55615 21.0018 3.01646 20.7783 2.6185 20.3805C2.22054 19.9827 1.99692 19.4431 1.99683 18.8804C1.99673 18.3177 2.22018 17.778 2.618 17.38L11 9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15.5C15 15.6326 15.0527 15.7598 15.1465 15.8536C15.2402 15.9473 15.3674 16 15.5 16C16.3536 16 17.1988 15.8319 17.9875 15.5052C18.7761 15.1786 19.4926 14.6998 20.0962 14.0962C20.6998 13.4926 21.1786 12.7761 21.5052 11.9875C21.8319 11.1988 22 10.3536 22 9.50002C22 9.36741 21.9473 9.24023 21.8536 9.14646C21.7598 9.0527 21.6326 9.00002 21.5 9.00002H19.828C19.2976 8.9999 18.789 8.78912 18.414 8.41402L13.352 3.35202C13.126 3.12608 12.8196 2.99915 12.5 2.99915C12.1805 2.99915 11.874 3.12608 11.648 3.35202L9.35202 5.64802C9.12608 5.87399 8.99915 6.18046 8.99915 6.50002C8.99915 6.81957 9.12608 7.12604 9.35202 7.35202L14.414 12.414C14.7891 12.789 14.9999 13.2976 15 13.828V15.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Axe.displayName = "Axe";

Axe.metadata = {
  name: "Axe",
  category: "stroke/gaming",
  tags: ["axe", "icon"],
  description: "Axe icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Axe;
