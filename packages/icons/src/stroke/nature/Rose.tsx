import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RoseProps extends IconProps {
  type?: "stroke";
}

export const Rose: IconComponent<RoseProps> = React.forwardRef<
  SVGSVGElement,
  RoseProps
>(function Rose(
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
          d="M17 10H16C15.2089 10 14.4355 9.76541 13.7777 9.32588C13.1199 8.88635 12.6072 8.26164 12.3045 7.53074C12.0017 6.79983 11.9225 5.99556 12.0769 5.21964C12.2312 4.44372 12.6122 3.73098 13.1716 3.17157C13.731 2.61216 14.4437 2.2312 15.2196 2.07686C15.9956 1.92252 16.7998 2.00173 17.5307 2.30448C18.2616 2.60723 18.8864 3.11992 19.3259 3.77772C19.7654 4.43552 20 5.20888 20 6V6.534"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 6H18C18.936 6 19.842 6.328 20.562 6.927 21.281 7.525 21.767 8.358 21.936 9.278 22.105 10.199 21.945 11.149 21.486 11.965 21.026 12.78 20.295 13.408 19.42 13.74L17.13 14.61C15.74 15.139 14.202 15.133 12.816 14.593 11.43 14.052 10.294 13.016 9.629 11.685 8.964 10.355 8.817 8.824 9.216 7.391 9.616 5.958 10.533 4.725 11.791 3.93L13.86 2.62M4.5 17C7.3 16.5 8.9 17 10 17.8 11.1 18.6 11.8 20 12.3 21.5 10.3 21.9 8.8 21.9 7.5 21.2 6.3 20.6 5.2 19.3 4.5 17Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.77 12C4 15 2 22 2 22M17 10C18.105 10 19 9.105 19 8 19 6.895 18.105 6 17 6 15.895 6 15 6.895 15 8 15 9.105 15.895 10 17 10Z"
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
          d="M17 10H16C15.2089 10 14.4355 9.76541 13.7777 9.32588C13.1199 8.88635 12.6072 8.26164 12.3045 7.53074C12.0017 6.79983 11.9225 5.99556 12.0769 5.21964C12.2312 4.44372 12.6122 3.73098 13.1716 3.17157C13.731 2.61216 14.4437 2.2312 15.2196 2.07686C15.9956 1.92252 16.7998 2.00173 17.5307 2.30448C18.2616 2.60723 18.8864 3.11992 19.3259 3.77772C19.7654 4.43552 20 5.20888 20 6V6.534"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 6H18C18.936 6 19.842 6.328 20.562 6.927 21.281 7.525 21.767 8.358 21.936 9.278 22.105 10.199 21.945 11.149 21.486 11.965 21.026 12.78 20.295 13.408 19.42 13.74L17.13 14.61C15.74 15.139 14.202 15.133 12.816 14.593 11.43 14.052 10.294 13.016 9.629 11.685 8.964 10.355 8.817 8.824 9.216 7.391 9.616 5.958 10.533 4.725 11.791 3.93L13.86 2.62M4.5 17C7.3 16.5 8.9 17 10 17.8 11.1 18.6 11.8 20 12.3 21.5 10.3 21.9 8.8 21.9 7.5 21.2 6.3 20.6 5.2 19.3 4.5 17Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.77 12C4 15 2 22 2 22M17 10C18.105 10 19 9.105 19 8 19 6.895 18.105 6 17 6 15.895 6 15 6.895 15 8 15 9.105 15.895 10 17 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Rose doesn't support ${type}`);
  return null;
});

Rose.displayName = "Rose";

Rose.metadata = {
  name: "Rose",
  category: "stroke/nature",
  tags: ["rose", "icon"],
  description: "Rose icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rose;
