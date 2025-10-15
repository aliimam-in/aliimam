import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Polygon: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Polygon(
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
      <g clipPath="url(#undefined-clip0_2062_2936)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#8247e5"
        />
        <path
          d="M16.1147 9.3027C15.8227 9.13603 15.4467 9.13603 15.112 9.3027L12.7727 10.6814L11.186 11.5587L8.888 12.9374C8.59533 13.104 8.21933 13.104 7.88533 12.9374L6.08867 11.8507C5.93606 11.7608 5.80955 11.6327 5.72163 11.4789C5.6337 11.3252 5.58742 11.1511 5.58733 10.974V8.88537C5.58733 8.5507 5.754 8.2167 6.08867 8.00803L7.88533 6.96337C8.17733 6.7967 8.55333 6.7967 8.888 6.96337L10.684 8.05003C10.9767 8.2167 11.1853 8.5507 11.1853 8.9267V10.3054L12.7727 9.3867V7.9667C12.7727 7.63203 12.606 7.29737 12.2713 7.0887L8.92933 5.12537C8.63733 4.9587 8.26133 4.9587 7.92667 5.12537L4.50133 7.1307C4.16733 7.29737 4 7.63203 4 7.96603V11.8927C4 12.2274 4.16667 12.5614 4.50133 12.77L7.88533 14.734C8.17733 14.9007 8.55333 14.9007 8.888 14.734L11.1853 13.3967L12.7727 12.478L15.0707 11.1407C15.3627 10.974 15.7387 10.974 16.0733 11.1407L17.8693 12.1854C18.162 12.352 18.3707 12.6867 18.3707 13.0627V15.1514C18.3707 15.4854 18.204 15.82 17.8693 16.0287L16.1147 17.0734C15.8227 17.24 15.4467 17.24 15.112 17.0734L13.316 16.0287C13.1633 15.9388 13.0367 15.8105 12.9488 15.6566C12.8609 15.5028 12.8146 15.3286 12.8147 15.1514V13.8147L11.2267 14.7334V16.1114C11.2267 16.446 11.3933 16.78 11.728 16.9887L15.1113 18.9527C15.404 19.1194 15.78 19.1194 16.114 18.9527L19.498 16.9887C19.7907 16.822 19.9993 16.4874 19.9993 16.1114V12.1427C19.9993 11.8094 19.8327 11.4747 19.498 11.2654L16.114 9.30203L16.1147 9.3027Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2936">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Polygon.displayName = "Polygon";

Polygon.metadata = {
  name: "Polygon",
  category: "icon/crypto",
  tags: ["polygon", "icon"],
  description: "Polygon icon from icon/crypto category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polygon;
