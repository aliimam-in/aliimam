import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract02: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract02(
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
      <g clipPath="url(#undefined-clip0_2072_72)">
        <path
          d="M4.30318 16.5423C4.14192 16.4973 3.97878 16.4598 3.81002 16.4354C3.40873 16.3754 3.04308 16.2685 2.70555 16.1316L16.1316 2.70371C16.2685 3.04124 16.3735 3.40689 16.4354 3.80817C16.4598 3.97693 16.4991 4.14007 16.5423 4.30133L4.30318 16.5423ZM1.45858 15.3684C1.09293 15.044 0.796655 14.6634 0.567887 14.249L14.249 0.567918C14.6634 0.796685 15.0421 1.09296 15.3684 1.45861L1.45858 15.3684ZM0.0578472 12.7507C-0.0565368 12.0288 -0.00215749 11.2806 0.215359 10.5831L3.05246 7.74598C3.29247 7.67097 3.54187 7.60909 3.80814 7.56784C5.74892 7.27157 7.27154 5.74895 7.56593 3.80817C7.60719 3.5419 7.66907 3.29251 7.74407 3.05249L10.583 0.21539C11.2806 -0.00212697 12.0288 -0.0565062 12.7507 0.0578777L0.0578472 12.7507ZM7.78908 21.0933C7.69157 20.8139 7.61656 20.5138 7.56781 20.1951C7.53031 19.9476 7.47218 19.7075 7.39717 19.4769L19.4769 7.39533C19.7075 7.47033 19.9475 7.52846 20.195 7.56784C20.5157 7.61659 20.8138 7.6916 21.0932 7.78911L7.78908 21.0933ZM6.70337 18.1587C6.41647 17.7799 6.06769 17.448 5.67579 17.178L17.1779 5.67769C17.448 6.0696 17.7799 6.41837 18.1586 6.70527L6.70337 18.1605V18.1587ZM23.8891 13.0283L20.5532 16.3642C20.4351 16.3923 20.3169 16.4167 20.1932 16.4354C18.2524 16.7298 16.7298 18.2543 16.4335 20.1951C16.4147 20.3188 16.3885 20.437 16.3622 20.5551L13.0264 23.891C12.3644 24.0354 11.6725 24.0391 11.0087 23.8985L23.8966 11.0106C24.0372 11.6725 24.0335 12.3663 23.8891 13.0283ZM9.57234 23.3266C9.17293 23.0809 8.81103 22.7659 8.50538 22.3852L22.3871 8.50541C22.7677 8.81106 23.0828 9.17297 23.3284 9.57237L9.57234 23.3266Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2072_72">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Abstract02.displayName = "Abstract02";

Abstract02.metadata = {
  name: "Abstract02",
  category: "shapes/abstract",
  tags: ["abstract", "02", "icon"],
  description: "Abstract02 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract02;
