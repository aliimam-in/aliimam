import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle(
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
        d="M13.7299 4C13.5541 3.69692 13.3017 3.44535 12.9981 3.27047C12.6945 3.09559 12.3503 3.00354 11.9999 3.00354C11.6495 3.00354 11.3053 3.09559 11.0017 3.27047C10.6981 3.44535 10.4457 3.69692 10.2699 4L2.2699 18C2.09445 18.3039 2.00204 18.6486 2.00195 18.9995C2.00186 19.3504 2.0941 19.6951 2.26939 19.9991C2.44468 20.3031 2.69687 20.5556 3.00062 20.7313C3.30437 20.907 3.649 20.9996 3.9999 21H19.9999C20.3508 20.9996 20.6954 20.907 20.9992 20.7313C21.3029 20.5556 21.5551 20.3031 21.7304 19.9991C21.9057 19.6951 21.9979 19.3504 21.9979 18.9995C21.9978 18.6486 21.9054 18.3039 21.7299 18L13.7299 4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Triangle.displayName = "Triangle";

Triangle.metadata = {
  name: "Triangle",
  category: "stroke/shapes",
  tags: ["triangle", "icon"],
  description: "Triangle icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle;
