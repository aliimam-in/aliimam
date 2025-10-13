import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NorthenIreland: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NorthenIreland(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#fff"
      />
      <path
        d="M27.7097 4.07153L16 13.4392L4.29033 4.07153C2.84273 4.33183 1.67993 5.37013 1.22253 6.73873L12.799 15.9999L1.22253 25.2612C1.68003 26.6299 2.84273 27.6682 4.29033 27.9284L16 18.5607L27.7097 27.9284C29.1573 27.6681 30.3201 26.6298 30.7775 25.2612L19.201 16L30.7775 6.73883C30.32 5.37013 29.1573 4.33173 27.7097 4.07153Z"
        fill="#ca0a2b"
      />
    </svg>
  );
});

NorthenIreland.displayName = "NorthenIreland";

NorthenIreland.metadata = {
  name: "NorthenIreland",
  category: "flags/flags",
  tags: ["northen", "ireland", "icon"],
  description: "NorthenIreland icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NorthenIreland;
