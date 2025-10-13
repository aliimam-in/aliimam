import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Uruguay: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Uruguay(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#fff"
      />
      <path
        d="M1 19H31V22H1V19ZM30.859 25H1.141C1.587 26.722 3.138 28 5 28H27C28.862 28 30.412 26.722 30.859 25ZM15 13H31V16H15V13ZM30.859 7H15V10H31V8C31 7.653 30.942 7.321 30.859 7Z"
        fill="#1334a3"
      />
      <path d="M5 4H16V19H1V8C1 5.792 2.792 4 5 4Z" fill="#fff" />
      <path
        d="M12.069 12.513C11.772 12.434 11.422 12.342 11.001 11.955L13.5 11.501L10.87 11.023C12.124 10.544 11.81 9.65095 13.081 9.72595C11.945 9.03395 11.76 10.053 10.589 10.054L12.035 7.96595L9.85198 9.47795C10.424 8.22995 9.52598 7.85795 10.484 7.00695C9.19198 7.32095 9.78098 8.17195 8.95398 9.00095L8.49998 6.50195L8.02398 9.12095C7.54398 7.93295 6.64298 8.16595 6.72498 6.92095C6.03298 8.05695 7.05198 8.24195 7.05298 9.41295L4.96498 7.96695L6.47398 10.147C5.22698 9.57695 4.85598 10.477 4.00598 9.51895C4.31998 10.811 5.17098 10.222 5.99998 11.049L3.50098 11.503L6.11398 11.978C4.84398 12.457 5.19698 13.351 3.91998 13.278C4.93398 13.962 5.28598 12.968 6.41198 12.95L4.96598 15.038L7.14698 13.528C6.56998 14.781 7.47598 15.144 6.51698 15.998C7.80898 15.684 7.21998 14.833 8.04698 14.004L8.50098 16.503L8.97698 13.882C9.45598 15.148 10.349 14.808 10.276 16.084C10.968 14.948 9.94898 14.763 9.94798 13.592L12.036 15.038L10.525 12.856C11.761 13.415 12.144 12.532 12.995 13.487C12.858 12.874 12.481 12.57 12.069 12.515V12.513Z"
        fill="#f6d44a"
      />
    </svg>
  );
});

Uruguay.displayName = "Uruguay";

Uruguay.metadata = {
  name: "Uruguay",
  category: "flags/flags",
  tags: ["uruguay", "icon"],
  description: "Uruguay icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Uruguay;
