/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowMoveDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowMoveDownFilled = React.forwardRef<SVGSVGElement, ArrowMoveDownFilledProps>(
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
      <path d="M12 10a1 1 0 0 1 1 1v7.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-7.586a1 1 0 0 1 1 -1m0 -8a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
    </svg>
  )
);
ArrowMoveDownFilled.displayName = "ArrowMoveDownFilled";
export const ArrowMoveDownFilledMetadata = { 
  id: "arrow-move-down_filled", 
  baseId: "arrow-move-down", 
  variant: "filled", 
  name: "Arrow Move Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowMoveDownFilled;
