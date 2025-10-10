import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HandshakeProps extends IconProps {
  type?: "stroke";
}

export const Handshake: IconComponent<HandshakeProps> = React.forwardRef<
  SVGSVGElement,
  HandshakeProps
>(function Handshake(
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
          d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0002 14L16.5002 16.5C16.8981 16.8978 17.4376 17.1213 18.0002 17.1213C18.5628 17.1213 19.1024 16.8978 19.5002 16.5C19.8981 16.1022 20.1215 15.5626 20.1215 15C20.1215 14.4374 19.8981 13.8978 19.5002 13.5L15.6202 9.62002C15.0577 9.05821 14.2952 8.74265 13.5002 8.74265C12.7052 8.74265 11.9427 9.05821 11.3802 9.62002L10.5002 10.5C10.1024 10.8978 9.56284 11.1213 9.00023 11.1213C8.43762 11.1213 7.89805 10.8978 7.50023 10.5C7.1024 10.1022 6.87891 9.56262 6.87891 9.00002C6.87891 8.43741 7.1024 7.89784 7.50023 7.50002L10.3102 4.69002C11.2225 3.78016 12.4121 3.20057 13.6909 3.04299C14.9696 2.88541 16.2644 3.15885 17.3702 3.82002L17.8402 4.10002C18.266 4.357 18.7723 4.44613 19.2602 4.35002L21.0002 4.00002"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 3 22 14H20M3 3 2 14 8.5 20.5C8.898 20.898 9.437 21.121 10 21.121 10.563 21.121 11.102 20.898 11.5 20.5 11.898 20.102 12.121 19.563 12.121 19 12.121 18.437 11.898 17.898 11.5 17.5M3 4H11"
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
          d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14L16.5 16.5C16.8978 16.8978 17.4374 17.1213 18 17.1213C18.5626 17.1213 19.1022 16.8978 19.5 16.5C19.8978 16.1022 20.1213 15.5626 20.1213 15C20.1213 14.4374 19.8978 13.8978 19.5 13.5L15.62 9.62002C15.0575 9.05821 14.295 8.74265 13.5 8.74265C12.705 8.74265 11.9425 9.05821 11.38 9.62002L10.5 10.5C10.1022 10.8978 9.56259 11.1213 8.99998 11.1213C8.43737 11.1213 7.89781 10.8978 7.49998 10.5C7.10216 10.1022 6.87866 9.56262 6.87866 9.00002C6.87866 8.43741 7.10216 7.89784 7.49998 7.50002L10.31 4.69002C11.2222 3.78016 12.4119 3.20057 13.6906 3.04299C14.9694 2.88541 16.2641 3.15885 17.37 3.82002L17.84 4.10002C18.2658 4.357 18.772 4.44613 19.26 4.35002L21 4.00002"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 3 22 14H20M3 3 2 14 8.5 20.5C8.898 20.898 9.437 21.121 10 21.121 10.563 21.121 11.102 20.898 11.5 20.5 11.898 20.102 12.121 19.563 12.121 19 12.121 18.437 11.898 17.898 11.5 17.5M3 4H11"
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
          d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14L16.5 16.5C16.8978 16.8978 17.4374 17.1213 18 17.1213C18.5626 17.1213 19.1022 16.8978 19.5 16.5C19.8978 16.1022 20.1213 15.5626 20.1213 15C20.1213 14.4374 19.8978 13.8978 19.5 13.5L15.62 9.62002C15.0575 9.05821 14.295 8.74265 13.5 8.74265C12.705 8.74265 11.9425 9.05821 11.38 9.62002L10.5 10.5C10.1022 10.8978 9.56261 11.1213 9 11.1213C8.43739 11.1213 7.89782 10.8978 7.5 10.5C7.10217 10.1022 6.87868 9.56262 6.87868 9.00002C6.87868 8.43741 7.10217 7.89784 7.5 7.50002L10.31 4.69002C11.2222 3.78016 12.4119 3.20057 13.6906 3.04299C14.9694 2.88541 16.2642 3.15885 17.37 3.82002L17.84 4.10002C18.2658 4.357 18.772 4.44613 19.26 4.35002L21 4.00002"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 3 22 14H20M3 3 2 14 8.5 20.5C8.898 20.898 9.437 21.121 10 21.121 10.563 21.121 11.102 20.898 11.5 20.5 11.898 20.102 12.121 19.563 12.121 19 12.121 18.437 11.898 17.898 11.5 17.5M3 4H11"
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
          d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14L16.5 16.5C16.8978 16.8978 17.4374 17.1213 18 17.1213C18.5626 17.1213 19.1022 16.8978 19.5 16.5C19.8978 16.1022 20.1213 15.5626 20.1213 15C20.1213 14.4374 19.8978 13.8978 19.5 13.5L15.62 9.62002C15.0575 9.05821 14.295 8.74265 13.5 8.74265C12.705 8.74265 11.9425 9.05821 11.38 9.62002L10.5 10.5C10.1022 10.8978 9.56262 11.1213 9.00001 11.1213C8.4374 11.1213 7.89784 10.8978 7.50001 10.5C7.10219 10.1022 6.87869 9.56262 6.87869 9.00002C6.87869 8.43741 7.10219 7.89784 7.50001 7.50002L10.31 4.69002C11.2223 3.78016 12.4119 3.20057 13.6907 3.04299C14.9694 2.88541 16.2642 3.15885 17.37 3.82002L17.84 4.10002C18.2658 4.357 18.7721 4.44613 19.26 4.35002L21 4.00002"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 3 22 14H20M3 3 2 14 8.5 20.5C8.898 20.898 9.437 21.121 10 21.121 10.563 21.121 11.102 20.898 11.5 20.5 11.898 20.102 12.121 19.563 12.121 19 12.121 18.437 11.898 17.898 11.5 17.5M3 4H11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Handshake doesn't support ${type}`);
  return null;
});

Handshake.displayName = "Handshake";

Handshake.metadata = {
  name: "Handshake",
  category: "stroke/security",
  tags: ["handshake", "icon"],
  description: "Handshake icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Handshake;
