/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Van = React.forwardRef<SVGSVGElement, VanProps>(
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
      <path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" />
  <path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" />
  <path d="M9 18h5" />
  <circle cx="16" cy="18" r="2" />
  <circle cx="7" cy="18" r="2" />
    </svg>
  )
);
Van.displayName = "Van";
export const VanMetadata = { 
  id: "van", 
  baseId: "van", 
  variant: "default", 
  name: "Van", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Van;
