import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PolarProps extends IconProps {
  type?: "icon";
}

export const Polar: IconComponent<PolarProps> = React.forwardRef<
  SVGSVGElement,
  PolarProps
>(function Polar(
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
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "icon") {
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
        <g clipPath="url(#undefined-clip0_2039_496)">
          <path
            d="M5.31428 21.9408C10.7901 25.6475 18.234 24.2133 21.9407 18.7376C25.6475 13.2617 24.2133 5.81781 18.7375 2.11117C13.2616 -1.59563 5.81772 -0.161473 2.11108 5.31429C-1.5958 10.7903 -0.16148 18.2343 5.31428 21.9408ZM3.83652 9.33365C2.467 13.5411 2.92356 17.7515 4.73972 20.5099C1.44324 17.3889 0.58204 12.0246 2.95548 7.38549C4.47316 4.41893 7.00524 2.35157 9.79996 1.46789C7.24724 2.93693 5.00444 5.74517 3.83652 9.33365ZM14.0278 22.651C16.9102 21.8085 19.5369 19.7108 21.0948 16.6658C23.4481 12.066 22.6215 6.75341 19.3942 3.62141C21.1376 6.38109 21.5579 10.5234 20.2105 14.663C19.0092 18.3537 16.6708 21.2192 14.0278 22.651ZM14.6902 21.2984C16.6356 19.6335 18.2413 16.8484 18.9548 13.5032C20.0827 8.21549 18.6041 3.29589 15.609 1.65421C17.1976 3.79165 18.0018 7.94325 17.506 12.5867C17.1268 16.138 16.0652 19.2475 14.6902 21.2984ZM5.0974 10.5476C3.96132 15.8744 5.4702 20.8276 8.50996 22.4324C6.87972 20.3208 6.0478 16.1212 6.55012 11.4169C6.923 7.92437 7.95604 4.85901 9.29804 2.80781C7.38148 4.47869 5.803 7.23917 5.0974 10.5476ZM15.9868 11.9649C16.0727 17.3979 14.3672 21.8303 12.1778 21.8648C9.98828 21.8994 8.1438 17.5232 8.05796 12.0902C7.97212 6.65717 9.67748 2.22477 11.867 2.19021C14.0564 2.15565 15.901 6.53189 15.9868 11.9649Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2039_496">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === "icon") {
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
        <g clipPath="url(#undefined-clip0_2066_1222)">
          <path
            d="M5.31425 21.9408C10.7901 25.6475 18.234 24.2133 21.9406 18.7376C25.6474 13.2617 24.2133 5.81781 18.7374 2.11117C13.2616 -1.59563 5.81769 -0.161473 2.11105 5.31429C-1.59583 10.7903 -0.161511 18.2343 5.31425 21.9408ZM3.83649 9.33365C2.46697 13.5411 2.92353 17.7515 4.73969 20.5099C1.44321 17.3889 0.582009 12.0246 2.95545 7.38549C4.47313 4.41893 7.00529 2.35157 9.79993 1.46789C7.24721 2.93693 5.00441 5.74517 3.83649 9.33365ZM14.0278 22.651C16.9102 21.8085 19.5369 19.7108 21.0948 16.6658C23.4481 12.066 22.6215 6.75341 19.3942 3.62141C21.1376 6.38109 21.5578 10.5234 20.2105 14.663C19.0092 18.3537 16.6708 21.2192 14.0278 22.651ZM14.6902 21.2984C16.6356 19.6335 18.2413 16.8484 18.9549 13.5032C20.0827 8.21549 18.6041 3.29589 15.609 1.65421C17.1976 3.79165 18.0018 7.94325 17.5059 12.5867C17.1268 16.138 16.0651 19.2475 14.6902 21.2984ZM5.09737 10.5476C3.96129 15.8744 5.47017 20.8276 8.50993 22.4324C6.87969 20.3208 6.04777 16.1212 6.55009 11.4169C6.92297 7.92437 7.95601 4.85901 9.29801 2.80781C7.38145 4.47869 5.80297 7.23917 5.09737 10.5476ZM15.9867 11.9649C16.0726 17.3979 14.3672 21.8303 12.1778 21.8648C9.98825 21.8994 8.14377 17.5232 8.05793 12.0902C7.97209 6.65717 9.67745 2.22477 11.867 2.19021C14.0564 2.15565 15.901 6.53189 15.9867 11.9649Z"
            fill="#0062ff"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1222">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`Polar doesn't support ${type}`);
  return null;
});

Polar.displayName = "Polar";

Polar.metadata = {
  name: "Polar",
  category: "icon/software",
  tags: ["polar", "icon"],
  description: "Polar icon from icon/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polar;
