import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SendProps extends IconProps {
  type?: "stroke";
}

export const Send: IconComponent<SendProps> = React.forwardRef<
  SVGSVGElement,
  SendProps
>(function Send(
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
          d="M14.536 21.686C14.574 21.781 14.64 21.862 14.725 21.918 14.811 21.974 14.911 22.002 15.013 22 15.115 21.997 15.214 21.963 15.296 21.903 15.378 21.843 15.44 21.759 15.473 21.662L21.973 2.662C22.005 2.573 22.011 2.478 21.991 2.386 21.97 2.294 21.924 2.209 21.857 2.143 21.791 2.076 21.706 2.03 21.615 2.009 21.523 1.989 21.427 1.995 21.338 2.027L2.338 8.527C2.242 8.56 2.157 8.622 2.097 8.704 2.037 8.786 2.003 8.885 2 8.987 1.998 9.089 2.026 9.189 2.083 9.275 2.139 9.36 2.219 9.426 2.314 9.464L10.244 12.644C10.495 12.744 10.723 12.895 10.914 13.085 11.105 13.276 11.255 13.504 11.356 13.754L14.536 21.686ZM21.854 2.147 10.914 13.086"
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
          d="M14.536 21.686C14.574 21.781 14.64 21.862 14.725 21.918 14.811 21.974 14.911 22.002 15.013 22 15.115 21.997 15.214 21.963 15.296 21.903 15.378 21.843 15.44 21.759 15.473 21.662L21.973 2.662C22.005 2.573 22.011 2.478 21.991 2.386 21.97 2.294 21.924 2.209 21.857 2.143 21.791 2.076 21.706 2.03 21.615 2.009 21.523 1.989 21.427 1.995 21.338 2.027L2.338 8.527C2.242 8.56 2.157 8.622 2.097 8.704 2.037 8.786 2.003 8.885 2 8.987 1.998 9.089 2.026 9.189 2.083 9.275 2.139 9.36 2.219 9.426 2.314 9.464L10.244 12.644C10.495 12.744 10.723 12.895 10.914 13.085 11.105 13.276 11.255 13.504 11.356 13.754L14.536 21.686ZM21.854 2.147 10.914 13.086"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Send doesn't support ${type}`);
  return null;
});

Send.displayName = "Send";

Send.metadata = {
  name: "Send",
  category: "stroke/connectivity",
  tags: ["send", "icon"],
  description: "Send icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Send;
