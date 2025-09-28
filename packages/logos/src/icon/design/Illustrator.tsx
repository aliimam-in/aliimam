import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Illustrator: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Illustrator(
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
      viewBox="0 0 24 23"
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
      <g clipPath="url(#undefined-clip0_2039_223)">
        <path
          d="M19.5243 0H4.20142C1.88104 0 0 1.87026 0 4.17735V18.8227C0 21.1297 1.88104 23 4.20142 23H19.5243C21.8446 23 23.7257 21.1297 23.7257 18.8227V4.17735C23.7257 1.87026 21.8446 0 19.5243 0Z"
          fill="#300"
        />
        <path
          d="M11.497 13.803H7.821L7.072 16.113C7.062 16.155 7.038 16.193 7.003 16.219 6.968 16.245 6.925 16.258 6.881 16.256H5.019C4.913 16.256 4.876 16.198 4.908 16.081L8.091 6.966C8.123 6.872 8.155 6.763 8.187 6.642 8.228 6.431 8.25 6.216 8.25 6.001 8.248 5.986 8.249 5.971 8.254 5.956 8.259 5.942 8.267 5.929 8.278 5.918 8.289 5.907 8.302 5.899 8.317 5.894 8.331 5.89 8.347 5.888 8.362 5.89H10.892C10.966 5.89 11.009 5.917 11.02 5.97L14.633 16.097C14.664 16.203 14.633 16.256 14.537 16.256H12.468C12.432 16.26 12.397 16.25 12.367 16.23 12.338 16.21 12.317 16.179 12.309 16.145L11.497 13.803ZM8.393 11.809H10.908C10.845 11.598 10.77 11.361 10.685 11.097 10.6 10.833 10.51 10.551 10.415 10.25 10.319 9.949 10.224 9.649 10.128 9.348 10.033 9.047 9.945 8.757 9.866 8.478 9.786 8.198 9.714 7.943 9.651 7.71H9.635C9.545 8.138 9.434 8.56 9.301 8.976 9.152 9.451 9.001 9.936 8.847 10.432 8.693 10.928 8.542 11.387 8.393 11.809ZM16.781 7.568C16.619 7.574 16.457 7.547 16.306 7.487 16.155 7.427 16.019 7.336 15.906 7.22 15.793 7.099 15.705 6.957 15.648 6.802 15.591 6.647 15.565 6.483 15.571 6.318 15.566 6.154 15.595 5.992 15.656 5.841 15.718 5.689 15.811 5.552 15.93 5.439 16.047 5.327 16.185 5.24 16.337 5.181 16.489 5.123 16.65 5.095 16.813 5.099 17.195 5.099 17.495 5.213 17.712 5.439 17.822 5.557 17.907 5.695 17.963 5.846 18.019 5.997 18.045 6.157 18.038 6.318 18.045 6.483 18.018 6.648 17.959 6.803 17.901 6.958 17.811 7.1 17.696 7.22 17.576 7.337 17.433 7.429 17.275 7.489 17.118 7.549 16.95 7.576 16.781 7.568ZM15.683 16.097V8.533C15.683 8.438 15.725 8.391 15.81 8.391H17.768C17.853 8.391 17.895 8.438 17.895 8.533V16.097C17.895 16.203 17.853 16.256 17.768 16.256H15.826C15.731 16.256 15.683 16.203 15.683 16.097Z"
          fill="#ff9a00"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2039_223">
          <path fill="#fff" d="M0 0H24V23H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Illustrator.displayName = "Illustrator";

Illustrator.metadata = {
  name: "Illustrator",
  category: "icon/design",
  tags: ["illustrator", "icon"],
  description: "Illustrator icon from icon/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Illustrator;
