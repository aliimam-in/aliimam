import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Trash2Props extends IconProps {
  type?: "stroke";
}

export const Trash2: IconComponent<Trash2Props> = React.forwardRef<
  SVGSVGElement,
  Trash2Props
>(function Trash2(
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
          d="M10 11V17M14 11V17M19 6V20C19 20.53 18.789 21.039 18.414 21.414 18.039 21.789 17.53 22 17 22H7C6.47 22 5.961 21.789 5.586 21.414 5.211 21.039 5 20.53 5 20V6M3 6H21M8 6V4C8 3.47 8.211 2.961 8.586 2.586 8.961 2.211 9.47 2 10 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V6"
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
          d="M10 11V17M14 11V17M19 6V20C19 20.53 18.789 21.039 18.414 21.414 18.039 21.789 17.53 22 17 22H7C6.47 22 5.961 21.789 5.586 21.414 5.211 21.039 5 20.53 5 20V6M3 6H21M8 6V4C8 3.47 8.211 2.961 8.586 2.586 8.961 2.211 9.47 2 10 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Trash2 doesn't support ${type}`);
  return null;
});

Trash2.displayName = "Trash2";

Trash2.metadata = {
  name: "Trash2",
  category: "stroke/mail",
  tags: ["trash", "icon"],
  description: "Trash2 icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Trash2;
