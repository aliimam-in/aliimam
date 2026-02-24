/**
 * Auto-generated logo component: Locofy (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocofyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LocofyLogo = React.forwardRef<SVGSVGElement, LocofyLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48.3 48.3"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd"><circle cx="24.1" cy="24.1" fill="#457eff" r="23.5" /><path d="m18.2 10.8c-.4 1.9-2.4 12.5-2.8 14.7s1.4 4.1 3.1 4.1h2.7c.7 0 1.8.5 1.4 2.4-.4 1.8-.8 3.7-1.2 5.5s1.7 2.5 2.6 1.1 7.6-12.1 8.3-13.5-.5-3.6-2.4-3.6h-3.7c-1 0-1.1-.7-.8-2.2.4-1.5.8-3.4 1.5-6.2s-2-4.3-3.4-4.3h-3.4c-.4 0-1.5.1-1.9 2z" fill="#fff" /></g>
    </svg>
  )
);

LocofyLogo.displayName = "LocofyLogo";

export const LocofyLogoMetadata = {
  id: "locofy",
  baseId: "locofy",
  variant: "default",
  name: "Locofy",
  category: "mix",
  tags: [],
  viewBox: "0 0 48.3 48.3",
} as const;

export default LocofyLogo;
