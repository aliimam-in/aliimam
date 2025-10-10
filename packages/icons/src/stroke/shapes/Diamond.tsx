import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DiamondProps extends IconProps {
  type?: "stroke";
}

export const Diamond: IconComponent<DiamondProps> = React.forwardRef<
  SVGSVGElement,
  DiamondProps
>(function Diamond(
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
          d="M2.69991 10.3C2.47586 10.5239 2.29812 10.7896 2.17685 11.0822C2.05558 11.3748 1.99316 11.6883 1.99316 12.005C1.99316 12.3217 2.05558 12.6353 2.17685 12.9279C2.29812 13.2204 2.47586 13.4862 2.69991 13.71L10.2899 21.3C10.5137 21.5241 10.7795 21.7018 11.0721 21.8231C11.3646 21.9444 11.6782 22.0068 11.9949 22.0068C12.3116 22.0068 12.6252 21.9444 12.9177 21.8231C13.2103 21.7018 13.4761 21.5241 13.6999 21.3L21.2899 13.71C21.514 13.4862 21.6917 13.2204 21.813 12.9279C21.9342 12.6353 21.9967 12.3217 21.9967 12.005C21.9967 11.6883 21.9342 11.3748 21.813 11.0822C21.6917 10.7896 21.514 10.5239 21.2899 10.3L13.6999 2.71004C13.4761 2.48599 13.2103 2.30825 12.9177 2.18698C12.6252 2.06571 12.3116 2.0033 11.9949 2.0033C11.6782 2.0033 11.3646 2.06571 11.0721 2.18698C10.7795 2.30825 10.5137 2.48599 10.2899 2.71004L2.69991 10.3Z"
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
          d="M2.70003 10.3C2.47598 10.5238 2.29824 10.7896 2.17697 11.0821C2.0557 11.3747 1.99329 11.6883 1.99329 12.005C1.99329 12.3217 2.0557 12.6353 2.17697 12.9278C2.29824 13.2204 2.47598 13.4862 2.70003 13.71L10.29 21.3C10.5139 21.524 10.7796 21.7018 11.0722 21.823C11.3648 21.9443 11.6783 22.0067 11.995 22.0067C12.3117 22.0067 12.6253 21.9443 12.9179 21.823C13.2104 21.7018 13.4762 21.524 13.7 21.3L21.29 13.71C21.5141 13.4862 21.6918 13.2204 21.8131 12.9278C21.9344 12.6353 21.9968 12.3217 21.9968 12.005C21.9968 11.6883 21.9344 11.3747 21.8131 11.0821C21.6918 10.7896 21.5141 10.5238 21.29 10.3L13.7 2.70998C13.4762 2.48593 13.2104 2.30819 12.9179 2.18692C12.6253 2.06565 12.3117 2.00323 11.995 2.00323C11.6783 2.00323 11.3648 2.06565 11.0722 2.18692C10.7796 2.30819 10.5139 2.48593 10.29 2.70998L2.70003 10.3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Diamond doesn't support ${type}`);
  return null;
});

Diamond.displayName = "Diamond";

Diamond.metadata = {
  name: "Diamond",
  category: "stroke/shapes",
  tags: ["diamond", "icon"],
  description: "Diamond icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Diamond;
