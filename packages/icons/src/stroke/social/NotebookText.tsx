import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface NotebookTextProps extends IconProps {
  type?: "stroke";
}

export const NotebookText: IconComponent<NotebookTextProps> = React.forwardRef<
  SVGSVGElement,
  NotebookTextProps
>(function NotebookText(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M2 6H6M2 10H6M2 14H6M2 18H6M18 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V4C20 2.895 19.105 2 18 2ZM9.5 8H14.5M9.5 12H16M9.5 16H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M2 6H6M2 10H6M2 14H6M2 18H6M18 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V4C20 2.895 19.105 2 18 2ZM9.5 8H14.5M9.5 12H16M9.5 16H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`NotebookText doesn't support ${type}`);
  return null;
});

NotebookText.displayName = "NotebookText";

NotebookText.metadata = {
  name: "NotebookText",
  category: "stroke/social",
  tags: ["notebook", "text", "icon"],
  description: "NotebookText icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NotebookText;
