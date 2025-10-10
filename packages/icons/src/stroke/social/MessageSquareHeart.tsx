import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessageSquareHeart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessageSquareHeart(
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
        d="M22 17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H6.828C6.29761 19.0001 5.78899 19.2109 5.414 19.586L3.212 21.788C3.1127 21.8873 2.9862 21.9549 2.84849 21.9823C2.71077 22.0097 2.56803 21.9956 2.43831 21.9419C2.30858 21.8881 2.1977 21.7971 2.11969 21.6804C2.04167 21.5637 2.00002 21.4264 2 21.286V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V17Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.5C7.5 10.187 7.765 10.883 8.197 11.344L11.206 14.608C11.316 14.7423 11.4552 14.8497 11.613 14.922C11.7371 14.974 11.8704 15.0005 12.0049 14.9998C12.1394 14.9991 12.2725 14.9713 12.396 14.918C12.5502 14.8457 12.6861 14.7398 12.794 14.608L15.802 11.344C16.253 10.8357 16.5014 10.1795 16.5 9.5C16.5 8.97529 16.3349 8.46389 16.0281 8.03822C15.7213 7.61256 15.2883 7.29422 14.7906 7.12829C14.2928 6.96237 13.7554 6.95727 13.2546 7.11372C12.7537 7.27017 12.3148 7.58024 12 8C11.6852 7.58024 11.2463 7.27017 10.7454 7.11372C10.2446 6.95727 9.70721 6.96237 9.20943 7.12829C8.71165 7.29422 8.2787 7.61256 7.97189 8.03822C7.66509 8.46389 7.5 8.97529 7.5 9.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageSquareHeart.displayName = "MessageSquareHeart";

MessageSquareHeart.metadata = {
  name: "MessageSquareHeart",
  category: "stroke/social",
  tags: ["message", "square", "heart", "icon"],
  description: "MessageSquareHeart icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageSquareHeart;
