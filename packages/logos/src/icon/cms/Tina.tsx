import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tina: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Tina(
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
        <g fill="#ec4815" clipPath="url(#undefined-clip0_2062_2285)">
          <path d="M13.9058 10.6541C15.0502 9.69009 15.5573 3.99285 16.0527 1.94492C16.5481 -0.102987 18.597 0.000880983 18.597 0.000880983C18.597 0.000880983 18.0651 0.943675 18.2821 1.64723C18.499 2.35079 19.9853 2.97969 19.9853 2.97969L19.6647 3.8404C19.6647 3.8404 18.9953 3.7532 18.597 4.56471C18.1987 5.37619 19.096 13.3289 19.096 13.3289C19.096 13.3289 16.459 18.2207 16.459 20.2512C16.459 22.2817 17.4026 23.9835 17.4026 23.9835H16.0784C16.0784 23.9835 14.1358 21.629 13.7374 20.4523C13.339 19.2756 13.4983 18.0989 13.4983 18.0989C13.4983 18.0989 11.3868 17.9772 9.51442 18.0989C7.64202 18.2207 6.39332 19.8599 6.16795 20.7769C5.94259 21.6939 5.84924 23.9835 5.84924 23.9835H4.80219C4.16491 21.9804 3.65876 21.2626 3.93334 20.2512C4.6939 17.4497 4.54451 15.8608 4.36841 15.1532C4.19231 14.4454 3 13.8278 3 13.8278C3.58406 12.6159 4.18024 12.0335 6.7447 11.9728C9.30916 11.9121 12.7613 11.6182 13.9058 10.6541Z" />
          <path d="M7.04941 20.1339C7.04941 20.1339 7.31997 22.684 8.75738 23.9835H9.98919C8.75738 22.5623 8.62305 18.8577 8.62305 18.8577C7.99651 19.0654 7.1291 19.8093 7.04941 20.1339Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2285">
            <path fill="#fff" transform="translate(3)" d="M0 0H17V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Tina.displayName = "Tina";

Tina.metadata = {
  name: "Tina",
  category: "icon/cms",
  tags: ["tina", "icon"],
  description: "Tina icon from icon/cms category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tina;
