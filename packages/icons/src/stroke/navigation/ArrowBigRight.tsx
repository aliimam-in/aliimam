import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowBigRightProps extends IconProps {
  type?: "stroke";
}

export const ArrowBigRight: IconComponent<ArrowBigRightProps> =
  React.forwardRef<SVGSVGElement, ArrowBigRightProps>(function ArrowBigRight(
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
            d="M11 9.00001C11.2652 9.00001 11.5196 8.89466 11.7071 8.70712C11.8946 8.51958 12 8.26523 12 8.00001V5.06101C11.9558 4.83454 11.9913 4.59976 12.1004 4.39647C12.2096 4.19318 12.3857 4.03389 12.5989 3.9456C12.8121 3.85732 13.0492 3.84547 13.2701 3.91207C13.491 3.97867 13.6821 4.11961 13.811 4.31101L20.647 11.147C20.7591 11.2591 20.848 11.3922 20.9087 11.5386C20.9693 11.685 21.0005 11.842 21.0005 12.0005C21.0005 12.159 20.9693 12.316 20.9087 12.4624C20.848 12.6089 20.7591 12.7419 20.647 12.854L13.811 19.689C13.6821 19.8804 13.491 20.0214 13.2701 20.088C13.0492 20.1546 12.8121 20.1427 12.5989 20.0544C12.3857 19.9661 12.2096 19.8068 12.1004 19.6036C11.9913 19.4003 11.9558 19.1655 12 18.939V16C12 15.7348 11.8946 15.4804 11.7071 15.2929C11.5196 15.1054 11.2652 15 11 15H5C4.73478 15 4.48043 14.8947 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14V10C4 9.7348 4.10536 9.48044 4.29289 9.29291C4.48043 9.10537 4.73478 9.00001 5 9.00001H11Z"
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
            d="M11 9.00001C11.2652 9.00001 11.5196 8.89466 11.7071 8.70712C11.8946 8.51958 12 8.26523 12 8.00001V5.06101C11.9558 4.83454 11.9913 4.59976 12.1004 4.39647C12.2096 4.19318 12.3857 4.03389 12.5989 3.9456C12.8121 3.85732 13.0492 3.84547 13.2701 3.91207C13.491 3.97867 13.6821 4.11961 13.811 4.31101L20.647 11.147C20.7591 11.2591 20.848 11.3922 20.9087 11.5386C20.9693 11.685 21.0005 11.842 21.0005 12.0005C21.0005 12.159 20.9693 12.316 20.9087 12.4624C20.848 12.6089 20.7591 12.7419 20.647 12.854L13.811 19.689C13.6821 19.8804 13.491 20.0214 13.2701 20.088C13.0492 20.1546 12.8121 20.1427 12.5989 20.0544C12.3857 19.9661 12.2096 19.8068 12.1004 19.6036C11.9913 19.4003 11.9558 19.1655 12 18.939V16C12 15.7348 11.8946 15.4804 11.7071 15.2929C11.5196 15.1054 11.2652 15 11 15H5C4.73478 15 4.48043 14.8947 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14V10C4 9.7348 4.10536 9.48044 4.29289 9.29291C4.48043 9.10537 4.73478 9.00001 5 9.00001H11Z"
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
            d="M11 8.99989C11.2652 8.99989 11.5196 8.89453 11.7071 8.707C11.8946 8.51946 12 8.26511 12 7.99989V5.06089C11.9558 4.83442 11.9913 4.59964 12.1004 4.39635C12.2096 4.19306 12.3857 4.03377 12.5989 3.94548C12.8121 3.85719 13.0492 3.84535 13.2701 3.91194C13.491 3.97854 13.6821 4.11949 13.811 4.31089L20.647 11.1469C20.7591 11.259 20.848 11.392 20.9087 11.5385C20.9693 11.6849 21.0005 11.8419 21.0005 12.0004C21.0005 12.1589 20.9693 12.3159 20.9087 12.4623C20.848 12.6087 20.7591 12.7418 20.647 12.8539L13.811 19.6889C13.6821 19.8803 13.491 20.0212 13.2701 20.0878C13.0492 20.1544 12.8121 20.1426 12.5989 20.0543C12.3857 19.966 12.2096 19.8067 12.1004 19.6034C11.9913 19.4001 11.9558 19.1654 12 18.9389V15.9999C12 15.7347 11.8946 15.4803 11.7071 15.2928C11.5196 15.1052 11.2652 14.9999 11 14.9999H5C4.73478 14.9999 4.48043 14.8945 4.29289 14.707C4.10536 14.5195 4 14.2651 4 13.9999V9.99989C4 9.73467 4.10536 9.48032 4.29289 9.29278C4.48043 9.10525 4.73478 8.99989 5 8.99989H11Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowBigRight doesn't support ${type}`);
    return null;
  });

ArrowBigRight.displayName = "ArrowBigRight";

ArrowBigRight.metadata = {
  name: "ArrowBigRight",
  category: "stroke/navigation",
  tags: ["arrow", "big", "right", "icon"],
  description: "ArrowBigRight icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigRight;
