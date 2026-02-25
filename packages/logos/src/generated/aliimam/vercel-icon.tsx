/**
 * Auto-generated logo component: Vercel Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VercelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VercelIcon = React.forwardRef<SVGSVGElement, VercelIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 222"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#000000" points="128 0 256 221.705007 0 221.705007"></polygon>
    </g>
    </svg>
  )
);

VercelIcon.displayName = "VercelIcon";

export const VercelIconMetadata = {
  id: "vercel-icon",
  baseId: "vercel-icon",
  variant: "default",
  name: "Vercel Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 222",
} as const;

export default VercelIcon;
