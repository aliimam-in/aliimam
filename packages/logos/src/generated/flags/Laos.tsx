/**
 * Auto-generated logo component: Laos (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LaosProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Laos = React.forwardRef<SVGSVGElement, LaosProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 10H31V22H1V10Z" fill="#0B2364" />
<path d="M5 4H27C29.208 4 31 5.792 31 8V11H1V8C1 5.792 2.792 4 5 4Z" fill="#BE2A2C" />
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V21L31 21V24C31 26.208 29.208 28 27 28Z" fill="#BE2A2C" />
<path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="white" />
    </svg>
  )
);

Laos.displayName = "Laos";

export const LaosMetadata = {
  id: "Laos",
  baseId: "Laos",
  variant: "default",
  name: "Laos",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Laos;
