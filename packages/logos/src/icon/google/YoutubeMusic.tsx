import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const YoutubeMusic: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function YoutubeMusic(
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
      <g clipPath="url(#undefined-clip0_2062_2732)">
        <path
          d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
          fill="red"
        />
        <path
          d="M12 6.28999C15.1487 6.28999 17.71 8.85124 17.71 12C17.71 15.1487 15.1487 17.71 12 17.71C8.85124 17.71 6.28999 15.1487 6.28999 12C6.28999 8.85124 8.85124 6.28999 12 6.28999ZM12 5.48999C8.40499 5.48999 5.48999 8.40499 5.48999 12C5.48999 15.595 8.40499 18.51 12 18.51C15.595 18.51 18.51 15.595 18.51 12C18.51 8.40499 15.595 5.48999 12 5.48999Z"
          fill="#fff"
        />
        <path d="M9.875 15.25L15.5 12L9.875 8.75V15.25Z" fill="#fff" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2732">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

YoutubeMusic.displayName = "YoutubeMusic";

YoutubeMusic.metadata = {
  name: "YoutubeMusic",
  category: "icon/google",
  tags: ["youtube", "music", "icon"],
  description: "YoutubeMusic icon from icon/google category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default YoutubeMusic;
