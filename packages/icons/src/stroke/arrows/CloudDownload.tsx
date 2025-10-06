import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CloudDownload: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CloudDownload(
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
        d="M12 13V21L8 17M12 21 16 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.39303 15.269C3.57629 14.5545 2.93685 13.6599 2.5252 12.6559C2.11354 11.6519 1.94095 10.5659 2.02105 9.48372C2.10115 8.40154 2.43175 7.3528 2.98674 6.42032C3.54173 5.48783 4.30591 4.69715 5.21894 4.11071C6.13197 3.52426 7.16883 3.15812 8.24766 3.04119C9.32648 2.92426 10.4177 3.05974 11.4352 3.43694C12.4527 3.81414 13.3685 4.42273 14.1104 5.21464C14.8523 6.00656 15.3999 6.96011 15.71 8H17.5C18.4721 7.99987 19.4181 8.31452 20.1964 8.89685C20.9747 9.47919 21.5436 10.2979 21.8178 11.2305C22.092 12.1631 22.0569 13.1594 21.7177 14.0703C21.3785 14.9813 20.7534 15.7579 19.936 16.284"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CloudDownload.displayName = "CloudDownload";

CloudDownload.metadata = {
  name: "CloudDownload",
  category: "stroke/arrows",
  tags: ["cloud", "download", "icon"],
  description: "CloudDownload icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudDownload;
