import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignCenterVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignCenterVertical(
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
        d="M12 2V22M8 10H4C3.47 10 2.961 9.789 2.586 9.414 2.211 9.039 2 8.53 2 8V6C2 4.9 2.9 4 4 4H8M16 10H20C20.53 10 21.039 9.789 21.414 9.414 21.789 9.039 22 8.53 22 8V6C22 5.47 21.789 4.961 21.414 4.586 21.039 4.211 20.53 4 20 4H16M8 20H7C6.47 20 5.961 19.789 5.586 19.414 5.211 19.039 5 18.53 5 18V16C5 14.9 5.9 14 7 14H8M16 14H17C17.53 14 18.039 14.211 18.414 14.586 18.789 14.961 19 15.47 19 16V18C19 18.53 18.789 19.039 18.414 19.414 18.039 19.789 17.53 20 17 20H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignCenterVertical.displayName = "AlignCenterVertical";

AlignCenterVertical.metadata = {
  name: "AlignCenterVertical",
  category: "stroke/layout",
  tags: ["align", "center", "vertical", "icon"],
  description: "AlignCenterVertical icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignCenterVertical;
