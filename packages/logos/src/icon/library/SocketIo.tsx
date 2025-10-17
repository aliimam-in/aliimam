import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SocketIo: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SocketIo(
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
      <g clipPath="url(#undefined-clip0_2066_931)">
        <path
          d="M23.9955 11.7356C23.9302 7.72312 21.693 3.81637 18.2317 1.75912C15.5047 0.0607452 12.06 -0.39638 8.95721 0.38737C4.28733 1.563 0.56433 5.79224 0.0910803 10.6125C-0.49692 15.165 1.80558 19.8997 5.74046 22.2345C9.59396 24.651 14.8353 24.5531 18.603 22.0095C21.9993 19.8052 24.1057 15.7845 23.9917 11.739L23.9955 11.7356ZM12.6637 22.2187C7.21008 22.7576 1.93608 18.1369 1.78871 12.6667C1.37621 8.22562 4.30308 3.83325 8.48321 2.36362C14.3452 0.0123702 21.546 4.35562 22.1501 10.6425C23.0973 16.2915 18.3948 22.0425 12.6637 22.2187ZM9.07496 11.3925L16.9612 4.9425L12.6997 11.4086C11.4915 11.4086 10.2832 11.409 9.07496 11.3925ZM11.2923 12.585L14.9171 12.6015L7.03083 19.0676L11.2923 12.585Z"
          fill="#010101"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_931">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

SocketIo.displayName = "SocketIo";

SocketIo.metadata = {
  name: "SocketIo",
  category: "icon/library",
  tags: ["socket", "io", "icon"],
  description: "SocketIo icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SocketIo;
