/**
 * Auto-generated logo component: Payload (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PayloadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Payload = React.forwardRef<SVGSVGElement, PayloadProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 305"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M116.204338,0 L256,84.0314829 L256,243.530232 L150.735428,304.426681 L150.735428,144.927526 L10.7718249,61.0076104 L116.204338,0 Z M105.488528,171.121391 L105.488528,295.584108 L0,232.129462 L105.488528,171.121391 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

Payload.displayName = "Payload";

export const PayloadMetadata = {
  id: "payload",
  baseId: "payload",
  variant: "default",
  name: "Payload",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 305",
} as const;

export default Payload;
