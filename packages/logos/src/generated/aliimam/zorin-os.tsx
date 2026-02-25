/**
 * Auto-generated logo component: Zorin Os (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZorinOsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ZorinOs = React.forwardRef<SVGSVGElement, ZorinOsProps>(
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
        <path d="M125.927857,1.42108547e-14 L64.159065,0.0343924229 L46.275005,31.3830859 L209.828172,31.3830859 L192.150467,0.206354538 L125.927857,1.42108547e-14 Z M24.1434809,70.2809162 L0,112.910324 L22.4926446,152.87432 L31.1767314,152.87432 L153.923289,70.2809162 L24.1434809,70.2809162 Z M223.653926,70.2809162 L100.890173,152.87432 L233.57614,152.87432 L256,113.254249 L231.822127,70.2809162 L223.653926,70.2809162 Z M44.4694028,191.77215 L63.8667294,225.958219 L130.072143,226.164573 L191.858131,226.130181 L211.461812,191.77215 L44.4694028,191.77215 Z" fill="#00AAFF"></path>
    </g>
    </svg>
  )
);

ZorinOs.displayName = "ZorinOs";

export const ZorinOsMetadata = {
  id: "zorin-os",
  baseId: "zorin-os",
  variant: "default",
  name: "Zorin Os",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 227",
} as const;

export default ZorinOs;
