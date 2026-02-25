/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZoomExclamationFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZoomExclamationFilled = React.forwardRef<SVGSVGElement, ZoomExclamationFilledProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-4 8.928a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
ZoomExclamationFilled.displayName = "ZoomExclamationFilled";
export const ZoomExclamationFilledMetadata = { 
  id: "zoom-exclamation_filled", 
  baseId: "zoom-exclamation", 
  variant: "filled", 
  name: "Zoom Exclamation", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZoomExclamationFilled;
