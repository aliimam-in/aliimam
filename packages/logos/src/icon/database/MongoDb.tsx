import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MongoDb: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MongoDb(
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
      <g clipPath="url(#undefined-clip0_2062_3082)">
        <path
          d="M14.5463 2.67138C13.5576 1.47789 12.7061 0.265696 12.5322 0.0139803C12.5281 0.00956272 12.5231 0.00604561 12.5176 0.00364241C12.5121 0.0012392 12.5061 0 12.5001 0C12.4941 0 12.4882 0.0012392 12.4827 0.00364241C12.4772 0.00604561 12.4722 0.00956272 12.4681 0.0139803C12.2941 0.26574 11.4427 1.47789 10.454 2.67138C1.96733 13.6832 11.7906 21.1147 11.7906 21.1147L11.873 21.1706C11.9462 22.3175 12.1294 23.9679 12.1294 23.9679H12.8618C12.8618 23.9679 13.0448 22.3268 13.1181 21.1707L13.2005 21.1053C13.2096 21.1147 23.0329 13.6833 14.5463 2.67138ZM12.4955 20.9468C12.4955 20.9468 12.0561 20.5645 11.9371 20.3688V20.3501L12.4681 8.35916C12.4681 8.32187 12.523 8.32187 12.523 8.35916L13.054 20.3501V20.3688C12.935 20.5645 12.4955 20.9468 12.4955 20.9468V20.9468Z"
          fill="#01ec64"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_3082">
          <path fill="#fff" transform="translate(7)" d="M0 0H11V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

MongoDb.displayName = "MongoDb";

MongoDb.metadata = {
  name: "MongoDb",
  category: "icon/database",
  tags: ["mongo", "db", "icon"],
  description: "MongoDb icon from icon/database category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MongoDb;
