/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HexagonNumber1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HexagonNumber1Filled = React.forwardRef<SVGSVGElement, HexagonNumber1FilledProps>(
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
      <path d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067 .04 .127 .084 .18 .133l.008 .007l.107 .076a3.223 3.223 0 0 1 1.284 2.39l.005 .203v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.226 3.226 0 0 1 -1.678 -2.826v-7.285a3.21 3.21 0 0 1 1.65 -2.808zm.952 5.803l-.084 .076l-2 2l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l.293 -.293v5.586l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-8l-.006 -.114c-.083 -.777 -1.008 -1.16 -1.617 -.67z" />
    </svg>
  )
);
HexagonNumber1Filled.displayName = "HexagonNumber1Filled";
export const HexagonNumber1FilledMetadata = { 
  id: "hexagon-number-1_filled", 
  baseId: "hexagon-number-1", 
  variant: "filled", 
  name: "Hexagon Number 1", 
  category: "hexagon", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HexagonNumber1Filled;
