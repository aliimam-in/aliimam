import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Algorand: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Algorand(
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
      <g clipPath="url(#undefined-clip0_2062_2938)">
        <path
          d="M12 22.125C18.0061 22.125 22.875 17.2561 22.875 11.25C22.875 5.2439 18.0061 0.375 12 0.375C5.9939 0.375 1.125 5.2439 1.125 11.25C1.125 17.2561 5.9939 22.125 12 22.125Z"
          stroke={color}
          strokeOpacity=".097"
        />
        <path
          d="M7.74889 17.25L13.1648 7.79867L13.9082 10.2412L9.76659 17.25H11.8905L14.5454 12.6836L15.7135 17.25H17.625L15.8197 10.4535L17.094 8.22345H15.1825L14.4392 5.25H12.6338L5.625 17.25H7.74889Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2938">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Algorand.displayName = "Algorand";

Algorand.metadata = {
  name: "Algorand",
  category: "icon/crypto",
  tags: ["algorand", "icon"],
  description: "Algorand icon from icon/crypto category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Algorand;
