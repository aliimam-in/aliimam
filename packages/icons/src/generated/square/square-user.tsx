/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareUserProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareUser = React.forwardRef<SVGSVGElement, SquareUserProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <circle cx="12" cy="10" r="3" />
  <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </svg>
  )
);
SquareUser.displayName = "SquareUser";
export const SquareUserMetadata = { 
  id: "square-user", 
  baseId: "square-user", 
  variant: "default", 
  name: "Square User", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareUser;
