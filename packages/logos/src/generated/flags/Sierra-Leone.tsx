/**
 * Auto-generated logo component: Sierra Leone (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SierraLeoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SierraLeone = React.forwardRef<SVGSVGElement, SierraLeoneProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#81CBFA" />
<path d="M16 7L23.281 25L16 23.281L8.71899 25L16 7Z" fill="white" />
<path d="M16 9.427L21.604 23.281H10.396L16 9.427Z" fill="black" />
<path d="M16 16L23.281 25H8.71899L16 16Z" fill="#F4D24B" />
    </svg>
  )
);

SierraLeone.displayName = "SierraLeone";

export const SierraLeoneMetadata = {
  id: "Sierra-Leone",
  baseId: "Sierra-Leone",
  variant: "default",
  name: "Sierra Leone",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default SierraLeone;
