import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const DailyDev: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function DailyDev(
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
        opacity=".56"
        d="M18.888 11.9664L16.7682 9.84663L17.8272 7.72803L21.2712 11.172C21.4818 11.3828 21.6001 11.6685 21.6001 11.9664C21.6001 12.2644 21.4818 12.5501 21.2712 12.7608L17.0322 16.9992C16.8198 17.2013 16.5368 17.3124 16.2436 17.3087C15.9504 17.3051 15.6703 17.187 15.4629 16.9797C15.2556 16.7724 15.1375 16.4922 15.1339 16.199C15.1302 15.9059 15.2413 15.6229 15.4434 15.4104L18.888 11.9664Z"
        fill="#151618"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M15.444 6.92882C15.5484 6.82445 15.6723 6.74165 15.8086 6.68517C15.945 6.62868 16.0911 6.59961 16.2387 6.59961C16.3863 6.59961 16.5324 6.62868 16.6688 6.68517C16.8052 6.74165 16.9291 6.82445 17.0334 6.92882L17.8278 7.72382L8.55661 16.995C8.45225 17.0994 8.32836 17.1822 8.192 17.2387C8.05565 17.2952 7.9095 17.3242 7.76191 17.3242C7.61432 17.3242 7.46817 17.2952 7.33182 17.2387C7.19546 17.1822 7.07157 17.0994 6.96721 16.995L6.17281 16.2006L15.444 6.92882ZM11.4708 9.84302L9.88081 11.4324L7.76161 9.31262L5.11261 11.9622L7.23181 14.0814L6.17281 16.2006L2.72881 12.7566C2.51821 12.5459 2.3999 12.2601 2.3999 11.9622C2.3999 11.6643 2.51821 11.3786 2.72881 11.1678L6.96721 6.92942C7.07158 6.82496 7.19551 6.74209 7.33192 6.68555C7.46833 6.62901 7.61455 6.59991 7.76221 6.59991C7.90987 6.59991 8.05609 6.62901 8.1925 6.68555C8.32891 6.74209 8.45284 6.82496 8.55721 6.92942L11.4708 9.84302Z"
        fill="#151618"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

DailyDev.displayName = "DailyDev";

DailyDev.metadata = {
  name: "DailyDev",
  category: "icon/community",
  tags: ["daily", "dev", "icon"],
  description: "DailyDev icon from icon/community category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DailyDev;
