/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDownCircleFilled = React.forwardRef<SVGSVGElement, ArrowDownCircleFilledProps>(
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
      <path d="M12 2a3 3 0 0 1 1 5.829v10.755l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-10.757a3.001 3.001 0 0 1 1 -5.829" />
    </svg>
  )
);
ArrowDownCircleFilled.displayName = "ArrowDownCircleFilled";
export const ArrowDownCircleFilledMetadata = { 
  id: "arrow-down-circle_filled", 
  baseId: "arrow-down-circle", 
  variant: "filled", 
  name: "Arrow Down Circle", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDownCircleFilled;
