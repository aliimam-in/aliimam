import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface InfoProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Info: IconComponent<InfoProps> = React.forwardRef<
  SVGSVGElement,
  InfoProps
>(function Info(
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
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 10.5C11.1716 10.5 10.5 11.1716 10.5 12V16C10.5 16.8284 11.1716 17.5 12 17.5C12.8284 17.5 13.5 16.8284 13.5 16V12C13.5 11.1716 12.8284 10.5 12 10.5ZM12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5H12.0098C12.8382 9.5 13.5098 8.82843 13.5098 8C13.5098 7.17157 12.8382 6.5 12.0098 6.5H12Z"
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
          d="M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22ZM12 16V12M12 8H12.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Info doesn't support ${type}`);
  return null;
});

Info.displayName = "Info";

Info.metadata = {
  name: "Info",
  category: "solid/accessibility",
  tags: ["info", "icon"],
  description: "Info icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Info;
