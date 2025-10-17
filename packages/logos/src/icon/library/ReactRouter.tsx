import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReactRouter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReactRouter(
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
      <g clipPath="url(#undefined-clip0_2066_936)">
        <path
          d="M18.5698 9.49133C17.8864 9.27058 17.5334 9.345 16.8166 9.26452C15.7084 9.14035 15.267 8.69542 15.0797 7.55032C14.9749 6.91108 15.0986 5.97514 14.831 5.39569C14.3193 4.29082 13.122 3.79529 11.9191 4.07812C10.9034 4.31726 10.0584 5.36005 10.0115 6.43043C9.95802 7.65256 10.6359 8.69534 11.7998 9.05521C12.3527 9.22652 12.9403 9.31273 13.5178 9.35643C14.5768 9.43575 14.6582 10.0406 14.9448 10.5384C15.1254 10.8523 15.3004 11.1615 15.3004 12.0974C15.3004 13.0333 15.1243 13.3426 14.9448 13.6564C14.6582 14.1531 14.3048 14.4785 13.2457 14.5589C12.6682 14.6026 12.0796 14.6889 11.5278 14.8602C10.3639 15.2212 9.68601 16.2628 9.73952 17.4849C9.78635 18.5553 10.6314 19.5981 11.647 19.8372C12.85 20.1212 14.0473 19.6246 14.559 18.5197C14.8277 17.9402 14.9749 17.2838 15.0797 16.6445C15.2681 15.4994 15.7095 15.0545 16.8166 14.9303C17.5334 14.8498 18.2754 14.9303 18.9471 14.5382C19.6569 14.0054 20.2911 13.2057 20.2911 12.0974C20.2911 10.9891 19.6077 9.82704 18.5698 9.49133Z"
          fill="#f44250"
        />
        <path
          d="M7.2 14.695C5.803 14.695 4.664 13.522 4.664 12.084 4.664 10.647 5.803 9.474 7.2 9.474 8.597 9.474 9.736 10.647 9.736 12.084 9.736 13.521 8.596 14.695 7.2 14.695ZM2.527 20C1.133 19.997-.003 18.819 0 17.38.003 15.944 1.147 14.774 2.545 14.779 3.941 14.782 5.077 15.96 5.073 17.399 5.069 18.834 3.925 20.003 2.527 20ZM21.374 20C19.975 20.008 18.826 18.843 18.818 17.409 18.811 15.969 19.942 14.787 21.336 14.779 22.735 14.771 23.883 15.936 23.891 17.37 23.899 18.809 22.767 19.992 21.374 20Z"
          fill="#121212"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_936">
          <path fill="#fff" transform="translate(0 4)" d="M0 0H24V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

ReactRouter.displayName = "ReactRouter";

ReactRouter.metadata = {
  name: "ReactRouter",
  category: "icon/library",
  tags: ["react", "router", "icon"],
  description: "ReactRouter icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReactRouter;
