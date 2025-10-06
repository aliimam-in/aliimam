import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SwitchCamera: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SwitchCamera(
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
        d="M11 19H4C3.47 19 2.961 18.789 2.586 18.414 2.211 18.039 2 17.53 2 17V7C2 6.47 2.211 5.961 2.586 5.586 2.961 5.211 3.47 5 4 5H9M13 5H20C20.53 5 21.039 5.211 21.414 5.586 21.789 5.961 22 6.47 22 7V17C22 17.53 21.789 18.039 21.414 18.414 21.039 18.789 20.53 19 20 19H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.657 15 15 13.657 15 12 15 10.343 13.657 9 12 9 10.343 9 9 10.343 9 12 9 13.657 10.343 15 12 15ZM18 22 15 19 18 16M6 2 9 5 6 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SwitchCamera.displayName = "SwitchCamera";

SwitchCamera.metadata = {
  name: "SwitchCamera",
  category: "stroke/communication",
  tags: ["switch", "camera", "icon"],
  description: "SwitchCamera icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SwitchCamera;
