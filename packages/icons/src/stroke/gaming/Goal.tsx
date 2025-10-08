import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Goal: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Goal(
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
          d="M12 13V2L20 6L12 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.561 10.222C21.0932 11.8621 21.143 13.6206 20.7045 15.2883C20.266 16.9559 19.3577 18.4624 18.0876 19.6287C16.8175 20.7949 15.2392 21.5718 13.5403 21.8668C11.8414 22.1619 10.0935 21.9627 8.50461 21.2929C6.91568 20.6232 5.5526 19.5111 4.57753 18.0889C3.60246 16.6668 3.05645 14.9945 3.00446 13.2709C2.95247 11.5474 3.39668 9.84522 4.28425 8.36689C5.17182 6.88856 6.46539 5.69632 8.01105 4.93201"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.00202 9.99701C7.50092 10.664 7.1747 11.4458 7.05306 12.2712C6.93143 13.0966 7.01825 13.9392 7.30562 14.7225C7.59299 15.5057 8.07177 16.2045 8.69835 16.7554C9.32492 17.3062 10.0794 17.6915 10.893 17.8762C11.7065 18.0608 12.5534 18.039 13.3564 17.8126C14.1593 17.5862 14.8929 17.1625 15.4902 16.5801C16.0876 15.9977 16.5297 15.275 16.7762 14.478C17.0228 13.681 17.0661 12.835 16.902 12.017"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Goal.displayName = "Goal";

Goal.metadata = {
  name: "Goal",
  category: "stroke/gaming",
  tags: ["goal", "icon"],
  description: "Goal icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Goal;
