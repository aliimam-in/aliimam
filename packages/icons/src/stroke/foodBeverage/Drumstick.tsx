import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Drumstick: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Drumstick(
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
        d="M15.4 15.63C13.9034 16.1102 12.4187 16.1218 11.1644 15.6632C9.91006 15.2046 8.95243 14.2999 8.43242 13.0823C7.9124 11.8647 7.85747 10.3986 8.2757 8.89964C8.69392 7.40068 9.56322 5.9481 10.7557 4.75566C11.9481 3.56322 13.4007 2.69392 14.8996 2.2757C16.3986 1.85747 17.8647 1.9124 19.0823 2.43242C20.2999 2.95243 21.2046 3.91006 21.6632 5.16436C22.1218 6.41866 22.1102 7.90338 21.63 9.40002C20.9352 9.00368 20.0543 8.90509 19.1354 9.12084C18.2166 9.33659 17.3158 9.85351 16.5847 10.5847C15.8535 11.3158 15.3366 12.2166 15.1208 13.1354C14.9051 14.0543 15.0037 14.9352 15.4 15.63Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29001 12.71L5.69001 15.31C5.37247 15.1351 5.02068 15.0313 4.65903 15.0059C4.29739 14.9804 3.93454 15.034 3.59564 15.1627C3.25674 15.2915 2.94991 15.4924 2.69641 15.7516C2.44291 16.0108 2.24881 16.322 2.12757 16.6637C2.00634 17.0053 1.96086 17.3693 1.9943 17.7303C2.02774 18.0913 2.13929 18.4407 2.32122 18.7543C2.50315 19.0679 2.75111 19.3381 3.0479 19.5463C3.3447 19.7545 3.68322 19.8957 4.04001 19.96C4.11002 20.3122 4.25505 20.6451 4.46525 20.9362C4.67545 21.2272 4.94588 21.4696 5.25814 21.6468C5.5704 21.824 5.91716 21.9319 6.27484 21.9631C6.63252 21.9943 6.99272 21.9481 7.33094 21.8276C7.66915 21.7071 7.97745 21.5152 8.23486 21.2649C8.49226 21.0146 8.69274 20.7118 8.82264 20.3771C8.95255 20.0424 9.00883 19.6836 8.98767 19.3252C8.96651 18.9668 8.8684 18.6171 8.70001 18.3L11.29 15.71"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Drumstick.displayName = "Drumstick";

Drumstick.metadata = {
  name: "Drumstick",
  category: "stroke/foodBeverage",
  tags: ["drumstick", "icon"],
  description: "Drumstick icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Drumstick;
