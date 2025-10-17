import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tauri: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Tauri(
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
        <g clipPath="url(#undefined-clip0_2066_908)">
          <path
            d="M15.6423 8.71389C15.6423 9.97244 14.6346 10.9926 13.3914 10.9926C12.1484 10.9926 11.1406 9.97244 11.1406 8.71389C11.1406 7.45551 12.1484 6.4353 13.3915 6.4353C14.6346 6.4353 15.6423 7.45543 15.6423 8.71389Z"
            fill="#ffc131"
          />
          <path
            d="M9.60583 12.9605C8.36272 12.9605 7.35498 13.9807 7.35498 15.2392C7.35498 16.4976 8.36272 17.5178 9.60583 17.5178C10.8489 17.5178 11.8567 16.4976 11.8567 15.2392C11.8567 13.9807 10.8489 12.9605 9.60583 12.9605Z"
            fill="#24c8db"
          />
          <path
            d="M18.0567 16.0161C17.1521 16.6081 16.1456 17.0227 15.0897 17.2382C15.3958 16.355 15.4973 15.4124 15.3865 14.4831C17.8435 13.6135 19.4733 11.2474 19.4299 8.61268C19.3865 5.97791 17.6797 3.66801 15.1953 2.88191C12.7109 2.09572 10.0085 3.0103 8.49066 5.15103C7.34543 5.28146 6.23099 5.6108 5.19629 6.12457C6.32045 2.45282 9.6916 -0.0369552 13.4887 0.000415006C17.2857 0.0377852 20.6085 2.59341 21.6619 6.28667C22.7153 9.97993 21.2496 13.9354 18.0567 16.016V16.0161ZM5.29866 7.70923L7.40629 7.96817C7.4541 7.55611 7.54324 7.15006 7.67232 6.75629C6.83864 6.95251 6.03859 7.2737 5.29866 7.70923Z"
            fill="#ffc131"
          />
          <path
            d="M4.9303 7.93714C5.84035 7.33906 6.85404 6.92084 7.9178 6.70459C7.59602 7.58768 7.48046 8.53416 7.58016 9.46999C5.13177 10.3518 3.51559 12.721 3.56834 15.3514C3.621 17.9817 5.3307 20.2826 7.81247 21.0632C10.2942 21.8438 12.9909 20.9287 14.5065 18.7918C15.6512 18.6646 16.7656 18.3387 17.8009 17.8285C16.6741 21.4965 13.3046 23.9821 9.51052 23.9443C5.71641 23.9067 2.3957 21.3546 1.34004 17.6651C0.284298 13.9757 1.74363 10.0219 4.93038 7.93714H4.9303Z"
            fill="#24c8db"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_908">
            <path fill="#fff" transform="translate(1)" d="M0 0H21V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Tauri.displayName = "Tauri";

Tauri.metadata = {
  name: "Tauri",
  category: "icon/library",
  tags: ["tauri", "icon"],
  description: "Tauri icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tauri;
