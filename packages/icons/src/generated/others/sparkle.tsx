/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SparkleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sparkle = React.forwardRef<SVGSVGElement, SparkleProps>(
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
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    </svg>
  )
);
Sparkle.displayName = "Sparkle";
export const SparkleMetadata = { 
  id: "sparkle", 
  baseId: "sparkle", 
  variant: "default", 
  name: "Sparkle", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Sparkle;
