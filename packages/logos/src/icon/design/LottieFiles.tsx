import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LottieFiles: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LottieFiles(
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
      <g clipPath="url(#undefined-clip0_2062_3159)">
        <path
          d="M17.7992 0.0766602H6.09057C2.77822 0.0766602 0.0930176 2.76185 0.0930176 6.0742V17.7828C0.0930176 21.0952 2.77822 23.7803 6.09057 23.7803H17.7992C21.1115 23.7803 23.7967 21.0952 23.7967 17.7828V6.0742C23.7967 2.76185 21.1115 0.0766602 17.7992 0.0766602Z"
          fill="#00ddb3"
        />
        <path
          d="M18.1084 5.38574C14.0281 5.38574 12.5161 8.29905 11.3003 10.6395L10.5061 12.1368C9.21868 14.6188 8.25684 16.1276 5.77808 16.1276C5.62419 16.1276 5.4718 16.1579 5.32961 16.2168C5.18745 16.2757 5.05826 16.362 4.94943 16.4708C4.84063 16.5796 4.75426 16.7088 4.69536 16.851C4.63648 16.9931 4.6062 17.1455 4.6062 17.2994C4.60665 17.6101 4.73023 17.9079 4.9499 18.1276C5.16958 18.3472 5.46742 18.4708 5.77808 18.4713C9.85998 18.4713 11.3719 15.558 12.5877 13.2175L13.3804 11.7202C14.6694 9.23816 15.6312 7.72942 18.1084 7.72942C18.2624 7.72962 18.4149 7.69946 18.5573 7.64068C18.6997 7.58189 18.829 7.49561 18.9381 7.38675C19.047 7.27792 19.1335 7.14868 19.1925 7.00639C19.2515 6.86411 19.2818 6.71161 19.2818 6.55756C19.2814 6.24663 19.1576 5.94859 18.9376 5.72885C18.7175 5.50915 18.4193 5.38574 18.1084 5.38574Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_3159">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

LottieFiles.displayName = "LottieFiles";

LottieFiles.metadata = {
  name: "LottieFiles",
  category: "icon/design",
  tags: ["lottie", "files", "icon"],
  description: "LottieFiles icon from icon/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LottieFiles;
