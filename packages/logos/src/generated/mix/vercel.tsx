/**
 * Auto-generated logo component: Vercel (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VercelLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VercelLogo = React.forwardRef<SVGSVGElement, VercelLogoProps>(
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
      <path fill="#000" d="m128 0 128 221.705H0z" />
    </svg>
  )
);

VercelLogo.displayName = "VercelLogo";

export const VercelLogoMetadata = {
  id: "vercel",
  baseId: "vercel",
  variant: "default",
  name: "Vercel",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 222",
} as const;

export default VercelLogo;
