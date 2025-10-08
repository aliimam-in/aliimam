import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowBigLeftProps extends IconProps {
  type?: "stroke";
}

export const ArrowBigLeft: IconComponent<ArrowBigLeftProps> = React.forwardRef<
  SVGSVGElement,
  ArrowBigLeftProps
>(function ArrowBigLeft(
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
          d="M13 9.00001C12.7348 9.00001 12.4805 8.89466 12.2929 8.70712C12.1054 8.51958 12 8.26523 12 8.00001V5.06101C12.0442 4.83454 12.0087 4.59976 11.8996 4.39647C11.7904 4.19318 11.6143 4.03389 11.4012 3.9456C11.188 3.85732 10.9508 3.84547 10.7299 3.91207C10.509 3.97867 10.3179 4.11961 10.189 4.31101L3.35403 11.147C3.24195 11.2591 3.15303 11.3922 3.09237 11.5386C3.03171 11.685 3.00049 11.842 3.00049 12.0005C3.00049 12.159 3.03171 12.316 3.09237 12.4624C3.15303 12.6089 3.24195 12.7419 3.35403 12.854L10.189 19.689C10.3179 19.8804 10.509 20.0214 10.7299 20.088C10.9508 20.1546 11.188 20.1427 11.4012 20.0544C11.6143 19.9661 11.7904 19.8068 11.8996 19.6036C12.0087 19.4003 12.0442 19.1655 12 18.939V16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4805 15.1054 12.7348 15 13 15H19C19.2652 15 19.5196 14.8947 19.7071 14.7071C19.8947 14.5196 20 14.2652 20 14V10C20 9.7348 19.8947 9.48044 19.7071 9.29291C19.5196 9.10537 19.2652 9.00001 19 9.00001H13Z"
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
          d="M13 8.99989C12.7348 8.99989 12.4804 8.89453 12.2929 8.707C12.1053 8.51946 12 8.26511 12 7.99989V5.06089C12.0442 4.83442 12.0087 4.59964 11.8995 4.39635C11.7904 4.19306 11.6143 4.03377 11.4011 3.94548C11.1879 3.85719 10.9508 3.84535 10.7298 3.91194C10.5089 3.97854 10.3178 4.11949 10.189 4.31089L3.35397 11.1469C3.24188 11.259 3.15297 11.392 3.09231 11.5385C3.03165 11.6849 3.00043 11.8419 3.00043 12.0004C3.00043 12.1589 3.03165 12.3159 3.09231 12.4623C3.15297 12.6087 3.24188 12.7418 3.35397 12.8539L10.189 19.6889C10.3178 19.8803 10.5089 20.0212 10.7298 20.0878C10.9508 20.1544 11.1879 20.1426 11.4011 20.0543C11.6143 19.966 11.7904 19.8067 11.8995 19.6034C12.0087 19.4001 12.0442 19.1654 12 18.9389V15.9999C12 15.7347 12.1053 15.4803 12.2929 15.2928C12.4804 15.1052 12.7348 14.9999 13 14.9999H19C19.2652 14.9999 19.5195 14.8945 19.7071 14.707C19.8946 14.5195 20 14.2651 20 13.9999V9.99989C20 9.73467 19.8946 9.48032 19.7071 9.29278C19.5195 9.10525 19.2652 8.99989 19 8.99989H13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowBigLeft doesn't support ${type}`);
  return null;
});

ArrowBigLeft.displayName = "ArrowBigLeft";

ArrowBigLeft.metadata = {
  name: "ArrowBigLeft",
  category: "stroke/gaming",
  tags: ["arrow", "big", "left", "icon"],
  description: "ArrowBigLeft icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigLeft;
