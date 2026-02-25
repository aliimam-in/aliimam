/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Badge4kFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Badge4kFilled = React.forwardRef<SVGSVGElement, Badge4kFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-9 4a1 1 0 0 0 -1 1v2h-1v-2a1 1 0 1 0 -2 0v2a2 2 0 0 0 2 2h1v2a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m7.555 .168a1 1 0 0 0 -1.387 .277l-1.168 1.751v-1.196a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-1.196l1.168 1.75a1 1 0 0 0 1.286 .337l.1 -.059l.094 -.07a1 1 0 0 0 .184 -1.317l-1.63 -2.445l1.63 -2.445a1 1 0 0 0 -.277 -1.387" />
    </svg>
  )
);
Badge4kFilled.displayName = "Badge4kFilled";
export const Badge4kFilledMetadata = { 
  id: "badge-4k_filled", 
  baseId: "badge-4k", 
  variant: "filled", 
  name: "Badge 4k", 
  category: "badge", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Badge4kFilled;
