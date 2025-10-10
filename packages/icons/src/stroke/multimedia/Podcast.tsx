import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Podcast: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Podcast(
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
        d="M13 17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16C11.7348 16 11.4804 16.1054 11.2929 16.2929C11.1054 16.4804 11 16.7348 11 17L11.5 21.5C11.5 21.6326 11.5527 21.7598 11.6464 21.8536C11.7402 21.9473 11.8674 22 12 22C12.1326 22 12.2598 21.9473 12.3536 21.8536C12.4473 21.7598 12.5 21.6326 12.5 21.5L13 17Z"
        fill="currentColor"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.85 18.58C18.4894 17.5312 19.7447 15.9793 20.4276 14.1569C21.1106 12.3345 21.1844 10.3399 20.6381 8.47199C20.0917 6.6041 18.9546 4.96363 17.3972 3.79653C15.8399 2.62943 13.9462 1.9986 12 1.9986C10.0538 1.9986 8.16012 2.62943 6.60275 3.79653C5.04538 4.96363 3.90828 6.6041 3.36193 8.47199C2.81558 10.3399 2.88942 12.3345 3.57237 14.1569C4.25533 15.9793 5.51061 17.5312 7.15 18.58"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14C7.44287 13.2572 7.1036 12.3738 7.02021 11.449C6.93682 10.5242 7.1126 9.59446 7.52787 8.76393C7.94313 7.9334 8.58147 7.23492 9.37135 6.74675C10.1612 6.25857 11.0714 6 12 6C12.9286 6 13.8388 6.25857 14.6287 6.74675C15.4185 7.23492 16.0569 7.9334 16.4721 8.76393C16.8874 9.59446 17.0632 10.5242 16.9798 11.449C16.8964 12.3738 16.5571 13.2572 16 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z"
        fill="currentColor"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Podcast.displayName = "Podcast";

Podcast.metadata = {
  name: "Podcast",
  category: "stroke/multimedia",
  tags: ["podcast", "icon"],
  description: "Podcast icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Podcast;
