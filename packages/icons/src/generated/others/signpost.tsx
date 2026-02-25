/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SignpostProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Signpost = React.forwardRef<SVGSVGElement, SignpostProps>(
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
      <path d="M12 13v8" />
  <path d="M12 3v3" />
  <path d="M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" />
    </svg>
  )
);
Signpost.displayName = "Signpost";
export const SignpostMetadata = { 
  id: "signpost", 
  baseId: "signpost", 
  variant: "default", 
  name: "Signpost", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Signpost;
