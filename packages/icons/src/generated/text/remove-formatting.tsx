/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RemoveFormattingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RemoveFormatting = React.forwardRef<SVGSVGElement, RemoveFormattingProps>(
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
      <path d="M4 7V4h16v3" />
  <path d="M5 20h6" />
  <path d="M13 4 8 20" />
  <path d="m15 15 5 5" />
  <path d="m20 15-5 5" />
    </svg>
  )
);
RemoveFormatting.displayName = "RemoveFormatting";
export const RemoveFormattingMetadata = { 
  id: "remove-formatting", 
  baseId: "remove-formatting", 
  variant: "default", 
  name: "Remove Formatting", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RemoveFormatting;
