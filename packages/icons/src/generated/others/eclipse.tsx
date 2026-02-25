/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EclipseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Eclipse = React.forwardRef<SVGSVGElement, EclipseProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
);
Eclipse.displayName = "Eclipse";
export const EclipseMetadata = { 
  id: "eclipse", 
  baseId: "eclipse", 
  variant: "default", 
  name: "Eclipse", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Eclipse;
