import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const JavaScript: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function JavaScript(
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
      <g clipPath="url(#undefined-clip0_2066_1134)">
        <path d="M0 0H24V24H0V0Z" fill="#f0db4f" />
        <path
          d="M22.0357 18.2761C21.8601 17.181 21.146 16.2616 19.0312 15.4038C18.2966 15.0662 17.4776 14.8244 17.2335 14.2677C17.1468 13.9438 17.1354 13.7613 17.1901 13.5651C17.3475 12.9286 18.1072 12.7301 18.7095 12.9126C19.0973 13.0426 19.4646 13.3415 19.6859 13.8183C20.7217 13.1476 20.7194 13.1521 21.4426 12.6913C21.1779 12.2807 21.0365 12.0913 20.8631 11.9157C20.2403 11.2198 19.3916 10.8617 18.0342 10.889C17.7992 10.9187 17.562 10.9506 17.327 10.9803C16.6495 11.1514 16.0038 11.5073 15.6251 11.9841C14.489 13.2731 14.8129 15.5293 16.1954 16.4579C17.5574 17.4799 19.5582 17.7126 19.8137 18.6685C20.0624 19.8388 18.9536 20.2175 17.8517 20.083C17.0395 19.9141 16.5879 19.5012 16.0996 18.7506C15.2008 19.2708 15.2008 19.2708 14.2768 19.8023C14.4958 20.2814 14.7262 20.4982 15.0936 20.9134C16.832 22.6769 21.1825 22.5902 21.9628 19.921C21.9947 19.8297 22.2046 19.2183 22.0357 18.2761ZM13.0471 11.0305H10.8023C10.8023 12.9696 10.7932 14.8951 10.7932 16.8343C10.7932 18.0685 10.8571 19.2 10.6563 19.5468C10.3278 20.2289 9.47683 20.1445 9.08899 20.0122C8.69432 19.8183 8.49356 19.5422 8.26086 19.1521C8.19698 19.0403 8.14907 18.9536 8.13308 18.9468C7.52398 19.3187 6.91711 19.6928 6.30798 20.0647C6.61143 20.6875 7.05855 21.2282 7.63118 21.5795C8.48669 22.0928 9.6365 22.2502 10.8388 21.9742C11.6213 21.746 12.2966 21.2738 12.6502 20.5552C13.1612 19.613 13.0517 18.4723 13.0471 17.2107C13.0586 15.1529 13.0471 13.0951 13.0471 11.0305Z"
          fill="#323330"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_1134">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

JavaScript.displayName = "JavaScript";

JavaScript.metadata = {
  name: "JavaScript",
  category: "icon/language",
  tags: ["java", "script", "icon"],
  description: "JavaScript icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default JavaScript;
