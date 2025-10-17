import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PandaCss: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PandaCss(
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
      <g clipPath="url(#undefined-clip0_2066_913)">
        <path
          d="M0 2.74675C0 1.22984 1.24416 0 2.77894 0H21.2211C22.7558 0 24 1.22975 24 2.74675V21.2249C24 22.742 22.7558 23.9717 21.2211 23.9717H2.77894C1.24425 23.9717 0 22.742 0 21.2249V2.74675Z"
          fill="#f6e458"
        />
        <path
          d="M15.3802 5.35836C14.0561 4.98242 12.7055 4.93127 11.3291 5.05294C10.5588 5.13208 9.8184 5.28321 9.10421 5.54842C7.56033 6.12145 6.40121 7.11425 5.71008 8.60893C5.21452 9.68049 5.03546 10.8188 5.0168 11.9867C4.99711 13.221 5.15358 14.4381 5.40211 15.6449C5.62758 16.7387 5.92777 17.8111 6.3564 18.8465C6.39708 18.9447 6.4478 18.9779 6.55655 18.9777C7.91227 18.9748 9.26808 18.9748 10.6239 18.9748H11.8279C11.8587 18.9748 11.8894 18.973 11.9248 18.9711C11.9428 18.9702 11.962 18.9691 11.9831 18.9682C11.9749 18.949 11.9677 18.9314 11.9608 18.9149C11.9488 18.8852 11.9361 18.8557 11.9226 18.8266C11.8246 18.6193 11.7245 18.413 11.6245 18.2065C11.4074 17.7588 11.1904 17.311 10.9941 16.8545C10.3987 15.4701 9.94271 14.0445 9.80358 12.5356C9.74227 11.8698 9.75071 11.2078 9.93765 10.559C10.1512 9.81745 10.6096 9.29399 11.3696 9.07512C12.0676 8.87422 12.7752 8.87552 13.4692 9.09736C14.0887 9.29538 14.4926 9.71357 14.6643 10.3398C14.7963 10.8207 14.7962 11.3068 14.6965 11.7918C14.6196 12.165 14.4649 12.5057 14.1864 12.7782C13.6867 13.267 13.0628 13.3795 12.3933 13.3419C12.2743 13.3353 12.1555 13.3225 12.0331 13.309C11.9758 13.3029 11.9177 13.2966 11.8584 13.2908C11.8601 13.3095 11.861 13.3267 11.862 13.3429C11.8636 13.3746 11.8651 13.4022 11.8717 13.4286C11.9003 13.5419 11.9275 13.6557 11.9547 13.7695C12.0202 14.0436 12.0856 14.3176 12.1698 14.5859C12.3344 15.1098 12.5265 15.6249 12.7455 16.1291C14.2996 16.0092 15.7307 15.6274 17.2499 14.7261C17.2727 14.7118 17.2935 14.699 17.3143 14.6862C17.9668 14.2847 18.4949 13.7638 18.8591 13.0912C19.4489 12.002 19.5639 10.8372 19.3887 9.6349C19.2077 8.39413 18.6445 7.35259 17.6746 6.53575C17.0021 5.96911 16.2243 5.59799 15.3802 5.35836Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_913">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

PandaCss.displayName = "PandaCss";

PandaCss.metadata = {
  name: "PandaCss",
  category: "icon/library",
  tags: ["panda", "css", "icon"],
  description: "PandaCss icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PandaCss;
