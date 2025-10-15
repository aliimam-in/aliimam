import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Esbuild: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Esbuild(
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
      <g clipPath="url(#undefined-clip0_2062_2613)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#ffcf00"
        />
        <path
          d="M6.49548 5.50452L12.991 12L6.49548 18.4955L4.90454 16.9045L9.80898 12L4.90454 7.09545L6.49548 5.50452ZM13.6955 5.50452L20.191 12L13.6955 18.4955L12.1045 16.9045L17.009 12L12.1045 7.09545L13.6955 5.50452Z"
          fill="#191919"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2613">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Esbuild.displayName = "Esbuild";

Esbuild.metadata = {
  name: "Esbuild",
  category: "icon/compiler",
  tags: ["esbuild", "icon"],
  description: "Esbuild icon from icon/compiler category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Esbuild;
