import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowBigUpProps extends IconProps {
  type?: "stroke";
}

export const ArrowBigUp: IconComponent<ArrowBigUpProps> = React.forwardRef<
  SVGSVGElement,
  ArrowBigUpProps
>(function ArrowBigUp(
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
          d="M8.99989 13C8.99989 12.7348 8.89453 12.4805 8.707 12.2929C8.51946 12.1054 8.26511 12 7.99989 12H5.06089C4.83442 12.0442 4.59964 12.0087 4.39635 11.8996C4.19306 11.7904 4.03377 11.6143 3.94548 11.4012C3.85719 11.188 3.84535 10.9508 3.91194 10.7299C3.97854 10.509 4.11949 10.3179 4.31089 10.189L11.1469 3.35403C11.259 3.24195 11.392 3.15303 11.5385 3.09237C11.6849 3.03171 11.8419 3.00049 12.0004 3.00049C12.1589 3.00049 12.3159 3.03171 12.4623 3.09237C12.6087 3.15303 12.7418 3.24195 12.8539 3.35403L19.6889 10.189C19.8803 10.3179 20.0212 10.509 20.0878 10.7299C20.1544 10.9508 20.1426 11.188 20.0543 11.4012C19.966 11.6143 19.8067 11.7904 19.6034 11.8996C19.4001 12.0087 19.1654 12.0442 18.9389 12H15.9999C15.7347 12 15.4803 12.1054 15.2928 12.2929C15.1052 12.4805 14.9999 12.7348 14.9999 13V19C14.9999 19.2652 14.8945 19.5196 14.707 19.7071C14.5195 19.8947 14.2651 20 13.9999 20H9.99989C9.73467 20 9.48032 19.8947 9.29278 19.7071C9.10525 19.5196 8.99989 19.2652 8.99989 19V13Z"
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
          d="M8.99989 13C8.99989 12.7348 8.89453 12.4805 8.707 12.2929C8.51946 12.1054 8.26511 12 7.99989 12H5.06089C4.83442 12.0442 4.59964 12.0087 4.39635 11.8996C4.19306 11.7904 4.03377 11.6143 3.94548 11.4012C3.85719 11.188 3.84535 10.9508 3.91194 10.7299C3.97854 10.509 4.11949 10.3179 4.31089 10.189L11.1469 3.35403C11.259 3.24195 11.392 3.15303 11.5385 3.09237C11.6849 3.03171 11.8419 3.00049 12.0004 3.00049C12.1589 3.00049 12.3159 3.03171 12.4623 3.09237C12.6087 3.15303 12.7418 3.24195 12.8539 3.35403L19.6889 10.189C19.8803 10.3179 20.0212 10.509 20.0878 10.7299C20.1544 10.9508 20.1426 11.188 20.0543 11.4012C19.966 11.6143 19.8067 11.7904 19.6034 11.8996C19.4001 12.0087 19.1654 12.0442 18.9389 12H15.9999C15.7347 12 15.4803 12.1054 15.2928 12.2929C15.1052 12.4805 14.9999 12.7348 14.9999 13V19C14.9999 19.2652 14.8945 19.5196 14.707 19.7071C14.5195 19.8947 14.2651 20 13.9999 20H9.99989C9.73467 20 9.48032 19.8947 9.29278 19.7071C9.10525 19.5196 8.99989 19.2652 8.99989 19V13Z"
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
          d="M9.00001 13C9.00001 12.7348 8.89466 12.4805 8.70712 12.2929C8.51958 12.1054 8.26523 12 8.00001 12H5.06101C4.83454 12.0442 4.59976 12.0087 4.39647 11.8996C4.19318 11.7904 4.03389 11.6143 3.9456 11.4012C3.85732 11.188 3.84547 10.9508 3.91207 10.7299C3.97867 10.509 4.11961 10.3179 4.31101 10.189L11.147 3.35403C11.2591 3.24195 11.3922 3.15303 11.5386 3.09237C11.685 3.03171 11.842 3.00049 12.0005 3.00049C12.159 3.00049 12.316 3.03171 12.4624 3.09237C12.6089 3.15303 12.7419 3.24195 12.854 3.35403L19.689 10.189C19.8804 10.3179 20.0214 10.509 20.088 10.7299C20.1546 10.9508 20.1427 11.188 20.0544 11.4012C19.9661 11.6143 19.8068 11.7904 19.6036 11.8996C19.4003 12.0087 19.1655 12.0442 18.939 12H16C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4805 15 12.7348 15 13V19C15 19.2652 14.8947 19.5196 14.7071 19.7071C14.5196 19.8947 14.2652 20 14 20H10C9.7348 20 9.48044 19.8947 9.29291 19.7071C9.10537 19.5196 9.00001 19.2652 9.00001 19V13Z"
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
          d="M8.99989 13C8.99989 12.7348 8.89453 12.4805 8.707 12.2929C8.51946 12.1054 8.26511 12 7.99989 12H5.06089C4.83442 12.0442 4.59964 12.0087 4.39635 11.8996C4.19306 11.7904 4.03377 11.6143 3.94548 11.4012C3.85719 11.188 3.84535 10.9508 3.91194 10.7299C3.97854 10.509 4.11949 10.3179 4.31089 10.189L11.1469 3.35403C11.259 3.24195 11.392 3.15303 11.5385 3.09237C11.6849 3.03171 11.8419 3.00049 12.0004 3.00049C12.1589 3.00049 12.3159 3.03171 12.4623 3.09237C12.6087 3.15303 12.7418 3.24195 12.8539 3.35403L19.6889 10.189C19.8803 10.3179 20.0212 10.509 20.0878 10.7299C20.1544 10.9508 20.1426 11.188 20.0543 11.4012C19.966 11.6143 19.8067 11.7904 19.6034 11.8996C19.4001 12.0087 19.1654 12.0442 18.9389 12H15.9999C15.7347 12 15.4803 12.1054 15.2928 12.2929C15.1052 12.4805 14.9999 12.7348 14.9999 13V19C14.9999 19.2652 14.8945 19.5196 14.707 19.7071C14.5195 19.8947 14.2651 20 13.9999 20H9.99989C9.73467 20 9.48032 19.8947 9.29278 19.7071C9.10525 19.5196 8.99989 19.2652 8.99989 19V13Z"
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
          d="M9.00001 13C9.00001 12.7348 8.89466 12.4805 8.70712 12.2929C8.51958 12.1054 8.26523 12 8.00001 12H5.06101C4.83454 12.0442 4.59976 12.0087 4.39647 11.8996C4.19318 11.7904 4.03389 11.6143 3.9456 11.4012C3.85732 11.188 3.84547 10.9508 3.91207 10.7299C3.97867 10.509 4.11961 10.3179 4.31101 10.189L11.147 3.35403C11.2591 3.24195 11.3922 3.15303 11.5386 3.09237C11.685 3.03171 11.842 3.00049 12.0005 3.00049C12.159 3.00049 12.316 3.03171 12.4624 3.09237C12.6089 3.15303 12.7419 3.24195 12.854 3.35403L19.689 10.189C19.8804 10.3179 20.0214 10.509 20.088 10.7299C20.1546 10.9508 20.1427 11.188 20.0544 11.4012C19.9661 11.6143 19.8068 11.7904 19.6036 11.8996C19.4003 12.0087 19.1655 12.0442 18.939 12H16C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4805 15 12.7348 15 13V19C15 19.2652 14.8947 19.5196 14.7071 19.7071C14.5196 19.8947 14.2652 20 14 20H10C9.7348 20 9.48044 19.8947 9.29291 19.7071C9.10537 19.5196 9.00001 19.2652 9.00001 19V13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowBigUp doesn't support ${type}`);
  return null;
});

ArrowBigUp.displayName = "ArrowBigUp";

ArrowBigUp.metadata = {
  name: "ArrowBigUp",
  category: "stroke/navigation",
  tags: ["arrow", "big", "up", "icon"],
  description: "ArrowBigUp icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigUp;
