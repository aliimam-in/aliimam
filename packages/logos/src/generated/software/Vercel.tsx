/**
 * Auto-generated logo component: Vercel (default)
 * Category: software
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VercelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Vercel = React.forwardRef<SVGSVGElement, VercelProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M12 2L24 22.9721H0L12 2Z"  fill="currentColor"/>
    </svg>
  )
);

Vercel.displayName = "Vercel";

export const VercelMetadata = {
  id: "Vercel",
  baseId: "Vercel",
  variant: "default",
  name: "Vercel",
  category: "software",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Vercel;
