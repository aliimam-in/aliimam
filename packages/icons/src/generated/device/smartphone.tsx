/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmartphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Smartphone = React.forwardRef<SVGSVGElement, SmartphoneProps>(
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12 18h.01" />
    </svg>
  )
);
Smartphone.displayName = "Smartphone";
export const SmartphoneMetadata = { 
  id: "smartphone", 
  baseId: "smartphone", 
  variant: "default", 
  name: "Smartphone", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Smartphone;
