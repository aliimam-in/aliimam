/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowGuideFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowGuideFilled = React.forwardRef<SVGSVGElement, ArrowGuideFilledProps>(
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
      <path d="M18.707 3.293l3 3q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118l-.003 .075l-.017 .126l-.03 .111l-.044 .111l-.052 .098l-.067 .096l-.08 .09l-3 3a1 1 0 0 1 -1.414 -1.414l1.292 -1.293h-4.585a1 1 0 0 0 -1 1v8a3 3 0 0 1 -3 3h-2.171a3.001 3.001 0 0 1 -5.829 -1l.005 -.176a3 3 0 0 1 5.825 -.824h2.17a1 1 0 0 0 1 -1v-8a3 3 0 0 1 3 -3h4.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0" />
    </svg>
  )
);
ArrowGuideFilled.displayName = "ArrowGuideFilled";
export const ArrowGuideFilledMetadata = { 
  id: "arrow-guide_filled", 
  baseId: "arrow-guide", 
  variant: "filled", 
  name: "Arrow Guide", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowGuideFilled;
