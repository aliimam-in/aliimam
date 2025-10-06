import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Volume2Props extends IconProps {
  type?: "stroke";
}

export const Volume2: IconComponent<Volume2Props> = React.forwardRef<
  SVGSVGElement,
  Volume2Props
>(function Volume2(
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
          d="M11 4.702C11 4.563 10.958 4.427 10.881 4.311 10.803 4.195 10.693 4.105 10.565 4.052 10.436 3.998 10.294 3.984 10.158 4.012 10.021 4.039 9.896 4.106 9.797 4.204L6.413 7.587C6.282 7.718 6.127 7.823 5.956 7.893 5.785 7.964 5.601 8.001 5.416 8H3C2.735 8 2.48 8.105 2.293 8.293 2.105 8.48 2 8.735 2 9V15C2 15.265 2.105 15.52 2.293 15.707 2.48 15.895 2.735 16 3 16H5.416C5.601 16 5.785 16.036 5.956 16.107 6.127 16.177 6.282 16.282 6.413 16.413L9.796 19.797C9.895 19.896 10.02 19.963 10.157 19.99 10.294 20.018 10.436 20.004 10.565 19.95 10.694 19.897 10.804 19.806 10.882 19.69 10.959 19.574 11 19.438 11 19.298V4.702ZM16 9C16.649 9.865 17 10.918 17 12 17 13.082 16.649 14.135 16 15M19.364 18.364C20.2 17.528 20.863 16.536 21.315 15.444 21.767 14.352 22 13.182 22 12 22 10.818 21.767 9.648 21.315 8.556 20.863 7.464 20.2 6.472 19.364 5.636"
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
          d="M11 4.702C11 4.563 10.958 4.427 10.881 4.311 10.803 4.195 10.693 4.105 10.565 4.052 10.436 3.998 10.294 3.984 10.158 4.012 10.021 4.039 9.896 4.106 9.797 4.204L6.413 7.587C6.282 7.718 6.127 7.823 5.956 7.893 5.785 7.964 5.601 8.001 5.416 8H3C2.735 8 2.48 8.105 2.293 8.293 2.105 8.48 2 8.735 2 9V15C2 15.265 2.105 15.52 2.293 15.707 2.48 15.895 2.735 16 3 16H5.416C5.601 16 5.785 16.036 5.956 16.107 6.127 16.177 6.282 16.282 6.413 16.413L9.796 19.797C9.895 19.896 10.02 19.963 10.157 19.99 10.294 20.018 10.436 20.004 10.565 19.95 10.694 19.897 10.804 19.806 10.882 19.69 10.959 19.574 11 19.438 11 19.298V4.702ZM16 9C16.649 9.865 17 10.918 17 12 17 13.082 16.649 14.135 16 15M19.364 18.364C20.2 17.528 20.863 16.536 21.315 15.444 21.767 14.352 22 13.182 22 12 22 10.818 21.767 9.648 21.315 8.556 20.863 7.464 20.2 6.472 19.364 5.636"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Volume2 doesn't support ${type}`);
  return null;
});

Volume2.displayName = "Volume2";

Volume2.metadata = {
  name: "Volume2",
  category: "stroke/connectivity",
  tags: ["volume", "icon"],
  description: "Volume2 icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Volume2;
