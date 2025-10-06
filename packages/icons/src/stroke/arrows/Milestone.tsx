import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Milestone: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Milestone(
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
        d="M12 13V21M12 3V6M4 6C3.735 6 3.48 6.105 3.293 6.293 3.105 6.48 3 6.735 3 7V12C3 12.265 3.105 12.52 3.293 12.707 3.48 12.895 3.735 13 4 13H17C17.412 13 17.815 12.873 18.152 12.635L21.576 10.318C21.707 10.226 21.814 10.103 21.888 9.961 21.962 9.819 22 9.661 22 9.501 22 9.34 21.962 9.182 21.888 9.04 21.814 8.898 21.707 8.775 21.576 8.683L18.152 6.365C17.815 6.127 17.412 6 17 6H4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Milestone.displayName = "Milestone";

Milestone.metadata = {
  name: "Milestone",
  category: "stroke/arrows",
  tags: ["milestone", "icon"],
  description: "Milestone icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Milestone;
