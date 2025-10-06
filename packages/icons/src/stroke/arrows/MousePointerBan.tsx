import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MousePointerBan: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MousePointerBan(
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
        d="M2.034 2.681C1.998 2.591 1.989 2.492 2.009 2.396 2.028 2.301 2.076 2.213 2.144 2.144 2.213 2.076 2.301 2.028 2.396 2.009 2.492 1.989 2.591 1.998 2.681 2.034L11.681 5.534C11.778 5.572 11.861 5.638 11.918 5.725 11.975 5.812 12.004 5.914 12 6.018 11.997 6.122 11.961 6.222 11.898 6.304 11.834 6.387 11.747 6.447 11.648 6.478L8.204 7.545C8.049 7.593 7.907 7.678 7.792 7.793 7.677 7.908 7.592 8.05 7.544 8.205L6.478 11.648C6.447 11.747 6.387 11.835 6.304 11.898 6.222 11.961 6.122 11.997 6.018 12 5.914 12.004 5.812 11.975 5.725 11.918 5.638 11.861 5.571 11.778 5.534 11.681L2.034 2.681ZM16 22C19.314 22 22 19.314 22 16 22 12.686 19.314 10 16 10 12.686 10 10 12.686 10 16 10 19.314 12.686 22 16 22ZM11.8 11.8 20.2 20.2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MousePointerBan.displayName = "MousePointerBan";

MousePointerBan.metadata = {
  name: "MousePointerBan",
  category: "stroke/arrows",
  tags: ["mouse", "pointer", "ban", "icon"],
  description: "MousePointerBan icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MousePointerBan;
