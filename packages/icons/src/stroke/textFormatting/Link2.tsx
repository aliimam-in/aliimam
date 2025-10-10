import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Link2Props extends IconProps {
  type?: "stroke";
}

export const Link2: IconComponent<Link2Props> = React.forwardRef<
  SVGSVGElement,
  Link2Props
>(function Link2(
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
          d="M9 17H7C5.674 17 4.402 16.473 3.464 15.536 2.527 14.598 2 13.326 2 12 2 10.674 2.527 9.402 3.464 8.464 4.402 7.527 5.674 7 7 7H9M15 7H17C18.326 7 19.598 7.527 20.536 8.464 21.473 9.402 22 10.674 22 12 22 13.326 21.473 14.598 20.536 15.536 19.598 16.473 18.326 17 17 17H15M8 12H16"
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
          d="M9 17H7C5.674 17 4.402 16.473 3.464 15.536 2.527 14.598 2 13.326 2 12 2 10.674 2.527 9.402 3.464 8.464 4.402 7.527 5.674 7 7 7H9M15 7H17C18.326 7 19.598 7.527 20.536 8.464 21.473 9.402 22 10.674 22 12 22 13.326 21.473 14.598 20.536 15.536 19.598 16.473 18.326 17 17 17H15M8 12H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Link2 doesn't support ${type}`);
  return null;
});

Link2.displayName = "Link2";

Link2.metadata = {
  name: "Link2",
  category: "stroke/textFormatting",
  tags: ["link", "icon"],
  description: "Link2 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Link2;
