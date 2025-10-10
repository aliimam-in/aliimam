import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BoomBoxProps extends IconProps {
  type?: "stroke";
}

export const BoomBox: IconComponent<BoomBoxProps> = React.forwardRef<
  SVGSVGElement,
  BoomBoxProps
>(function BoomBox(
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
          d="M4 9V5C4 4.47 4.211 3.961 4.586 3.586 4.961 3.211 5.47 3 6 3H18C18.53 3 19.039 3.211 19.414 3.586 19.789 3.961 20 4.47 20 5V9M8 8V9M12 8V9M16 8V9M20 9H4C2.895 9 2 9.895 2 11V19C2 20.105 2.895 21 4 21H20C21.105 21 22 20.105 22 19V11C22 9.895 21.105 9 20 9Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 17C9.105 17 10 16.105 10 15 10 13.895 9.105 13 8 13 6.895 13 6 13.895 6 15 6 16.105 6.895 17 8 17ZM16 17C17.105 17 18 16.105 18 15 18 13.895 17.105 13 16 13 14.895 13 14 13.895 14 15 14 16.105 14.895 17 16 17Z"
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
          d="M4 9V5C4 4.47 4.211 3.961 4.586 3.586 4.961 3.211 5.47 3 6 3H18C18.53 3 19.039 3.211 19.414 3.586 19.789 3.961 20 4.47 20 5V9M8 8V9M12 8V9M16 8V9M20 9H4C2.895 9 2 9.895 2 11V19C2 20.105 2.895 21 4 21H20C21.105 21 22 20.105 22 19V11C22 9.895 21.105 9 20 9Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 17C9.105 17 10 16.105 10 15 10 13.895 9.105 13 8 13 6.895 13 6 13.895 6 15 6 16.105 6.895 17 8 17ZM16 17C17.105 17 18 16.105 18 15 18 13.895 17.105 13 16 13 14.895 13 14 13.895 14 15 14 16.105 14.895 17 16 17Z"
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
          d="M4 9V5C4 4.47 4.211 3.961 4.586 3.586 4.961 3.211 5.47 3 6 3H18C18.53 3 19.039 3.211 19.414 3.586 19.789 3.961 20 4.47 20 5V9M8 8V9M12 8V9M16 8V9M20 9H4C2.895 9 2 9.895 2 11V19C2 20.105 2.895 21 4 21H20C21.105 21 22 20.105 22 19V11C22 9.895 21.105 9 20 9Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 17C9.105 17 10 16.105 10 15 10 13.895 9.105 13 8 13 6.895 13 6 13.895 6 15 6 16.105 6.895 17 8 17ZM16 17C17.105 17 18 16.105 18 15 18 13.895 17.105 13 16 13 14.895 13 14 13.895 14 15 14 16.105 14.895 17 16 17Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BoomBox doesn't support ${type}`);
  return null;
});

BoomBox.displayName = "BoomBox";

BoomBox.metadata = {
  name: "BoomBox",
  category: "stroke/social",
  tags: ["boom", "box", "icon"],
  description: "BoomBox icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BoomBox;
