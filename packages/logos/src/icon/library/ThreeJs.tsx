import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ThreeJs: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ThreeJs(
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
      <g clipPath="url(#undefined-clip0_2066_921)">
        <path
          d="M0.379973 2.15377e-05C0.339693 0.00065856 0.300074 0.0103684 0.264064 0.0284289C0.228053 0.0464894 0.196578 0.0724358 0.171978 0.104339C0.147378 0.136241 0.130287 0.173279 0.121976 0.212698C0.113665 0.252117 0.114348 0.292903 0.123973 0.332022L3.01797 12.048C3.02027 12.0616 3.02362 12.075 3.02797 12.088L5.91797 23.796C5.92927 23.8418 5.95246 23.8838 5.98519 23.9178C6.01792 23.9518 6.05905 23.9765 6.1044 23.9895C6.14975 24.0025 6.19773 24.0033 6.24348 23.9918C6.28924 23.9803 6.33114 23.9569 6.36497 23.924L23.802 7.15002C23.8357 7.11735 23.8603 7.07639 23.8732 7.03124C23.8861 6.98609 23.887 6.93833 23.8756 6.89275C23.8643 6.84718 23.8412 6.80538 23.8086 6.77156C23.776 6.73773 23.7351 6.71306 23.69 6.70002L17.906 5.03302C17.8684 5.0116 17.8262 4.99959 17.783 4.99802L6.37997 1.71502C6.33674 1.6883 6.2868 1.67443 6.23597 1.67502L0.455973 0.0100215C0.43125 0.00306371 0.405655 -0.000304067 0.379973 2.15377e-05ZM0.753973 0.654022L5.70997 2.08002L1.98997 5.66402L0.753973 0.654022ZM6.60997 2.34002L11.474 3.74002L7.82397 7.25502L6.60997 2.34002ZM6.08797 2.46002L7.30497 7.38602L2.42797 5.98602L6.08797 2.46002ZM12.368 3.99802L17.246 5.40202L13.584 8.93202L12.368 3.99802ZM11.848 4.12802L13.056 9.02802L8.20297 7.63602L11.848 4.12802ZM18.148 5.66202L23.095 7.08602L19.38 10.66L18.148 5.66202ZM17.624 5.78202L18.839 10.708L13.963 9.31002L17.624 5.78202ZM2.19197 6.47802L7.15597 7.90202L3.42997 11.488L2.19197 6.47802ZM8.04697 8.15002L12.924 9.55002L9.26397 13.077L8.04697 8.15002ZM7.52897 8.28702L8.76497 13.304L3.80197 11.872L7.52897 8.28702ZM13.803 9.82202L18.768 11.247L15.038 14.833L13.803 9.82202ZM13.283 9.94902L14.518 14.961L9.55997 13.531L13.283 9.94902ZM3.65297 12.387L8.52597 13.793L4.86997 17.316L3.65297 12.387ZM9.50697 14.074L14.37 15.477L10.722 18.987L9.50697 14.074ZM8.96697 14.114L10.181 19.041L5.30597 17.641L8.96697 14.114ZM5.07097 18.134L10.108 19.576L6.32597 23.214L5.07097 18.134Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_921">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

ThreeJs.displayName = "ThreeJs";

ThreeJs.metadata = {
  name: "ThreeJs",
  category: "icon/library",
  tags: ["three", "js", "icon"],
  description: "ThreeJs icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ThreeJs;
