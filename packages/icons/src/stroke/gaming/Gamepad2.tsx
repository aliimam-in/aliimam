import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Gamepad2Props extends IconProps {
  type?: "stroke";
}

export const Gamepad2: IconComponent<Gamepad2Props> = React.forwardRef<
  SVGSVGElement,
  Gamepad2Props
>(function Gamepad2(
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
          d="M6 11H10M8 9V13M15 12H15.01M18 10H18.01M17.32 5H6.68C5.69 5 4.736 5.367 4.001 6.03 3.266 6.694 2.803 7.605 2.702 8.59 2.696 8.642 2.692 8.691 2.685 8.742 2.604 9.416 2 14.456 2 16 2 16.796 2.316 17.559 2.879 18.121 3.441 18.684 4.204 19 5 19 6 19 6.5 18.5 7 18L8.414 16.586C8.789 16.211 9.298 16 9.828 16H14.172C14.702 16 15.211 16.211 15.586 16.586L17 18C17.5 18.5 18 19 19 19 19.796 19 20.559 18.684 21.121 18.121 21.684 17.559 22 16.796 22 16 22 14.455 21.396 9.416 21.315 8.742 21.308 8.692 21.304 8.642 21.298 8.591 21.197 7.606 20.734 6.694 19.999 6.031 19.265 5.368 18.31 5 17.32 5Z"
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
          d="M6 11H10M8 9V13M15 12H15.01M18 10H18.01M17.32 5H6.68C5.69 5 4.736 5.367 4.001 6.03 3.266 6.694 2.803 7.605 2.702 8.59 2.696 8.642 2.692 8.691 2.685 8.742 2.604 9.416 2 14.456 2 16 2 16.796 2.316 17.559 2.879 18.121 3.441 18.684 4.204 19 5 19 6 19 6.5 18.5 7 18L8.414 16.586C8.789 16.211 9.298 16 9.828 16H14.172C14.702 16 15.211 16.211 15.586 16.586L17 18C17.5 18.5 18 19 19 19 19.796 19 20.559 18.684 21.121 18.121 21.684 17.559 22 16.796 22 16 22 14.455 21.396 9.416 21.315 8.742 21.308 8.692 21.304 8.642 21.298 8.591 21.197 7.606 20.734 6.694 19.999 6.031 19.265 5.368 18.31 5 17.32 5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Gamepad2 doesn't support ${type}`);
  return null;
});

Gamepad2.displayName = "Gamepad2";

Gamepad2.metadata = {
  name: "Gamepad2",
  category: "stroke/gaming",
  tags: ["gamepad", "icon"],
  description: "Gamepad2 icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gamepad2;
