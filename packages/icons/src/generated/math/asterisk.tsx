/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AsteriskProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Asterisk = React.forwardRef<SVGSVGElement, AsteriskProps>(
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
      <path d="M12 6v12" />
  <path d="M17.196 9 6.804 15" />
  <path d="m6.804 9 10.392 6" />
    </svg>
  )
);
Asterisk.displayName = "Asterisk";
export const AsteriskMetadata = { 
  id: "asterisk", 
  baseId: "asterisk", 
  variant: "default", 
  name: "Asterisk", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Asterisk;
