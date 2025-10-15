import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Twilio: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Twilio(
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
        <g fill="#e31e26" clipPath="url(#undefined-clip0_2062_2083)">
          <path d="M11.9824 0.0175781C5.37627 0.0175781 0 5.39384 0 12C0 18.6061 5.37627 23.9824 11.9824 23.9824C18.6237 24.0175 23.9999 18.6412 23.9999 12C23.9999 5.35871 18.6237 0.0175781 11.9824 0.0175781ZM11.9824 20.855C7.13322 20.855 3.16251 16.8843 3.16251 12C3.16251 7.15079 7.13322 3.18009 11.9824 3.18009C16.8667 3.18009 20.8374 7.15079 20.8374 12C20.8374 16.8843 16.8667 20.855 11.9824 20.855Z" />
          <path d="M14.969 11.508C16.347 11.508 17.464 10.391 17.464 9.013 17.464 7.635 16.347 6.518 14.969 6.518 13.591 6.518 12.474 7.635 12.474 9.013 12.474 10.391 13.591 11.508 14.969 11.508ZM14.969 17.482C16.347 17.482 17.464 16.365 17.464 14.987 17.464 13.609 16.347 12.492 14.969 12.492 13.591 12.492 12.474 13.609 12.474 14.987 12.474 16.365 13.591 17.482 14.969 17.482ZM8.996 17.482C10.374 17.482 11.491 16.365 11.491 14.987 11.491 13.609 10.374 12.492 8.996 12.492 7.618 12.492 6.501 13.609 6.501 14.987 6.501 16.365 7.618 17.482 8.996 17.482ZM8.996 11.508C10.374 11.508 11.491 10.391 11.491 9.013 11.491 7.635 10.374 6.518 8.996 6.518 7.618 6.518 6.501 7.635 6.501 9.013 6.501 10.391 7.618 11.508 8.996 11.508Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2083">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Twilio.displayName = "Twilio";

Twilio.metadata = {
  name: "Twilio",
  category: "icon/authentication",
  tags: ["twilio", "icon"],
  description: "Twilio icon from icon/authentication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Twilio;
