import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Angola: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Angola(
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
          d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z"
          fill="currentColor"
        />
        <path
          d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
          fill="#bc2833"
        />
        <path
          d="M13.109 11.395H14.9L15.443 9.70703L16.001 11.395H17.792L16.353 12.467L16.911 14.185L15.443 13.142L13.989 14.185L14.547 12.467L13.108 11.395H13.109Z"
          fill="#ffcb00"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M19.657 20.63L18.248 19.529C19.672 18.369 20.597 16.593 20.597 14.611C20.597 11.586 18.439 9.04601 15.59 8.44401L15.81 7.41601C16.206 7.50401 16.672 7.67101 17.053 7.80301L17.42 7.18701C17.816 7.37801 18.257 7.56801 18.624 7.80301L18.345 8.46401C18.712 8.69901 19.155 9.06301 19.402 9.34901L19.953 8.91801C20.247 9.24101 20.599 9.57801 20.849 9.93101L20.35 10.445C20.672 10.918 20.797 11.136 21.035 11.681L21.735 11.517C21.867 11.928 22.068 12.431 22.142 12.857L21.479 13.118C21.558 13.449 21.661 14.027 21.654 14.513C21.654 14.542 21.651 14.575 21.651 14.605L22.344 14.704C22.315 15.13 22.3 15.615 22.212 16.04H21.493C21.39 16.48 21.258 17.019 21.097 17.43L21.699 17.783C21.508 18.165 21.318 18.62 21.068 18.987L20.407 18.708C20.157 19.075 19.879 19.427 19.57 19.75L19.996 20.308C19.879 20.411 19.776 20.514 19.658 20.631M16.56 20.499L17.624 21.14C17.525 21.231 17.227 21.385 17.149 21.416L17.323 22.084C16.912 22.216 16.471 22.407 16.016 22.495L15.752 21.834C15.326 21.922 14.901 21.981 14.46 21.981L14.372 22.671C13.961 22.642 13.462 22.671 13.007 22.568V21.878C12.596 21.804 12.199 21.702 11.818 21.569L11.48 22.171C11.128 22.024 10.658 21.848 10.276 21.613L10.526 20.952C10.218 20.79 9.93901 20.585 9.67401 20.379L10.335 19.542C11.422 20.408 12.787 20.922 14.285 20.922C15.078 20.922 15.856 20.79 16.561 20.497"
          fill="#ffcb00"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M23.355 23.749L21.133 22.031L20.779 21.759L14.929 17.264C13.828 16.398 12.771 15.62 12.595 14.592L12.272 15.385C11.89 16.369 11.817 17.279 13.667 18.439L20.135 22.588L20.953 23.137L22.468 24.189C22.615 24.292 22.629 24.762 23.172 24.835C23.393 24.864 23.539 24.703 23.539 24.703C23.776 24.415 23.711 24.018 23.356 23.749H23.355Z"
          fill="#ffcb00"
        />
      </svg>
    );
  },
);

Angola.displayName = "Angola";

Angola.metadata = {
  name: "Angola",
  category: "flags/flags",
  tags: ["angola", "icon"],
  description: "Angola icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Angola;
