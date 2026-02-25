/**
 * Auto-generated logo component: Adobe Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdobeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AdobeIcon = React.forwardRef<SVGSVGElement, AdobeIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 227"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M128.023598,83.5273036 L188.31164,226.568637 L148.799233,226.568637 L130.76096,181.015154 L86.642233,181.015154 L128.023598,83.5273036 Z M256,2.84217094e-14 L256,226.540319 L161.353342,2.84217094e-14 L256,2.84217094e-14 Z M94.6844143,2.84217094e-14 L0,226.540319 L0,2.84217094e-14 L94.6844143,2.84217094e-14 Z" fill="#FA0F00"></path>
    </g>
    </svg>
  )
);

AdobeIcon.displayName = "AdobeIcon";

export const AdobeIconMetadata = {
  id: "adobe-icon",
  baseId: "adobe-icon",
  variant: "default",
  name: "Adobe Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 227",
} as const;

export default AdobeIcon;
