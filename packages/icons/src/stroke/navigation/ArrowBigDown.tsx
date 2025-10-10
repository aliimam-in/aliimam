import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowBigDownProps extends IconProps {
  type?: "stroke";
}

export const ArrowBigDown: IconComponent<ArrowBigDownProps> = React.forwardRef<
  SVGSVGElement,
  ArrowBigDownProps
>(function ArrowBigDown(
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
          d="M14.9999 11C14.9999 11.2652 15.1053 11.5196 15.2928 11.7071C15.4803 11.8946 15.7347 12 15.9999 12H18.9389C19.1654 11.9558 19.4002 11.9913 19.6035 12.1004C19.8067 12.2096 19.966 12.3857 20.0543 12.5989C20.1426 12.8121 20.1545 13.0492 20.0879 13.2701C20.0213 13.491 19.8803 13.6821 19.6889 13.811L12.8539 20.647C12.7418 20.7591 12.6088 20.848 12.4623 20.9087C12.3159 20.9693 12.1589 21.0005 12.0004 21.0005C11.8419 21.0005 11.6849 20.9693 11.5385 20.9087C11.3921 20.848 11.259 20.7591 11.1469 20.647L4.30991 13.81C4.11851 13.6811 3.97757 13.49 3.91097 13.2691C3.84437 13.0482 3.85622 12.8111 3.9445 12.5979C4.03279 12.3847 4.19208 12.2086 4.39537 12.0994C4.59866 11.9903 4.83345 11.9548 5.05991 11.999H7.99991C8.26513 11.999 8.51948 11.8936 8.70702 11.7061C8.89456 11.5186 8.99991 11.2642 8.99991 10.999V5C8.99991 4.73478 9.10527 4.48043 9.29281 4.29289C9.48034 4.10536 9.7347 4 9.99991 4H13.9999C14.2651 4 14.5195 4.10536 14.707 4.29289C14.8946 4.48043 14.9999 4.73478 14.9999 5V11Z"
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
          d="M15 11C15 11.2652 15.1053 11.5196 15.2929 11.7071C15.4804 11.8946 15.7348 12 16 12H18.939C19.1654 11.9558 19.4002 11.9913 19.6035 12.1004C19.8068 12.2096 19.9661 12.3857 20.0544 12.5989C20.1427 12.8121 20.1545 13.0492 20.0879 13.2701C20.0213 13.491 19.8804 13.6821 19.689 13.811L12.854 20.647C12.7419 20.7591 12.6088 20.848 12.4624 20.9087C12.3159 20.9693 12.159 21.0005 12.0005 21.0005C11.842 21.0005 11.685 20.9693 11.5386 20.9087C11.3921 20.848 11.2591 20.7591 11.147 20.647L4.30998 13.81C4.11858 13.6811 3.97763 13.49 3.91103 13.2691C3.84443 13.0482 3.85628 12.8111 3.94456 12.5979C4.03285 12.3847 4.19214 12.2086 4.39543 12.0994C4.59872 11.9903 4.83351 11.9548 5.05998 11.999H7.99998C8.26519 11.999 8.51955 11.8936 8.70708 11.7061C8.89462 11.5186 8.99998 11.2642 8.99998 10.999V5C8.99998 4.73478 9.10533 4.48043 9.29287 4.29289C9.48041 4.10536 9.73476 4 9.99998 4H14C14.2652 4 14.5195 4.10536 14.7071 4.29289C14.8946 4.48043 15 4.73478 15 5V11Z"
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
          d="M15 11C15 11.2652 15.1053 11.5196 15.2929 11.7071C15.4804 11.8946 15.7348 12 16 12H18.939C19.1654 11.9558 19.4002 11.9913 19.6035 12.1004C19.8068 12.2096 19.9661 12.3857 20.0544 12.5989C20.1427 12.8121 20.1545 13.0492 20.0879 13.2701C20.0213 13.491 19.8804 13.6821 19.689 13.811L12.854 20.647C12.7419 20.7591 12.6088 20.848 12.4624 20.9087C12.3159 20.9693 12.159 21.0005 12.0005 21.0005C11.842 21.0005 11.685 20.9693 11.5386 20.9087C11.3921 20.848 11.2591 20.7591 11.147 20.647L4.30998 13.81C4.11858 13.6811 3.97763 13.49 3.91103 13.2691C3.84443 13.0482 3.85628 12.8111 3.94456 12.5979C4.03285 12.3847 4.19214 12.2086 4.39543 12.0994C4.59872 11.9903 4.83351 11.9548 5.05998 11.999H7.99998C8.26519 11.999 8.51955 11.8936 8.70708 11.7061C8.89462 11.5186 8.99998 11.2642 8.99998 10.999V5C8.99998 4.73478 9.10533 4.48043 9.29287 4.29289C9.48041 4.10536 9.73476 4 9.99998 4H14C14.2652 4 14.5195 4.10536 14.7071 4.29289C14.8946 4.48043 15 4.73478 15 5V11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowBigDown doesn't support ${type}`);
  return null;
});

ArrowBigDown.displayName = "ArrowBigDown";

ArrowBigDown.metadata = {
  name: "ArrowBigDown",
  category: "stroke/navigation",
  tags: ["arrow", "big", "down", "icon"],
  description: "ArrowBigDown icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigDown;
