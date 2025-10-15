import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const DinersClub: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function DinersClub(
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
        d="M20.25 5.25H3.75C2.50736 5.25 1.5 6.25736 1.5 7.5V16.5C1.5 17.7426 2.50736 18.75 3.75 18.75H20.25C21.4926 18.75 22.5 17.7426 22.5 16.5V7.5C22.5 6.25736 21.4926 5.25 20.25 5.25Z"
        fill="#fff"
      />
      <path
        d="M11.3333 16.5C8.84325 16.5113 6.79425 14.4945 6.79425 12.039C6.79425 9.3555 8.84325 7.49925 11.3333 7.5H12.5003C14.9602 7.5 17.2058 9.35475 17.2058 12.039C17.2058 14.4938 14.9602 16.5 12.5003 16.5H11.3333ZM11.3438 7.872C9.06825 7.87275 7.22475 9.71625 7.22475 11.9918C7.22475 14.2665 9.06825 16.11 11.3438 16.1108C13.6193 16.1108 15.4628 14.2673 15.4635 11.9918C15.4635 9.71625 13.6193 7.87275 11.3438 7.872ZM10.4085 14.4278V9.555C9.42975 9.93225 8.73525 10.8795 8.73225 11.9918C8.7345 13.104 9.429 14.0512 10.4085 14.4278ZM13.9553 11.9918C13.953 10.8788 13.2578 9.93075 12.2783 9.55425V14.4285C13.2585 14.052 13.9538 13.104 13.9553 11.991"
        fill="#0d4e96"
      />
    </svg>
  );
});

DinersClub.displayName = "DinersClub";

DinersClub.metadata = {
  name: "DinersClub",
  category: "symbols/cards",
  tags: ["diners", "club", "icon"],
  description: "DinersClub icon from symbols/cards category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DinersClub;
