/**
 * Auto-generated logo component: Adobe (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdobeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Adobe = React.forwardRef<SVGSVGElement, AdobeProps>(
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

Adobe.displayName = "Adobe";

export const AdobeMetadata = {
  id: "adobe",
  baseId: "adobe",
  variant: "default",
  name: "Adobe",
  category: "adobe",
  tags: [],
  viewBox: "0 0 256 227",
} as const;

export default Adobe;
