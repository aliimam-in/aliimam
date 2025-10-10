import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CloudLightning: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CloudLightning(
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
      <path
        d="M5.99985 16.326C4.94608 15.8256 4.03407 15.0698 3.34671 14.1273C2.65934 13.1848 2.21843 12.0855 2.06403 10.9292C1.90963 9.77291 2.04665 8.59638 2.46263 7.50653C2.8786 6.41669 3.56035 5.44808 4.44591 4.68874C5.33147 3.9294 6.39276 3.40342 7.53331 3.15859C8.67387 2.91376 9.85752 2.95785 10.9767 3.28686C12.0959 3.61587 13.1151 4.21935 13.9417 5.04247C14.7683 5.86559 15.3761 6.88223 15.7098 8.00001H17.4998C18.6513 7.998 19.7598 8.43748 20.597 9.22801C21.4343 10.0185 21.9367 11.0999 22.0007 12.2496C22.0648 13.3993 21.6857 14.5299 20.9414 15.4085C20.1972 16.2872 19.1444 16.8471 17.9998 16.973"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 12L10 17H14L11 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CloudLightning.displayName = "CloudLightning";

CloudLightning.metadata = {
  name: "CloudLightning",
  category: "stroke/weather",
  tags: ["cloud", "lightning", "icon"],
  description: "CloudLightning icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudLightning;
