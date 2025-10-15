import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Webflow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Webflow(
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
      <g clipPath="url(#undefined-clip0_2062_2280)">
        <path
          d="M24 4L16.3419 18.993H9.14879L12.3537 12.7793H12.2099C9.56588 16.2166 5.62094 18.4795 0 18.993V12.8652C0 12.8652 3.59586 12.6525 5.70974 10.4268H0V4.00012H6.41714V9.28594L6.56117 9.28536L9.18343 4.00012H14.0365V9.25243L14.1806 9.2522L16.9012 4H24Z"
          fill="#146ef5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2280">
          <path fill="#fff" transform="translate(0 4)" d="M0 0H24V15H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Webflow.displayName = "Webflow";

Webflow.metadata = {
  name: "Webflow",
  category: "icon/cms",
  tags: ["webflow", "icon"],
  description: "Webflow icon from icon/cms category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Webflow;
