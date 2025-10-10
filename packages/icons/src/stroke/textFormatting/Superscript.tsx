import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Superscript: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Superscript(
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
        d="M4 19 12 11M12 19 4 11M20 12H16C16 10.5 16.442 10 17.5 9.5 18.558 9 20 8.334 20 7.002 20 6.53 19.83 6.072 19.516 5.712 19.196 5.35 18.761 5.109 18.285 5.03 17.808 4.95 17.319 5.037 16.899 5.276 16.479 5.515 16.161 5.89 16 6.336"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Superscript.displayName = "Superscript";

Superscript.metadata = {
  name: "Superscript",
  category: "stroke/textFormatting",
  tags: ["superscript", "icon"],
  description: "Superscript icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Superscript;
