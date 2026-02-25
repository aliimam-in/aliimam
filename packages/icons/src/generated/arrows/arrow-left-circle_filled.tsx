/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeftCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeftCircleFilled = React.forwardRef<SVGSVGElement, ArrowLeftCircleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M6.707 8.293a1 1 0 0 1 0 1.414l-1.292 1.293h10.756a3.001 3.001 0 1 1 0 2h-10.756l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.097 -.112l-.071 -.11l-.054 -.114l-.035 -.105l-.025 -.118l-.007 -.058l-.004 -.09l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09l3 -3a1 1 0 0 1 1.414 0" />
    </svg>
  )
);
ArrowLeftCircleFilled.displayName = "ArrowLeftCircleFilled";
export const ArrowLeftCircleFilledMetadata = { 
  id: "arrow-left-circle_filled", 
  baseId: "arrow-left-circle", 
  variant: "filled", 
  name: "Arrow Left Circle", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeftCircleFilled;
