import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FlaskRound: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FlaskRound(
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
        d="M10 2V8.292C8.389 8.772 7.004 9.817 6.099 11.234 5.195 12.651 4.831 14.347 5.073 16.011 5.316 17.675 6.15 19.195 7.421 20.295 8.693 21.395 10.319 22 12 22 13.681 22 15.307 21.395 16.579 20.295 17.85 19.195 18.684 17.675 18.927 16.011 19.169 14.347 18.805 12.651 17.901 11.234 16.996 9.817 15.611 8.772 14 8.292V2M5 15H19M8.5 2H15.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FlaskRound.displayName = "FlaskRound";

FlaskRound.metadata = {
  name: "FlaskRound",
  category: "stroke/gaming",
  tags: ["flask", "round", "icon"],
  description: "FlaskRound icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlaskRound;
