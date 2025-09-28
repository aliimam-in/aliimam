import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Meta: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Meta(
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
          d="M2.59228 14.4923C2.59228 15.4069 2.79347 16.1091 3.05634 16.5339C3.40106 17.0903 3.91509 17.326 4.43925 17.326C5.11528 17.326 5.73375 17.1586 6.9255 15.5135C7.88034 14.1949 9.00544 12.344 9.76237 11.1836L11.0444 9.21778C11.9349 7.85254 12.9656 6.33488 14.1475 5.30611C15.1121 4.46643 16.1529 4 17.2003 4C18.9589 4 20.6339 5.01708 21.9159 6.92463C23.3189 9.01371 24 11.6451 24 14.3606C24 15.9749 23.6812 17.1611 23.1387 18.0982C22.6146 19.0045 21.593 19.91 19.8745 19.91V17.326C21.3459 17.326 21.7132 15.9766 21.7132 14.4323C21.7132 12.2316 21.199 9.78919 20.0665 8.04416C19.2627 6.80627 18.2212 6.04996 17.0753 6.04996C15.8359 6.04996 14.8385 6.98283 13.7176 8.64646C13.1217 9.5302 12.5099 10.6073 11.8231 11.8225L11.0669 13.1595C9.54787 15.8475 9.16313 16.4597 8.40366 17.4701C7.07241 19.2395 5.93578 19.91 4.43925 19.91C2.66409 19.91 1.54144 19.1427 0.846281 17.9866C0.278719 17.0445 0 15.8084 0 14.3998L2.59228 14.4923Z"
          fill="#0081fb"
        />
        <path
          d="M2.04395 7.10699C3.23251 5.27869 4.94757 4 6.91473 4C8.05407 4 9.18657 4.33656 10.3692 5.3003C11.6628 6.35397 13.0416 8.08908 14.7617 10.9488L15.3786 11.9749C16.8674 14.4506 17.7145 15.7242 18.2103 16.3249C18.848 17.0961 19.2945 17.326 19.8745 17.326C21.3459 17.326 21.7132 15.9766 21.7132 14.4323L24 14.3606C24 15.9749 23.6813 17.1611 23.1387 18.0982C22.6146 19.0045 21.593 19.91 19.8745 19.91C18.8063 19.91 17.8599 19.6784 16.8132 18.693C16.0087 17.9367 15.0681 16.593 14.3444 15.3852L12.1919 11.7967C11.112 9.99579 10.1213 8.6531 9.54798 8.04491C8.93129 7.39106 8.13835 6.60136 6.8731 6.60136C5.84907 6.60136 4.97935 7.31864 4.25157 8.41563L2.04395 7.10699Z"
          fill="url(#undefined-paint0_linear_2041_125)"
        />
        <path
          d="M6.873 6.60136C5.84897 6.60136 4.97925 7.31864 4.25147 8.41563C3.22247 9.96585 2.59228 12.2748 2.59228 14.4923C2.59228 15.4069 2.79347 16.1091 3.05634 16.5339L0.846281 17.9866C0.278719 17.0445 0 15.8084 0 14.3998C0 11.8383 0.704438 9.16866 2.04394 7.10699C3.2325 5.27869 4.94756 4 6.91472 4L6.873 6.60136Z"
          fill="url(#undefined-paint1_linear_2041_125)"
        />
        <defs>
          <linearGradient
            id="undefined-paint0_linear_2041_125"
            x1="306.75"
            y1="893.909"
            x2="1957.29"
            y2="977.435"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0064e1" />
            <stop offset=".4" stopColor="#0064e1" />
            <stop offset=".83" stopColor="#0073ee" />
            <stop offset="1" stopColor="#0082fb" />
          </linearGradient>
          <linearGradient
            id="undefined-paint1_linear_2041_125"
            x1="375.573"
            y1="1161.84"
            x2="375.573"
            y2="553.772"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0082fb" />
            <stop offset="1" stopColor="#0064e0" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

Meta.displayName = "Meta";

Meta.metadata = {
  name: "Meta",
  category: "icon/social",
  tags: ["meta", "icon"],
  description: "Meta icon from icon/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Meta;
