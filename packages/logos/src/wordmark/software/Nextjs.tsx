import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface NextjsProps extends IconProps {
  type?: "wordmark" | "icon";
}

export const Nextjs: IconComponent<NextjsProps> = React.forwardRef<
  SVGSVGElement,
  NextjsProps
>(function Nextjs(
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
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "wordmark") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 24"
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2041_264)">
          <path d="M79.772.01H100.674V3.81H92.383V23.802H88.237V3.81H79.772V.01ZM45.397.01V3.81H28.642V9.923H42.116V13.723H28.642V20.002H45.397V23.802H24.497V3.81H24.495V.01H45.397ZM55.834.02H50.408L69.841 23.812H75.283L65.565 11.924 75.267.038 69.841.046 62.848 8.601 55.834.02ZM61.401 17.014 58.684 13.687 50.392 23.83H55.834L61.401 17.014Z" />
          <path
            d="M24.6417 23.8017L5.18226 0H0V23.7918H4.14582V5.08548L19.4335 23.8017H24.6417Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path d="M101.606 23.656C101.303 23.656 101.044 23.553 100.828 23.346 100.612 23.138 100.505 22.888 100.508 22.59 100.505 22.301 100.612 22.053 100.828 21.846 101.044 21.639 101.303 21.535 101.606 21.535 101.898 21.535 102.154 21.639 102.37 21.846 102.589 22.053 102.699 22.301 102.702 22.59 102.699 22.787 102.648 22.967 102.547 23.127 102.443 23.291 102.311 23.419 102.145 23.512 101.982 23.607 101.803 23.656 101.606 23.656ZM108.682 13.634H110.519V20.605C110.517 21.246 110.376 21.794 110.101 22.255 109.823 22.716 109.438 23.067 108.944 23.316 108.452 23.561 107.876 23.686 107.222 23.686 106.623 23.686 106.087 23.58 105.609 23.373 105.132 23.166 104.752 22.855 104.474 22.446 104.193 22.037 104.056 21.527 104.056 20.916H105.896C105.898 21.183 105.96 21.415 106.078 21.609 106.196 21.802 106.359 21.95 106.567 22.053 106.777 22.157 107.019 22.209 107.292 22.209 107.587 22.209 107.84 22.149 108.044 22.026 108.249 21.906 108.407 21.726 108.517 21.486 108.623 21.249 108.68 20.954 108.682 20.605V13.634ZM118.078 16.36C118.034 15.938 117.837 15.608 117.494 15.373 117.149 15.136 116.702 15.019 116.154 15.019 115.77 15.019 115.438 15.076 115.163 15.188 114.888 15.302 114.674 15.455 114.528 15.649 114.382 15.842 114.309 16.063 114.303 16.311 114.303 16.518 114.354 16.698 114.452 16.848 114.55 17.001 114.682 17.129 114.854 17.233 115.022 17.339 115.21 17.426 115.416 17.497 115.623 17.568 115.831 17.628 116.039 17.677L116.997 17.909C117.382 17.996 117.756 18.113 118.112 18.263 118.469 18.411 118.792 18.599 119.076 18.825 119.359 19.051 119.584 19.324 119.75 19.643 119.916 19.962 120 20.335 120 20.766 120 21.347 119.848 21.857 119.542 22.299 119.236 22.738 118.795 23.081 118.216 23.329 117.64 23.575 116.944 23.7 116.123 23.7 115.331 23.7 114.64 23.58 114.059 23.34 113.475 23.103 113.019 22.754 112.691 22.296 112.362 21.838 112.185 21.279 112.16 20.622H113.98C114.005 20.965 114.118 21.252 114.309 21.483 114.503 21.712 114.755 21.881 115.064 21.996 115.376 22.108 115.724 22.165 116.109 22.165 116.511 22.165 116.865 22.105 117.171 21.988 117.475 21.871 117.713 21.707 117.885 21.494 118.059 21.284 118.146 21.036 118.149 20.753 118.146 20.494 118.067 20.278 117.916 20.109 117.761 19.94 117.548 19.798 117.275 19.684 117 19.569 116.68 19.466 116.314 19.376L115.152 19.087C114.312 18.877 113.646 18.558 113.16 18.13 112.671 17.702 112.429 17.135 112.429 16.423 112.429 15.839 112.592 15.327 112.921 14.888 113.247 14.449 113.694 14.108 114.258 13.865 114.826 13.62 115.466 13.5 116.179 13.5 116.904 13.5 117.539 13.62 118.087 13.865 118.635 14.108 119.065 14.446 119.376 14.877 119.688 15.308 119.851 15.801 119.86 16.36H118.078Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2041_264">
            <path fill="#fff" d="M0 0H120V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === "icon") {
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
        <g clipPath="url(#undefined-clip0_2041_253)">
          <mask
            id="undefined-mask0_2041_253"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={size}
            height={size}
          >
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="currentColor"
            />
          </mask>
          <g mask="url(#undefined-mask0_2041_253)">
            <path
              d="M12 23.6C18.4065 23.6 23.6 18.4065 23.6 12C23.6 5.59352 18.4065 0.400024 12 0.400024C5.59352 0.400024 0.400024 5.59352 0.400024 12C0.400024 18.4065 5.59352 23.6 12 23.6Z"
              fill="currentColor"
            />
            <path
              d="M23.2 12C23.2 5.81441 18.1856 0.8 12 0.8C5.81441 0.8 0.8 5.81441 0.8 12C0.8 18.1856 5.81441 23.2 12 23.2C18.1856 23.2 23.2 18.1856 23.2 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
              fill="#fff"
            />
            <path
              d="M19.9344 21.0026L9.21888 7.19995H7.19995V16.796H8.8151V9.2511L18.6665 21.9793C19.111 21.6818 19.5345 21.3553 19.9344 21.0026Z"
              fill="url(#undefined-paint0_linear_2041_253)"
            />
            <path
              d="M16.9334 7.19995H15.3334V16.8H16.9334V7.19995Z"
              fill="url(#undefined-paint1_linear_2041_253)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="undefined-paint0_linear_2041_253"
            x1="14.533"
            y1="15.533"
            x2="19.267"
            y2="21.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="undefined-paint1_linear_2041_253"
            x1="16.133"
            y1="7.2"
            x2="16.107"
            y2="14.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="undefined-clip0_2041_253">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`Nextjs doesn't support ${type}`);
  return null;
});

Nextjs.displayName = "Nextjs";

Nextjs.metadata = {
  name: "Nextjs",
  category: "wordmark/software",
  tags: ["nextjs", "icon"],
  description: "Nextjs icon from wordmark/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Nextjs;
