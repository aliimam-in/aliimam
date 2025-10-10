import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SmilePlusProps extends IconProps {
  type?: "stroke";
}

export const SmilePlus: IconComponent<SmilePlusProps> = React.forwardRef<
  SVGSVGElement,
  SmilePlusProps
>(function SmilePlus(
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
          d="M21.9999 11V12C21.9898 14.0183 21.3691 15.9864 20.2196 17.6454C19.0701 19.3044 17.4454 20.5767 15.5592 21.295C13.6731 22.0134 11.6137 22.1442 9.65175 21.6703C7.68984 21.1963 5.91727 20.1398 4.56707 18.6395C3.21686 17.1393 2.35223 15.2656 2.08684 13.2648C1.82144 11.264 2.1677 9.22969 3.08011 7.42935C3.99251 5.629 5.42835 4.14689 7.19885 3.17785C8.96935 2.20881 10.9917 1.7982 12.9999 2.00001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14C8 14 9.5 16 12 16 14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M16 5H22M19 2V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
          d="M22 11V12C21.9899 14.0183 21.3693 15.9863 20.2197 17.6453C19.0702 19.3043 17.4455 20.5766 15.5594 21.295C13.6732 22.0134 11.6138 22.1442 9.65186 21.6702C7.68995 21.1963 5.91738 20.1397 4.56718 18.6395C3.21698 17.1393 2.35235 15.2656 2.08695 13.2648C1.82155 11.2639 2.16782 9.22963 3.08022 7.42929C3.99263 5.62894 5.42846 4.14683 7.19897 3.17779C8.96947 2.20875 10.9918 1.79814 13 1.99995"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14C8 14 9.5 16 12 16 14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M16 5H22M19 2V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
          d="M22 11V12C21.9899 14.0183 21.3693 15.9863 20.2197 17.6453C19.0702 19.3043 17.4455 20.5766 15.5594 21.295C13.6732 22.0134 11.6138 22.1442 9.65187 21.6702C7.68996 21.1963 5.91739 20.1397 4.56719 18.6395C3.21699 17.1393 2.35235 15.2656 2.08696 13.2648C1.82156 11.2639 2.16783 9.22963 3.08023 7.42929C3.99263 5.62894 5.42847 4.14683 7.19897 3.17779C8.96948 2.20875 10.9918 1.79814 13 1.99995"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14C8 14 9.5 16 12 16 14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M16 5H22M19 2V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SmilePlus doesn't support ${type}`);
  return null;
});

SmilePlus.displayName = "SmilePlus";

SmilePlus.metadata = {
  name: "SmilePlus",
  category: "stroke/notification",
  tags: ["smile", "plus", "icon"],
  description: "SmilePlus icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SmilePlus;
