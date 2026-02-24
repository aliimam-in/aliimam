/**
 * Auto-generated logo component: Vercel (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VercelDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VercelDark = React.forwardRef<SVGSVGElement, VercelDarkProps>(
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
      <path fill="#fff" d="m128 0 128 221.705H0z" />
    </svg>
  )
);

VercelDark.displayName = "VercelDark";

export const VercelDarkMetadata = {
  id: "vercel_dark",
  baseId: "vercel",
  variant: "dark",
  name: "Vercel",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 222",
} as const;

export default VercelDark;
