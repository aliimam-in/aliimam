import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MicrosoftNet: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MicrosoftNet(
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
      <g clipPath="url(#undefined-clip0_2066_381)">
        <path d="M0 0H24V24H0V0Z" fill="#512bd4" />
        <path
          d="M4.2777 15.3333C4.10801 15.3333 3.96375 15.2768 3.84496 15.1637C3.72617 15.0477 3.66675 14.9099 3.66675 14.7505C3.66675 14.5881 3.72617 14.4489 3.84496 14.3329C3.96375 14.2169 4.10801 14.1589 4.2777 14.1589C4.45022 14.1589 4.59585 14.2169 4.71464 14.3329C4.83627 14.4489 4.89706 14.5881 4.89706 14.7505C4.89706 14.9099 4.83627 15.0477 4.71464 15.1637C4.59585 15.2768 4.45022 15.3333 4.2777 15.3333ZM11.0615 15.2376H9.95849L7.05243 10.6529C6.97988 10.5389 6.91877 10.418 6.87001 10.2919H6.84454C6.86717 10.4253 6.87848 10.7109 6.87848 11.1488V15.2376H5.9027V9H7.07785L9.88638 13.4759C10.0052 13.6616 10.0815 13.7892 10.1155 13.8587H10.1324C10.1042 13.6935 10.09 13.4136 10.09 13.0192V9H11.0615V15.2376ZM15.8132 15.2376H12.3981V9H15.6775V9.87868H13.4078V11.6447H15.4993V12.519H13.4078V14.3633H15.8132V15.2376ZM20.6668 9.87868H18.9189V15.2376H17.9092V9.87868H16.1655V9H20.6668V9.87868Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_381">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

MicrosoftNet.displayName = "MicrosoftNet";

MicrosoftNet.metadata = {
  name: "MicrosoftNet",
  category: "icon/devtool",
  tags: ["microsoft", "net", "icon"],
  description: "MicrosoftNet icon from icon/devtool category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MicrosoftNet;
