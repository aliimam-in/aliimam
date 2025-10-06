import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface VideoOffProps extends IconProps {
  type?: "stroke";
}

export const VideoOff: IconComponent<VideoOffProps> = React.forwardRef<
  SVGSVGElement,
  VideoOffProps
>(function VideoOff(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M10.66 6H14C14.53 6 15.039 6.211 15.414 6.586 15.789 6.961 16 7.47 16 8V10.5L21.248 7.438C21.324 7.394 21.41 7.37 21.498 7.37 21.586 7.37 21.673 7.392 21.749 7.436 21.825 7.48 21.889 7.543 21.933 7.619 21.977 7.696 22 7.782 22 7.87V16.066M16 16C16 16.53 15.789 17.039 15.414 17.414 15.039 17.789 14.53 18 14 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H6M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M10.66 6H14C14.53 6 15.039 6.211 15.414 6.586 15.789 6.961 16 7.47 16 8V10.5L21.248 7.438C21.324 7.394 21.41 7.37 21.498 7.37 21.586 7.37 21.673 7.392 21.749 7.436 21.825 7.48 21.889 7.543 21.933 7.619 21.977 7.696 22 7.782 22 7.87V16.066M16 16C16 16.53 15.789 17.039 15.414 17.414 15.039 17.789 14.53 18 14 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H6M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`VideoOff doesn't support ${type}`);
  return null;
});

VideoOff.displayName = "VideoOff";

VideoOff.metadata = {
  name: "VideoOff",
  category: "stroke/connectivity",
  tags: ["video", "off", "icon"],
  description: "VideoOff icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VideoOff;
