import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CircleQuestionMarkProps extends IconProps {
  type?: "solid" | "stroke";
}

export const CircleQuestionMark: IconComponent<CircleQuestionMarkProps> =
  React.forwardRef<SVGSVGElement, CircleQuestionMarkProps>(
    function CircleQuestionMark(
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
      if (type === "solid") {
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
              d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 15.5C11.1716 15.5 10.5 16.1716 10.5 17C10.5 17.8284 11.1716 18.5 12 18.5H12.0098C12.8382 18.5 13.5098 17.8284 13.5098 17C13.5098 16.1716 12.8382 15.5 12.0098 15.5H12ZM12.6807 5.55957C11.6334 5.37998 10.5558 5.57686 9.63965 6.11523C8.72355 6.65363 8.0275 7.49961 7.6748 8.50195C7.40003 9.28327 7.81061 10.14 8.5918 10.415C9.37328 10.6899 10.23 10.2786 10.5049 9.49707C10.6225 9.16317 10.8549 8.88153 11.1602 8.70215C11.4654 8.5228 11.8248 8.4568 12.1738 8.5166C12.5227 8.57653 12.8394 8.75857 13.0674 9.0293C13.2953 9.3001 13.4203 9.64314 13.4199 9.99707V10C13.4197 10.2038 13.2468 10.5627 12.5879 11.002C12.3039 11.1913 12.0089 11.3394 11.7793 11.4414C11.6667 11.4915 11.5748 11.5279 11.5146 11.5508C11.4849 11.5621 11.4633 11.5699 11.4512 11.5742L11.4434 11.5771L11.4404 11.5781C10.658 11.842 10.2361 12.6896 10.4971 13.4736C10.759 14.2595 11.6086 14.6848 12.3945 14.4229L12.4014 14.4199H12.4033C12.4069 14.4187 12.4111 14.4167 12.416 14.415C12.4264 14.4115 12.4401 14.407 12.4561 14.4014C12.4879 14.39 12.5309 14.3743 12.583 14.3545C12.6869 14.3149 12.8296 14.2575 12.998 14.1826C13.3309 14.0347 13.7862 13.8085 14.252 13.498C15.0663 12.9551 16.3374 11.8666 16.416 10.166L16.4199 10C16.421 8.93809 16.0462 7.90911 15.3623 7.09668C14.678 6.28405 13.7278 5.73918 12.6807 5.55957Z"
              fill="currentColor"
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
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 9C9.325 8.332 9.789 7.768 10.4 7.409 11.011 7.05 11.729 6.919 12.427 7.039 13.126 7.158 13.759 7.521 14.215 8.063 14.671 8.605 14.921 9.291 14.92 10 14.92 12 11.92 13 11.92 13M12 17H12.01"
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
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 9C9.325 8.332 9.789 7.768 10.4 7.409 11.011 7.05 11.729 6.919 12.427 7.039 13.126 7.158 13.759 7.521 14.215 8.063 14.671 8.605 14.921 9.291 14.92 10 14.92 12 11.92 13 11.92 13M12 17H12.01"
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
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 9C9.325 8.332 9.789 7.768 10.4 7.409 11.011 7.05 11.729 6.919 12.427 7.039 13.126 7.159 13.759 7.522 14.215 8.064 14.671 8.606 14.921 9.292 14.92 10 14.92 12 11.92 13 11.92 13M12 17H12.01"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`CircleQuestionMark doesn't support ${type}`);
      return null;
    },
  );

CircleQuestionMark.displayName = "CircleQuestionMark";

CircleQuestionMark.metadata = {
  name: "CircleQuestionMark",
  category: "solid/accessibility",
  tags: ["circle", "question", "mark", "icon"],
  description: "CircleQuestionMark icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleQuestionMark;
