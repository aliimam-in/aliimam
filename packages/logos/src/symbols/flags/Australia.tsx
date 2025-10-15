import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Australia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Australia(
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
        fill="#061b65"
      />
      <path
        d="M6.5 13.774V16H10.5V13.773L13.537 16H16V14.759L12.238 12H16V8H13.26L16 5.991V4H14.559L10.5 6.977V4H6.5V6.794L3.243 4.405C2.476 4.779 1.854 5.388 1.457 6.143L3.989 8.001H1V12.001H4.763L1 14.761V16.001H3.464L6.5 13.774Z"
        fill="#fff"
      />
      <path
        d="M1.805 5.589 5.09 8H6.454L2.359 4.995C2.155 5.175 1.969 5.372 1.805 5.589ZM1 16 6.454 12V13L2.363 16H1Z"
        fill="#d22d32"
      />
      <path
        d="M6.838 18.741 7.374 20.407 9.01 19.787 8.042 21.244 9.547 22.137 7.804 22.289 8.044 24.022 6.839 22.754 5.634 24.022 5.874 22.289 4.131 22.137 5.636 21.244 4.668 19.787 6.304 20.407 6.84 18.741H6.838ZM23.113 21.755 23.404 22.661 24.294 22.324 23.767 23.117 24.586 23.603 23.638 23.685 23.769 24.628 23.113 23.938 22.457 24.628 22.588 23.685 21.64 23.603 22.459 23.117 21.932 22.324 22.822 22.661 23.113 21.755ZM20.166 13.127 20.457 14.033 21.347 13.696 20.82 14.489 21.639 14.975 20.691 15.057 20.822 16 20.166 15.31 19.51 16 19.641 15.057 18.693 14.975 19.512 14.489 18.985 13.696 19.875 14.033 20.166 13.127ZM23.43 7.127 23.721 8.033 24.611 7.696 24.084 8.489 24.903 8.975 23.955 9.057 24.086 10 23.43 9.31 22.774 10 22.905 9.057 21.957 8.975 22.776 8.489 22.249 7.696 23.139 8.033 23.43 7.127ZM28.132 10.817 28.423 11.723 29.313 11.386 28.786 12.179 29.605 12.665 28.657 12.747 28.788 13.69 28.132 13 27.476 13.69 27.607 12.747 26.659 12.665 27.478 12.179 26.951 11.386 27.841 11.723 28.132 10.817ZM25.742 16 25.972 16.565 26.58 16.61 26.114 17.003 26.26 17.595 25.742 17.274 25.224 17.595 25.37 17.003 24.904 16.61 25.512 16.565 25.742 16Z"
        fill="#fff"
      />
      <path d="M9.5 16H7.5V11H1V9H7.5V4H9.5V9H16V11H9.5V16Z" fill="#d22d32" />
      <path
        d="M16 15.667 11 12V13L15.091 16H16V15.667ZM16 4H15.752L10.291 8.004H11.655L16 4.818V4Z"
        fill="#d22d32"
      />
    </svg>
  );
});

Australia.displayName = "Australia";

Australia.metadata = {
  name: "Australia",
  category: "symbols/flags",
  tags: ["australia", "icon"],
  description: "Australia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Australia;
