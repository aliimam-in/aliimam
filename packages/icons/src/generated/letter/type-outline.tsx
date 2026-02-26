/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TypeOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TypeOutline = React.forwardRef<SVGSVGElement, TypeOutlineProps>(
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
      <path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" />
    </svg>
  )
);
TypeOutline.displayName = "TypeOutline";
export const TypeOutlineMetadata = { 
  id: "type-outline", 
  baseId: "type-outline", 
  variant: "default", 
  name: "Type Outline", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TypeOutline;
