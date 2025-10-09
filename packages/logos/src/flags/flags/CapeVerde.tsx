import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CapeVerde: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CapeVerde(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#13348f"
      />
      <path d="M1 17H31V21H1V17Z" fill="#bf312d" />
      <path d="M1 16H31V18H1V16ZM1 20H31V22H1V20Z" fill="#fff" />
      <path
        d="M6.977 19.855 7.219 20.6H8.004L7.369 21.06 7.612 21.805 6.977 21.344 6.342 21.805 6.585 21.06 5.95 20.6H6.734L6.977 19.855ZM6.912 15.959 7.155 16.703H7.939L7.304 17.163 7.547 17.908 6.912 17.448 6.277 17.908 6.52 17.163 5.885 16.703H6.67L6.912 15.959ZM18.005 15.961 18.248 16.704H19.033L18.398 17.163 18.64 17.906 18.006 17.447 17.371 17.906 17.613 17.163 16.978 16.704H17.763L18.005 15.961ZM17.933 19.857 18.175 20.6H18.96L18.325 21.059 18.567 21.802 17.932 21.343 17.297 21.802 17.539 21.059 16.904 20.6H17.688L17.93 19.857H17.933ZM12.458 11.952 12.7 12.698H13.485L12.85 13.159 13.093 13.905 12.458 13.444 11.823 13.905 12.065 13.159 11.43 12.698H12.214L12.457 11.952H12.458ZM12.46 23.644 12.702 24.39H13.487L12.852 24.851 13.094 25.597 12.459 25.136 11.824 25.597 12.067 24.851 11.432 24.39H12.216L12.459 23.644H12.46ZM9.028 13.065 9.27 13.811H10.055L9.42 14.272 9.663 15.018 9.028 14.557 8.393 15.018 8.635 14.272 8 13.811H8.784L9.028 13.065ZM15.883 22.534 16.125 23.28H16.91L16.275 23.741 16.518 24.487 15.883 24.026 15.248 24.487 15.491 23.741 14.856 23.28H15.64L15.883 22.534ZM9.148 22.622 9.391 23.368H10.175L9.54 23.829 9.783 24.576 9.148 24.114 8.513 24.576 8.756 23.829 8.121 23.368H8.906L9.148 22.622ZM15.783 12.98 16.026 13.726H16.811L16.176 14.187 16.418 14.933 15.784 14.472 15.149 14.933 15.391 14.187 14.757 13.726H15.541L15.783 12.98Z"
        fill="#f7d116"
      />
    </svg>
  );
});

CapeVerde.displayName = "CapeVerde";

CapeVerde.metadata = {
  name: "CapeVerde",
  category: "flags/flags",
  tags: ["cape", "verde", "icon"],
  description: "CapeVerde icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CapeVerde;
