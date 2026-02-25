/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FeatherProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Feather = React.forwardRef<SVGSVGElement, FeatherProps>(
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
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
  <path d="M16 8 2 22" />
  <path d="M17.5 15H9" />
    </svg>
  )
);
Feather.displayName = "Feather";
export const FeatherMetadata = { 
  id: "feather", 
  baseId: "feather", 
  variant: "default", 
  name: "Feather", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Feather;
