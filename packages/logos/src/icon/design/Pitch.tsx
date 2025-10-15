import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Pitch: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Pitch(
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
        <g clipPath="url(#undefined-clip0_2062_3154)">
          <path
            d="M21.9636 10.1538C21.7448 13.3661 19.1927 16.283 15.9844 16.3938V13.9569C15.9844 11.7415 14.4167 9.82149 12.2656 9.37842L4.2448 7.79072V2.36303C4.2448 0.886108 5.5573 -0.221584 7.01564 0.0738005L15.2917 1.69842C19.8125 2.69534 22.2552 6.23995 21.9636 10.1538ZM7.08855 17.8338L2.34897 16.9107C1.65626 16.763 1.03647 17.3169 1.03647 18.0184V21.3415C1.00001 22.1538 1.58334 22.8923 2.38543 23.04L7.12501 23.963C7.81772 24.1107 8.43751 23.5569 8.43751 22.8553V19.5323C8.47397 18.72 7.89064 18.0184 7.08855 17.8338ZM11.8646 11.2246L4.60939 9.78457C3.55209 9.56303 2.60418 10.3753 2.60418 11.483V15.1015H2.64064L7.38022 16.0246C9.02084 16.3569 10.224 17.8338 10.224 19.5323V20.2707L12.0469 20.64C13.1042 20.8615 14.0521 20.0492 14.0521 18.9415V13.9938C14.125 12.6276 13.1771 11.483 11.8646 11.2246Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_3154">
            <path fill="#fff" transform="translate(1)" d="M0 0H21V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Pitch.displayName = "Pitch";

Pitch.metadata = {
  name: "Pitch",
  category: "icon/design",
  tags: ["pitch", "icon"],
  description: "Pitch icon from icon/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pitch;
