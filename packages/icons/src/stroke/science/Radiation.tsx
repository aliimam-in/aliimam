import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Radiation: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Radiation(
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
        d="M12 12H12.01M14 15.464C13.392 15.815 12.702 16 12 16 11.298 16 10.608 15.815 10 15.464L7.528 19.746C7.458 19.868 7.414 20.003 7.399 20.143 7.385 20.283 7.4 20.424 7.444 20.558 7.488 20.692 7.56 20.815 7.654 20.919 7.749 21.023 7.864 21.106 7.993 21.162 9.257 21.715 10.621 22 12 22 13.379 22 14.744 21.715 16.007 21.162 16.136 21.106 16.252 21.023 16.346 20.919 16.441 20.815 16.512 20.692 16.556 20.558 16.6 20.424 16.615 20.283 16.601 20.143 16.587 20.003 16.543 19.868 16.472 19.746L14 15.464ZM16 12C16 11.298 15.815 10.608 15.464 10 15.113 9.392 14.608 8.887 14 8.536L16.472 4.254C16.542 4.132 16.638 4.026 16.752 3.944 16.866 3.861 16.996 3.804 17.134 3.775 17.272 3.746 17.414 3.747 17.552 3.777 17.689 3.807 17.819 3.865 17.932 3.949 19.042 4.767 19.971 5.806 20.661 7 21.35 8.195 21.785 9.519 21.938 10.889 21.953 11.024 21.941 11.161 21.901 11.292 21.862 11.422 21.796 11.543 21.708 11.647 21.621 11.751 21.513 11.836 21.391 11.896 21.269 11.957 21.136 11.992 21 12H16ZM8 12C8 11.298 8.185 10.608 8.536 10 8.887 9.392 9.392 8.887 10 8.536L7.528 4.254C7.458 4.132 7.362 4.026 7.248 3.944 7.134 3.861 7.004 3.804 6.866 3.775 6.728 3.746 6.586 3.747 6.449 3.777 6.311 3.807 6.181 3.865 6.068 3.949 4.958 4.767 4.029 5.806 3.339 7 2.65 8.195 2.215 9.519 2.062 10.889 2.047 11.024 2.059 11.161 2.099 11.292 2.138 11.422 2.204 11.543 2.292 11.647 2.379 11.751 2.488 11.836 2.609 11.896 2.731 11.957 2.864 11.992 3 12H8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Radiation.displayName = "Radiation";

Radiation.metadata = {
  name: "Radiation",
  category: "stroke/science",
  tags: ["radiation", "icon"],
  description: "Radiation icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Radiation;
