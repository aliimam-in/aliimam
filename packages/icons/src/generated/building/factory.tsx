/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FactoryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Factory = React.forwardRef<SVGSVGElement, FactoryProps>(
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
      <path d="M12 16h.01" />
  <path d="M16 16h.01" />
  <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
  <path d="M8 16h.01" />
    </svg>
  )
);
Factory.displayName = "Factory";
export const FactoryMetadata = { 
  id: "factory", 
  baseId: "factory", 
  variant: "default", 
  name: "Factory", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Factory;
