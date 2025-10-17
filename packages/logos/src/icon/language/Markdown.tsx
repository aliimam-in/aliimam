import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Markdown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Markdown(
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
      <g fill="currentColor" clipPath="url(#undefined-clip0_2066_1148)">
        <path
          d="M1.73077 5.17188C1.57776 5.17188 1.43102 5.23361 1.32282 5.34349C1.21463 5.45338 1.15385 5.60241 1.15385 5.75781V17.2422C1.15385 17.3976 1.21463 17.5466 1.32282 17.6565C1.43102 17.7664 1.57776 17.8281 1.73077 17.8281H22.2692C22.4222 17.8281 22.569 17.7664 22.6772 17.6565C22.7854 17.5466 22.8462 17.3976 22.8462 17.2422V5.75781C22.8462 5.60241 22.7854 5.45338 22.6772 5.34349C22.569 5.23361 22.4222 5.17188 22.2692 5.17188H1.73077ZM0 5.75781C0 5.29161 0.182348 4.84451 0.506931 4.51485C0.831513 4.1852 1.27174 4 1.73077 4H22.2692C22.7283 4 23.1685 4.1852 23.4931 4.51485C23.8177 4.84451 24 5.29161 24 5.75781V17.2422C24 17.7084 23.8177 18.1555 23.4931 18.4851C23.1685 18.8148 22.7283 19 22.2692 19H1.73077C1.27174 19 0.831513 18.8148 0.506931 18.4851C0.182348 18.1555 0 17.7084 0 17.2422L0 5.75781Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M3.46153 15.4844V7.51562H5.76922L8.07692 10.4453L10.3846 7.51562H12.6923V15.4844H10.3846V10.9141L8.07692 13.8438L5.76922 10.9141V15.4844H3.46153ZM17.8846 15.4844L14.4231 11.6172H16.7308V7.51562H19.0385V11.6172H21.3461L17.8846 15.4844Z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_1148">
          <path fill="#fff" transform="translate(0 4)" d="M0 0H24V15H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Markdown.displayName = "Markdown";

Markdown.metadata = {
  name: "Markdown",
  category: "icon/language",
  tags: ["markdown", "icon"],
  description: "Markdown icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Markdown;
