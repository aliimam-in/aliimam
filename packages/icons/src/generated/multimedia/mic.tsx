/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mic = React.forwardRef<SVGSVGElement, MicProps>(
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
      <path d="M12 19v3" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <rect x="9" y="2" width="6" height="13" rx="3" />
    </svg>
  )
);
Mic.displayName = "Mic";
export const MicMetadata = { 
  id: "mic", 
  baseId: "mic", 
  variant: "default", 
  name: "Mic", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Mic;
