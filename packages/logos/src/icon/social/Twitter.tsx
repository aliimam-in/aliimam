import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Twitter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Twitter(
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
      <g clipPath="url(#undefined-clip0_2066_1344)">
        <path
          d="M24 4.43536C23.1169 4.83507 22.1679 5.10522 21.1719 5.22675C22.1887 4.60474 22.9693 3.61976 23.3369 2.44617C22.3704 3.03161 21.3129 3.44409 20.2103 3.66579C19.312 2.68904 18.0324 2.07861 16.6162 2.07861C13.8968 2.07861 11.6921 4.32895 11.6921 7.10445C11.6921 7.49842 11.7357 7.88196 11.8196 8.2499C7.72744 8.04024 4.09931 6.03938 1.67072 2.99861C1.24697 3.74091 1.00416 4.60435 1.00416 5.52531C1.00416 7.26904 1.8735 8.80732 3.19462 9.70866C2.4127 9.68366 1.64798 9.4681 0.964313 9.07995C0.964031 9.10101 0.964031 9.12206 0.964031 9.14321C0.964031 11.5783 2.66128 13.6097 4.91372 14.0714C4.18864 14.2727 3.42809 14.3022 2.69016 14.1576C3.31669 16.1543 5.13516 17.6073 7.28972 17.648C5.60456 18.9959 3.48141 19.7995 1.17459 19.7995C0.777094 19.7995 0.385219 19.7756 0 19.7292C2.17903 21.1553 4.76719 21.9873 7.54781 21.9873C16.6047 21.9873 21.5573 14.3289 21.5573 7.68732C21.5573 7.46933 21.5526 7.25258 21.543 7.03708C22.507 6.32578 23.339 5.44475 24 4.43536Z"
          fill="#55acee"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_1344">
          <path fill="#fff" transform="translate(0 2)" d="M0 0H24V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Twitter.displayName = "Twitter";

Twitter.metadata = {
  name: "Twitter",
  category: "icon/social",
  tags: ["twitter", "icon"],
  description: "Twitter icon from icon/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Twitter;
