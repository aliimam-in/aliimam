import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TriangleAlertProps extends IconProps {
  type?: "stroke";
}

export const TriangleAlert: IconComponent<TriangleAlertProps> =
  React.forwardRef<SVGSVGElement, TriangleAlertProps>(function TriangleAlert(
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
            d="M21.73 18 13.73 4C13.556 3.692 13.303 3.436 12.997 3.258 12.691 3.08 12.344 2.986 11.99 2.986 11.636 2.986 11.289 3.08 10.983 3.258 10.677 3.436 10.424 3.692 10.25 4L2.25 18C2.074 18.305 1.981 18.652 1.982 19.005 1.983 19.357 2.077 19.703 2.254 20.008 2.432 20.312 2.687 20.565 2.994 20.739 3.3 20.913 3.647 21.003 4 21H20C20.351 21 20.696 20.907 20.999 20.731 21.303 20.556 21.555 20.303 21.73 19.999 21.906 19.695 21.998 19.35 21.998 19 21.998 18.649 21.905 18.304 21.73 18ZM12 9V13M12 17H12.01"
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
            d="M21.73 18 13.73 4C13.556 3.692 13.303 3.436 12.997 3.258 12.691 3.08 12.344 2.986 11.99 2.986 11.636 2.986 11.289 3.08 10.983 3.258 10.677 3.436 10.424 3.692 10.25 4L2.25 18C2.074 18.305 1.981 18.652 1.982 19.005 1.983 19.357 2.077 19.703 2.254 20.008 2.432 20.312 2.687 20.565 2.994 20.739 3.3 20.913 3.647 21.003 4 21H20C20.351 21 20.696 20.907 20.999 20.731 21.303 20.556 21.555 20.303 21.73 19.999 21.906 19.695 21.998 19.35 21.998 19 21.998 18.649 21.905 18.304 21.73 18ZM12 9V13M12 17H12.01"
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
            d="M21.73 18 13.73 4C13.556 3.692 13.303 3.436 12.997 3.258 12.691 3.08 12.344 2.986 11.99 2.986 11.636 2.986 11.289 3.08 10.983 3.258 10.677 3.436 10.424 3.692 10.25 4L2.25 18C2.074 18.305 1.981 18.652 1.982 19.005 1.983 19.357 2.077 19.703 2.254 20.008 2.432 20.312 2.687 20.565 2.994 20.739 3.3 20.913 3.647 21.003 4 21H20C20.351 21 20.696 20.907 20.999 20.731 21.303 20.556 21.555 20.303 21.73 19.999 21.906 19.695 21.998 19.35 21.998 19 21.998 18.649 21.905 18.304 21.73 18ZM12 9V13M12 17H12.01"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`TriangleAlert doesn't support ${type}`);
    return null;
  });

TriangleAlert.displayName = "TriangleAlert";

TriangleAlert.metadata = {
  name: "TriangleAlert",
  category: "stroke/shapes",
  tags: ["triangle", "alert", "icon"],
  description: "TriangleAlert icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TriangleAlert;
