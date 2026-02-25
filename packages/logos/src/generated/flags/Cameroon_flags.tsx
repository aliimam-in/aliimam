/**
 * Auto-generated logo component: Cameroon (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameroonFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const CameroonFlags = React.forwardRef<SVGSVGElement, CameroonFlagsProps>(
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
      <path d="M10 4H22V28H10V4Z" fill="#BE2A2C"/>
<path d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z" fill="#357960"/>
<path d="M27 28H21L21 4H27C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z" fill="#F6D44A"/>
<path d="M17.516 16.3911L19.969 14.6091H16.937L16 11.7251L15.063 14.6091H12.031L14.484 16.3911L13.547 19.2751L16 17.4921L18.453 19.2751L17.516 16.3911Z" fill="#F6D44A"/>
    </svg>
  )
);

CameroonFlags.displayName = "CameroonFlags";

export const CameroonFlagsMetadata = {
  id: "Cameroon_flags",
  baseId: "Cameroon",
  variant: "flags",
  name: "Cameroon",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default CameroonFlags;
