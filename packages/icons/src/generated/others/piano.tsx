/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PianoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Piano = React.forwardRef<SVGSVGElement, PianoProps>(
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
      <path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" />
  <path d="M2 14h20" />
  <path d="M6 14v4" />
  <path d="M10 14v4" />
  <path d="M14 14v4" />
  <path d="M18 14v4" />
    </svg>
  )
);
Piano.displayName = "Piano";
export const PianoMetadata = { 
  id: "piano", 
  baseId: "piano", 
  variant: "default", 
  name: "Piano", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Piano;
