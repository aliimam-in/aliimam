import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessageCircleMore: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessageCircleMore(
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
        d="M2.992 16.342C3.139 16.713 3.172 17.119 3.086 17.509L2.021 20.799C1.987 20.966 1.995 21.139 2.047 21.301 2.098 21.464 2.19 21.61 2.314 21.727 2.437 21.844 2.589 21.928 2.754 21.97 2.919 22.012 3.092 22.011 3.257 21.967L6.67 20.969C7.038 20.896 7.418 20.928 7.769 21.061 9.904 22.058 12.323 22.269 14.599 21.657 16.875 21.044 18.861 19.648 20.208 17.713 21.554 15.779 22.174 13.431 21.958 11.085 21.742 8.738 20.705 6.542 19.028 4.886 17.351 3.23 15.144 2.219 12.794 2.032 10.445 1.845 8.105 2.493 6.187 3.863 4.27 5.233 2.897 7.237 2.313 9.52 1.728 11.803 1.969 14.219 2.992 16.342ZM8 12H8.01M12 12H12.01M16 12H16.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageCircleMore.displayName = "MessageCircleMore";

MessageCircleMore.metadata = {
  name: "MessageCircleMore",
  category: "stroke/social",
  tags: ["message", "circle", "more", "icon"],
  description: "MessageCircleMore icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageCircleMore;
