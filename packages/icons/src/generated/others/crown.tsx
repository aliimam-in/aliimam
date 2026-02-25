/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CrownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crown = React.forwardRef<SVGSVGElement, CrownProps>(
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
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
  <path d="M5 21h14" />
    </svg>
  )
);
Crown.displayName = "Crown";
export const CrownMetadata = { 
  id: "crown", 
  baseId: "crown", 
  variant: "default", 
  name: "Crown", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Crown;
