import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BoxesProps extends IconProps {
  type?: "stroke";
}

export const Boxes: IconComponent<BoxesProps> = React.forwardRef<
  SVGSVGElement,
  BoxesProps
>(function Boxes(
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
          d="M2.97 12.92C2.675 13.097 2.43 13.348 2.26 13.648 2.09 13.947 2.001 14.286 2 14.63V17.87C2.001 18.214 2.09 18.553 2.26 18.852 2.43 19.152 2.675 19.403 2.97 19.58L5.97 21.38C6.281 21.567 6.637 21.666 7 21.666 7.363 21.666 7.719 21.567 8.03 21.38L12 19V13.5L7 10.5 2.97 12.92ZM7 16.5 2.26 13.65M7 16.5 12 13.5M7 16.5V21.67M12 13.5V19L15.97 21.38C16.281 21.567 16.637 21.666 17 21.666 17.363 21.666 17.719 21.567 18.03 21.38L21.03 19.58C21.325 19.403 21.57 19.152 21.74 18.852 21.91 18.553 21.999 18.214 22 17.87V14.63C21.999 14.286 21.91 13.947 21.74 13.648 21.57 13.348 21.325 13.097 21.03 12.92L17 10.5 12 13.5ZM17 16.5 12 13.5M17 16.5 21.74 13.65M17 16.5V21.67"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.97 4.42C7.675 4.597 7.43 4.848 7.26 5.148 7.09 5.447 7.001 5.786 7 6.13V10.5L12 13.5 17 10.5V6.13C16.999 5.786 16.91 5.447 16.74 5.148 16.57 4.848 16.325 4.597 16.03 4.42L13.03 2.62C12.719 2.433 12.363 2.334 12 2.334 11.637 2.334 11.281 2.433 10.97 2.62L7.97 4.42ZM12 8 7.26 5.15M12 8 16.74 5.15M12 13.5V8"
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
          d="M2.97 12.92C2.675 13.097 2.43 13.348 2.26 13.648 2.09 13.947 2.001 14.286 2 14.63V17.87C2.001 18.214 2.09 18.553 2.26 18.852 2.43 19.152 2.675 19.403 2.97 19.58L5.97 21.38C6.281 21.567 6.637 21.666 7 21.666 7.363 21.666 7.719 21.567 8.03 21.38L12 19V13.5L7 10.5 2.97 12.92ZM7 16.5 2.26 13.65M7 16.5 12 13.5M7 16.5V21.67M12 13.5V19L15.97 21.38C16.281 21.567 16.637 21.666 17 21.666 17.363 21.666 17.719 21.567 18.03 21.38L21.03 19.58C21.325 19.403 21.57 19.152 21.74 18.852 21.91 18.553 21.999 18.214 22 17.87V14.63C21.999 14.286 21.91 13.947 21.74 13.648 21.57 13.348 21.325 13.097 21.03 12.92L17 10.5 12 13.5ZM17 16.5 12 13.5M17 16.5 21.74 13.65M17 16.5V21.67"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.97 4.42C7.675 4.597 7.43 4.848 7.26 5.148 7.09 5.447 7.001 5.786 7 6.13V10.5L12 13.5 17 10.5V6.13C16.999 5.786 16.91 5.447 16.74 5.148 16.57 4.848 16.325 4.597 16.03 4.42L13.03 2.62C12.719 2.433 12.363 2.334 12 2.334 11.637 2.334 11.281 2.433 10.97 2.62L7.97 4.42ZM12 8 7.26 5.15M12 8 16.74 5.15M12 13.5V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Boxes doesn't support ${type}`);
  return null;
});

Boxes.displayName = "Boxes";

Boxes.metadata = {
  name: "Boxes",
  category: "stroke/gaming",
  tags: ["boxes", "icon"],
  description: "Boxes icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Boxes;
