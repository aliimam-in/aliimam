/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AccessibilityProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Accessibility = React.forwardRef<SVGSVGElement, AccessibilityProps>(
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
      <circle cx="16" cy="4" r="1" />
  <path d="m18 19 1-7-6 1" />
  <path d="m5 8 3-3 5.5 3-2.36 3.5" />
  <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
  <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
);
Accessibility.displayName = "Accessibility";
export const AccessibilityMetadata = { 
  id: "accessibility", 
  baseId: "accessibility", 
  variant: "default", 
  name: "Accessibility", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Accessibility;
