/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ComputerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Computer = React.forwardRef<SVGSVGElement, ComputerProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="14" height="8" x="5" y="2" rx="2" />
  <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6 18h2" />
  <path d="M12 18h6" />
    </svg>
  )
);
Computer.displayName = "Computer";
export const ComputerMetadata = { id: "computer", baseId: "computer", variant: "default", name: "Computer", category: "device", tags: [], viewBox: "0 0 24 24" } as const;
export default Computer;
