import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FrameProps extends IconProps {
  type?: "stroke";
}

export const Frame: IconComponent<FrameProps> = React.forwardRef<
  SVGSVGElement,
  FrameProps
>(function Frame(
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
          d="M22 6H2M22 18H2M6 2V22M18 2V22"
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
          d="M14 11C14 11.5305 13.7893 12.0392 13.4142 12.4143C13.0392 12.7893 12.5304 13 12 13C11.4696 13 10.9609 12.7893 10.5858 12.4143C10.2107 12.0392 10 11.5305 10 11C10 9.93918 10.4214 8.92177 11.1716 8.17162C11.9217 7.42148 12.9391 7.00005 14 7.00005C15.0609 7.00005 16.0783 7.42148 16.8284 8.17162C17.5786 8.92177 18 9.93918 18 11C18 12.5913 17.3679 14.1175 16.2427 15.2427C15.1174 16.3679 13.5913 17 12 17C10.4087 17 8.88259 16.3679 7.75737 15.2427C6.63215 14.1175 6.00001 12.5913 6.00001 11C6.00001 8.87832 6.84287 6.84349 8.34316 5.34319C9.84345 3.8429 11.8783 3.00005 14 3.00005C16.1217 3.00005 18.1566 3.8429 19.6569 5.34319C21.1572 6.84349 22 8.87832 22 11C22 13.6522 20.9464 16.1958 19.0711 18.0711C17.1957 19.9465 14.6522 21 12 21C9.34785 21 6.80431 19.9465 4.92894 18.0711C3.05358 16.1958 2.00001 13.6522 2.00001 11C1.99633 8.39364 2.84631 5.85774 4.42001 3.78005C4.57324 3.55407 4.77111 3.36186 5.00144 3.21525C5.23177 3.06865 5.48967 2.97075 5.75927 2.9276C6.02887 2.88445 6.30444 2.89696 6.56902 2.96435C6.8336 3.03174 7.08158 3.15259 7.29769 3.31946C7.51379 3.48632 7.69344 3.69566 7.82557 3.93459C7.9577 4.17352 8.0395 4.43697 8.06595 4.70871C8.0924 4.98046 8.06293 5.25474 7.97936 5.51466C7.89579 5.77458 7.75988 6.01464 7.58001 6.22005"
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
          d="M4 14.899C3.257 14.14 2.696 13.222 2.361 12.214 2.025 11.206 1.924 10.135 2.063 9.082 2.203 8.029 2.58 7.022 3.167 6.137 3.754 5.251 4.534 4.511 5.449 3.972 6.364 3.432 7.39 3.109 8.449 3.025 9.508 2.941 10.572 3.099 11.561 3.487 12.549 3.875 13.437 4.483 14.156 5.265 14.875 6.047 15.406 6.982 15.71 8H17.5C18.465 8 19.405 8.31 20.181 8.885 20.956 9.461 21.526 10.27 21.807 11.194 22.087 12.118 22.063 13.107 21.737 14.016 21.412 14.925 20.803 15.706 20 16.242M8 19V20M8 14V15M16 19V20M16 14V15M12 21V22M12 16V17"
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
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM8 12H16"
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
          d="M21 3H3C2.448 3 2 3.448 2 4V7C2 7.552 2.448 8 3 8H21C21.552 8 22 7.552 22 7V4C22 3.448 21.552 3 21 3ZM4 8V19C4 19.53 4.211 20.039 4.586 20.414 4.961 20.789 5.47 21 6 21H18C18.53 21 19.039 20.789 19.414 20.414 19.789 20.039 20 19.53 20 19V8M9.5 17 14.5 12M9.5 12 14.5 17"
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
          d="M9 13C9.552 13 10 12.552 10 12 10 11.448 9.552 11 9 11 8.448 11 8 11.448 8 12 8 12.552 8.448 13 9 13ZM9 6C9.552 6 10 5.552 10 5 10 4.448 9.552 4 9 4 8.448 4 8 4.448 8 5 8 5.552 8.448 6 9 6ZM9 20C9.552 20 10 19.552 10 19 10 18.448 9.552 18 9 18 8.448 18 8 18.448 8 19 8 19.552 8.448 20 9 20ZM15 13C15.552 13 16 12.552 16 12 16 11.448 15.552 11 15 11 14.448 11 14 11.448 14 12 14 12.552 14.448 13 15 13ZM15 6C15.552 6 16 5.552 16 5 16 4.448 15.552 4 15 4 14.448 4 14 4.448 14 5 14 5.552 14.448 6 15 6ZM15 20C15.552 20 16 19.552 16 19 16 18.448 15.552 18 15 18 14.448 18 14 18.448 14 19 14 19.552 14.448 20 15 20Z"
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
          d="M22 6H2M22 18H2M6 2V22M18 2V22"
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
          d="M4 22V4C4 3.84475 4.03614 3.69164 4.10557 3.55279C4.175 3.41393 4.2758 3.29315 4.4 3.2C5.43858 2.42107 6.70178 2 8 2C11 2 13 4 15.333 4C16.6663 4 17.6887 3.73333 18.4 3.2C18.5486 3.08857 18.7252 3.02072 18.9102 3.00404C19.0952 2.98736 19.2811 3.02252 19.4472 3.10557C19.6133 3.18863 19.753 3.31629 19.8507 3.47427C19.9483 3.63224 20 3.81429 20 4V14C20 14.1552 19.9639 14.3084 19.8944 14.4472C19.825 14.5861 19.7242 14.7069 19.6 14.8C18.5614 15.5789 17.2982 16 16 16C13 16 11 14 8 14C6.52412 14 5.10002 14.544 4 15.528"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Frame doesn't support ${type}`);
  return null;
});

Frame.displayName = "Frame";

Frame.metadata = {
  name: "Frame",
  category: "stroke/photography",
  tags: ["frame", "icon"],
  description: "Frame icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Frame;
