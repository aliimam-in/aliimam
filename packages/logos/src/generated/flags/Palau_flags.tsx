/**
 * Auto-generated logo component: Palau (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PalauFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const PalauFlags = React.forwardRef<SVGSVGElement, PalauFlagsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#4498F7"/>
<path d="M14 22C17.3137 22 20 19.3137 20 16C20 12.6863 17.3137 10 14 10C10.6863 10 8 12.6863 8 16C8 19.3137 10.6863 22 14 22Z" fill="#FFFF54"/>
    </svg>
  )
);

PalauFlags.displayName = "PalauFlags";

export const PalauFlagsMetadata = {
  id: "Palau_flags",
  baseId: "Palau",
  variant: "flags",
  name: "Palau",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default PalauFlags;
