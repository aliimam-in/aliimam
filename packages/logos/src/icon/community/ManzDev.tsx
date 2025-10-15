import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ManzDev: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ManzDev(
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
      <g clipPath="url(#undefined-clip0_2062_2373)">
        <path
          d="M4.11896 18.6592L5.57326 18.4999L5.42365 17.1339L3.96935 17.2932L2.74809 6.14185L4.15907 5.98732L4.00455 4.57634L5.45885 4.41706L5.29465 2.91778L16.401 1.70144L16.5798 3.33399L19.2685 3.03953L19.8815 8.63684L18.5155 8.78644L20.3545 25.5784L5.01686 27.2581L4.11896 18.6592Z"
          fill="#fff"
        />
        <path
          d="M6.26507 25.4966L5.6541 19.9179L7.07276 19.7625L6.92227 18.3884L8.29639 18.2379L8.15078 16.9083L6.78009 17.0584L6.62472 15.6398L5.2506 15.7903L4.34279 7.50103L5.76145 7.34566L5.61133 5.97497L6.98202 5.82485L6.82628 4.40276L15.1189 3.49457L15.2743 4.91323L17.9746 4.61751L18.2755 7.36574L16.9014 7.51623L18.7927 24.1523L6.26507 25.4966Z"
          fill="currentColor"
        />
        <path
          d="M16.944 7.55666L14.1581 7.86177L14.0027 6.44311L8.50968 7.04469L8.81066 9.79293L7.38857 9.94867L7.99053 15.4451L9.36465 15.2946L9.51476 16.6653L12.3075 16.3595L12.4682 17.8261L15.1718 17.53L15.0217 16.1593L13.6476 16.3098L13.487 14.8432L16.2798 14.5373L16.5905 17.3746L18.0092 17.2193L16.944 7.55666Z"
          fill="#cc984f"
        />
        <path
          d="M14.1087 7.82201L8.66019 8.41872L8.8058 9.74829L7.38371 9.90403L7.84006 14.0709L9.21418 13.9204L9.36955 15.3391L16.2915 14.581L16.4416 15.9517L17.8534 15.7971L16.9426 7.51165L14.1087 7.82201Z"
          fill="#ffcc80"
        />
        <path
          d="M10.1368 9.64771L11.6034 9.48708L11.9145 12.3278L10.4479 12.4885L10.1368 9.64771ZM14.3071 9.19098L15.7737 9.03036L16.0848 11.8711L14.6182 12.0317L14.3071 9.19098Z"
          fill="currentColor"
        />
        <path
          d="M11.933 12.302 16.099 11.845 16.245 13.175 12.078 13.631 11.933 12.302ZM14.153 7.817 16.905 7.516 17.055 8.886 14.303 9.188 14.153 7.817Z"
          fill="#ebb267"
        />
        <path
          d="M6.1153 24.1293L8.86353 23.8283L9.00914 25.1579L6.26091 25.4588L6.1153 24.1293Z"
          fill="#cc984f"
        />
        <path
          d="M11.8331 24.8833L11.5352 22.1625L15.8361 21.6949L16.1352 24.426L11.8331 24.8833Z"
          fill="#0d2061"
        />
        <path
          d="M12.785 20.559 14.21 20.403 14.37 21.859 12.944 22.015 12.785 20.559ZM14.563 23.242 15.988 23.086 16.134 24.419 14.709 24.575 14.563 23.242Z"
          fill="#17ffff"
        />
        <path
          d="M13.1168 23.4006L14.5595 23.2426L14.7055 24.5756L13.2628 24.7336L13.1168 23.4006Z"
          fill="#e65100"
        />
        <path
          d="M11.5321 22.1663L12.9576 22.0101L13.1115 23.4151L11.686 23.5712L11.5321 22.1663Z"
          fill="#cc2554"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2373">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

ManzDev.displayName = "ManzDev";

ManzDev.metadata = {
  name: "ManzDev",
  category: "icon/community",
  tags: ["manz", "dev", "icon"],
  description: "ManzDev icon from icon/community category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ManzDev;
