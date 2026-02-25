/**
 * Auto-generated logo component: Importio Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImportioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ImportioIcon = React.forwardRef<SVGSVGElement, ImportioIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 346"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M82.2689796,182.196821 L164.553262,264.068859 L82.2689796,345.926981 L0,264.053396 L82.2689796,182.196821 Z M173.715099,91.1736151 L256,173.047354 L173.715099,254.903929 L91.4455072,173.030345 L173.715099,91.1736151 Z M82.2689796,0 L164.553262,81.8729194 L82.2689796,163.72934 L0,81.8569925 L82.2689796,0 Z" fill="#772CE8"></path>
    </g>
    </svg>
  )
);

ImportioIcon.displayName = "ImportioIcon";

export const ImportioIconMetadata = {
  id: "importio-icon",
  baseId: "importio-icon",
  variant: "default",
  name: "Importio Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 346",
} as const;

export default ImportioIcon;
