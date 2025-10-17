import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ahooks: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Ahooks(
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
        <g clipPath="url(#undefined-clip0_2066_897)">
          <path
            d="M24.0027 12.0014C24.0027 5.37319 18.6295 0 12.0014 0C5.37319 0 0 5.37319 0 12.0014C0 18.6295 5.37319 24.0027 12.0014 24.0027C18.6295 24.0027 24.0027 18.6295 24.0027 12.0014Z"
            fill="#4569d4"
          />
          <path
            d="M12.5274 11.0411C13.7422 10.9756 14.766 11.6465 15.5984 13.0538C15.4713 14.7774 15.2787 15.9589 15.0202 16.5993L15.2111 17.2702C15.2765 17.6553 15.4696 18.0082 15.7893 18.3284C16.2365 18.9027 16.4602 19.4138 16.4602 19.8611L14.8293 20.2429C14.1894 19.8611 13.7422 19.2862 13.4874 18.5193C12.4004 19.7334 11.346 20.3084 10.3238 20.2429C8.66236 20.0498 7.73508 19.0593 7.54199 17.2702C7.73508 13.9462 8.82217 11.9007 10.8038 11.1338C11.5058 10.9407 12.0802 10.9102 12.5274 11.0411ZM9.55472 16.1193L9.6529 17.2702C9.78054 17.7174 9.90763 17.9411 10.0347 17.9411H10.7056C11.6002 17.9411 12.4314 16.9827 13.1984 15.0665L13.4874 13.5338C13.2949 13.0865 12.9114 12.8629 12.3365 12.8629H12.2384C10.8349 12.8629 9.94036 13.9484 9.55472 16.1193Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_897">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Ahooks.displayName = "Ahooks";

Ahooks.metadata = {
  name: "Ahooks",
  category: "icon/library",
  tags: ["ahooks", "icon"],
  description: "Ahooks icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ahooks;
