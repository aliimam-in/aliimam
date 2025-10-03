import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HandProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Hand: IconComponent<HandProps> = React.forwardRef<
  SVGSVGElement,
  HandProps
>(function Hand(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "solid") {
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
        <g clipPath="url(#undefined-clip0_70_3499)">
          <path
            d="M12.1738 0.503906C13.0387 0.546877 13.8593 0.91017 14.4746 1.52539C14.7849 1.83567 15.0299 2.19872 15.2031 2.59277C15.4623 2.53208 15.7295 2.50002 16 2.5L16.1738 2.50391C17.0387 2.54688 17.8593 2.91017 18.4746 3.52539C18.7849 3.83567 19.0299 4.19872 19.2031 4.59277C19.4623 4.53209 19.7295 4.50002 20 4.5C20.9282 4.5 21.8182 4.86909 22.4746 5.52539C23.131 6.18177 23.5 7.07174 23.5 8V14C23.5 16.5196 22.4994 18.9362 20.7178 20.7178C18.9362 22.4993 16.5195 23.5 14 23.5H12C8.79707 23.4999 6.71893 22.4785 4.95312 20.7246L1.34961 17.1211C1.33165 17.1031 1.31389 17.0843 1.29687 17.0654C0.694799 16.3986 0.371816 15.5251 0.395504 14.627C0.419299 13.729 0.787546 12.8743 1.42382 12.2402C2.06018 11.6061 2.91634 11.2413 3.81445 11.2207C4.04569 11.2154 4.27533 11.233 4.5 11.2725V6C4.5 5.0718 4.86908 4.18176 5.52539 3.52539C6.18171 2.86907 7.07183 2.50006 8 2.5L8.17382 2.50391C8.38487 2.51439 8.59345 2.54417 8.79687 2.5918C8.97006 2.19805 9.21533 1.83548 9.52539 1.52539C10.1817 0.86907 11.0718 0.500064 12 0.5L12.1738 0.503906Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_70_3499">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M18 11V6C18 5.47 17.789 4.961 17.414 4.586 17.039 4.211 16.53 4 16 4 15.47 4 14.961 4.211 14.586 4.586 14.211 4.961 14 5.47 14 6M14 10V4C14 3.47 13.789 2.961 13.414 2.586 13.039 2.211 12.53 2 12 2 11.47 2 10.961 2.211 10.586 2.586 10.211 2.961 10 3.47 10 4V6M10 10.5V6C10 5.47 9.789 4.961 9.414 4.586 9.039 4.211 8.53 4 8 4 7.47 4 6.961 4.211 6.586 4.586 6.211 4.961 6 5.47 6 6V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 8C18 7.46957 18.2107 6.96086 18.5858 6.58579C18.9609 6.21071 19.4696 6 20 6C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V14C22 16.1217 21.1571 18.1566 19.6569 19.6569C18.1566 21.1571 16.1217 22 14 22H12C9.2 22 7.5 21.14 6.01 19.66L2.41 16.06C2.06593 15.6789 1.88158 15.1802 1.89512 14.6669C1.90866 14.1537 2.11904 13.6653 2.48272 13.303C2.84639 12.9406 3.3355 12.7319 3.84877 12.7202C4.36204 12.7085 4.86016 12.8946 5.24 13.24L7 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Hand doesn't support ${type}`);
  return null;
});

Hand.displayName = "Hand";

Hand.metadata = {
  name: "Hand",
  category: "solid/accessibility",
  tags: ["hand", "icon"],
  description: "Hand icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hand;
