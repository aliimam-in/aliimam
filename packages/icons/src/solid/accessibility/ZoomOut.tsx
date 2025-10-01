import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ZoomOutProps extends IconProps {
  type?: "solid" | "stroke";
}

export const ZoomOut: IconComponent<ZoomOutProps> = React.forwardRef<
  SVGSVGElement,
  ZoomOutProps
>(function ZoomOut(
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
  if (type === "solid") {
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
          d="M11 1.5C16.2467 1.5 20.5 5.75329 20.5 11C20.5 13.0816 19.8278 15.005 18.6924 16.5703L22.0615 19.9395C22.6468 20.5253 22.6471 21.4759 22.0615 22.0615C21.4759 22.6472 20.5253 22.6468 19.9395 22.0615L16.5703 18.6924C15.005 19.8278 13.0816 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5ZM11 4.5C7.41015 4.5 4.5 7.41015 4.5 11C4.5 14.5899 7.41015 17.5 11 17.5C12.7462 17.5 14.3302 16.8099 15.498 15.6895C15.5267 15.6551 15.5576 15.6221 15.5898 15.5898C15.6221 15.5576 15.6551 15.5268 15.6895 15.498C16.8099 14.3302 17.5 12.7462 17.5 11C17.5 7.41015 14.5899 4.5 11 4.5ZM14 9.5C14.8284 9.5 15.5 10.1716 15.5 11C15.5 11.8284 14.8284 12.5 14 12.5H8C7.17157 12.5 6.5 11.8284 6.5 11C6.5 10.1716 7.17157 9.5 8 9.5H14Z"
          fill="currentColor"
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
          d="M11 19C15.418 19 19 15.418 19 11 19 6.582 15.418 3 11 3 6.582 3 3 6.582 3 11 3 15.418 6.582 19 11 19ZM21 21 16.65 16.65M8 11H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ZoomOut doesn't support ${type}`);
  return null;
});

ZoomOut.displayName = "ZoomOut";

ZoomOut.metadata = {
  name: "ZoomOut",
  category: "solid/accessibility",
  tags: ["zoom", "out", "icon"],
  description: "ZoomOut icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ZoomOut;
