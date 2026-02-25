/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WandSparklesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WandSparkles = React.forwardRef<SVGSVGElement, WandSparklesProps>(
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
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
  <path d="m14 7 3 3" />
  <path d="M5 6v4" />
  <path d="M19 14v4" />
  <path d="M10 2v2" />
  <path d="M7 8H3" />
  <path d="M21 16h-4" />
  <path d="M11 3H9" />
    </svg>
  )
);
WandSparkles.displayName = "WandSparkles";
export const WandSparklesMetadata = { 
  id: "wand-sparkles", 
  baseId: "wand-sparkles", 
  variant: "default", 
  name: "Wand Sparkles", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WandSparkles;
