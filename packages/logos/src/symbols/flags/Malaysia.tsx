import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Malaysia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Malaysia(
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
        fill="#fff"
      />
      <path
        d="M1.638 5.847H30.362C29.651 4.739 28.414 4 27 4H5C3.585 4 2.349 4.739 1.638 5.847ZM1.031 7.692C1.023 7.795 1 7.894 1 8V9.539H31V8C31 7.895 30.977 7.796 30.969 7.692H1.031ZM1 11.384H31V13.231H1V11.384ZM1 15.077H31V16.924H1V15.077ZM1 18.769H31V20.616H1V18.769ZM1 24C1 24.105 1.023 24.204 1.031 24.308H30.969C30.977 24.205 31 24.106 31 24V22.461H1V24ZM30.362 26.153H1.638C2.349 27.261 3.586 28 5 28H27C28.415 28 29.651 27.261 30.362 26.153Z"
        fill="#bc271a"
      />
      <path d="M16 4H5C2.791 4 1 5.791 1 8V18.769H16V4Z" fill="#010062" />
      <path
        d="M11.639 8.10791L11.931 10.1059L13.061 8.43191L12.455 10.3599L14.2 9.34191L12.818 10.8159L14.833 10.6549L12.949 11.3839L14.833 12.1129L12.818 11.9519L14.2 13.4269L12.455 12.4079L13.061 14.3359L11.931 12.6619L11.639 14.6609L11.346 12.6619L10.216 14.3359L10.822 12.4079L9.07697 13.4269L10.459 11.9519L8.44397 12.1129L10.328 11.3839L8.44397 10.6549L10.459 10.8159L9.07697 9.34191L10.822 10.3599L10.216 8.43191L11.346 10.1059L11.639 8.10791Z"
        fill="#f6cd46"
      />
      <path
        d="M9.99997 8.18893C8.23597 7.40593 6.17097 8.20193 5.38797 9.96593C4.60497 11.7299 5.40097 13.7949 7.16497 14.5779C8.06797 14.9779 9.09697 14.9779 9.99997 14.5779C8.23597 15.8439 5.77897 15.4399 4.51297 13.6749C3.24697 11.9099 3.65097 9.45393 5.41597 8.18793C6.78597 7.20493 8.62997 7.20493 9.99997 8.18793V8.18893Z"
        fill="#f6cd46"
      />
    </svg>
  );
});

Malaysia.displayName = "Malaysia";

Malaysia.metadata = {
  name: "Malaysia",
  category: "symbols/flags",
  tags: ["malaysia", "icon"],
  description: "Malaysia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Malaysia;
