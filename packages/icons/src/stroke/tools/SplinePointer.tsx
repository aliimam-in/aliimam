import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SplinePointerProps extends IconProps {
  type?: "stroke";
}

export const SplinePointer: IconComponent<SplinePointerProps> =
  React.forwardRef<SVGSVGElement, SplinePointerProps>(function SplinePointer(
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
            d="M12.034 12.681C11.998 12.591 11.989 12.492 12.009 12.396 12.028 12.301 12.076 12.213 12.144 12.145 12.213 12.076 12.301 12.029 12.396 12.009 12.492 11.989 12.591 11.998 12.681 12.034L21.681 15.534C21.777 15.572 21.86 15.638 21.917 15.725 21.974 15.812 22.002 15.914 21.999 16.017 21.995 16.121 21.959 16.221 21.897 16.303 21.834 16.385 21.747 16.446 21.648 16.477L18.204 17.545C18.049 17.593 17.907 17.678 17.792 17.793 17.677 17.908 17.592 18.05 17.544 18.205L16.477 21.648C16.446 21.747 16.385 21.834 16.303 21.897 16.221 21.959 16.121 21.995 16.017 21.999 15.914 22.002 15.812 21.974 15.725 21.917 15.638 21.86 15.572 21.778 15.534 21.681L12.034 12.681ZM5 17C5 13.817 6.264 10.765 8.515 8.515 10.765 6.264 13.817 5 17 5M19 7C20.105 7 21 6.105 21 5 21 3.895 20.105 3 19 3 17.895 3 17 3.895 17 5 17 6.105 17.895 7 19 7ZM5 21C6.105 21 7 20.105 7 19 7 17.895 6.105 17 5 17 3.895 17 3 17.895 3 19 3 20.105 3.895 21 5 21Z"
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
            d="M12.034 12.681C11.998 12.591 11.989 12.492 12.009 12.396 12.028 12.301 12.076 12.213 12.144 12.145 12.213 12.076 12.301 12.029 12.396 12.009 12.492 11.989 12.591 11.998 12.681 12.034L21.681 15.534C21.777 15.572 21.86 15.639 21.917 15.725 21.974 15.812 22.002 15.914 21.999 16.017 21.995 16.121 21.959 16.221 21.897 16.303 21.834 16.385 21.747 16.446 21.648 16.477L18.204 17.545C18.049 17.593 17.907 17.678 17.792 17.793 17.677 17.908 17.592 18.05 17.544 18.205L16.477 21.648C16.446 21.747 16.385 21.834 16.303 21.897 16.221 21.96 16.121 21.995 16.017 21.999 15.914 22.002 15.812 21.974 15.725 21.917 15.638 21.86 15.572 21.778 15.534 21.681L12.034 12.681ZM5 17C5 13.817 6.264 10.765 8.515 8.515 10.765 6.264 13.817 5 17 5M19 7C20.105 7 21 6.105 21 5 21 3.895 20.105 3 19 3 17.895 3 17 3.895 17 5 17 6.105 17.895 7 19 7ZM5 21C6.105 21 7 20.105 7 19 7 17.895 6.105 17 5 17 3.895 17 3 17.895 3 19 3 20.105 3.895 21 5 21Z"
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
            d="M12.034 12.681C11.998 12.591 11.989 12.492 12.009 12.396 12.029 12.301 12.076 12.213 12.145 12.145 12.213 12.076 12.301 12.029 12.396 12.009 12.492 11.989 12.591 11.998 12.681 12.034L21.681 15.534C21.778 15.572 21.86 15.639 21.917 15.725 21.974 15.812 22.002 15.914 21.999 16.017 21.995 16.121 21.959 16.221 21.897 16.303 21.834 16.385 21.747 16.446 21.648 16.477L18.204 17.545C18.049 17.593 17.907 17.678 17.792 17.793 17.677 17.908 17.592 18.05 17.544 18.205L16.477 21.648C16.446 21.747 16.385 21.834 16.303 21.897 16.221 21.96 16.121 21.995 16.017 21.999 15.914 22.002 15.812 21.974 15.725 21.917 15.638 21.86 15.572 21.778 15.534 21.681L12.034 12.681ZM5 17C5 13.817 6.264 10.765 8.515 8.515 10.765 6.264 13.817 5 17 5M19 7C20.105 7 21 6.105 21 5 21 3.895 20.105 3 19 3 17.895 3 17 3.895 17 5 17 6.105 17.895 7 19 7ZM5 21C6.105 21 7 20.105 7 19 7 17.895 6.105 17 5 17 3.895 17 3 17.895 3 19 3 20.105 3.895 21 5 21Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`SplinePointer doesn't support ${type}`);
    return null;
  });

SplinePointer.displayName = "SplinePointer";

SplinePointer.metadata = {
  name: "SplinePointer",
  category: "stroke/tools",
  tags: ["spline", "pointer", "icon"],
  description: "SplinePointer icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SplinePointer;
