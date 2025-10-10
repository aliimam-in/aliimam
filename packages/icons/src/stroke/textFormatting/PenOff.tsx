import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PenOffProps extends IconProps {
  type?: "stroke";
}

export const PenOff: IconComponent<PenOffProps> = React.forwardRef<
  SVGSVGElement,
  PenOffProps
>(function PenOff(
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
          d="M10 10 3.843 16.162C3.61 16.394 3.439 16.681 3.343 16.995L2.021 21.355C1.995 21.442 1.993 21.534 2.014 21.621 2.036 21.709 2.082 21.789 2.145 21.853 2.209 21.917 2.289 21.963 2.377 21.985 2.464 22.007 2.556 22.005 2.643 21.979L7.001 20.656C7.314 20.56 7.6 20.388 7.831 20.156L14 13.982M12.829 7.172 17.188 2.826C17.45 2.564 17.761 2.357 18.103 2.215 18.445 2.073 18.811 2 19.181 2 19.551 2 19.918 2.073 20.26 2.215 20.602 2.357 20.912 2.564 21.174 2.826 21.436 3.088 21.643 3.398 21.785 3.74 21.927 4.082 22 4.449 22 4.819 22 5.189 21.927 5.556 21.785 5.898 21.643 6.24 21.436 6.55 21.174 6.812L16.821 11.165M2 2 22 22"
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
          d="M10 10 3.843 16.162C3.61 16.394 3.439 16.681 3.343 16.995L2.021 21.355C1.995 21.442 1.993 21.534 2.014 21.621 2.036 21.709 2.082 21.789 2.145 21.853 2.209 21.917 2.289 21.963 2.377 21.985 2.464 22.007 2.556 22.005 2.643 21.979L7.001 20.656C7.314 20.56 7.6 20.388 7.831 20.156L14 13.982M12.829 7.172 17.188 2.826C17.45 2.564 17.761 2.357 18.103 2.215 18.445 2.073 18.811 2 19.181 2 19.551 2 19.918 2.073 20.26 2.215 20.602 2.357 20.912 2.564 21.174 2.826 21.436 3.088 21.643 3.398 21.785 3.74 21.927 4.082 22 4.449 22 4.819 22 5.189 21.927 5.556 21.785 5.898 21.643 6.24 21.436 6.55 21.174 6.812L16.821 11.165M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PenOff doesn't support ${type}`);
  return null;
});

PenOff.displayName = "PenOff";

PenOff.metadata = {
  name: "PenOff",
  category: "stroke/textFormatting",
  tags: ["pen", "off", "icon"],
  description: "PenOff icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PenOff;
