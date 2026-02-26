/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigDownLinesFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigDownLinesFilled = React.forwardRef<SVGSVGElement, ArrowBigDownLinesFilledProps>(
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
      <path d="M9 8l-.117 .007a1 1 0 0 0 -.883 .993v1.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-1.999a1 1 0 0 0 -1 -1h-6z" />
  <path d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z" />
  <path d="M15 5a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z" />
    </svg>
  )
);
ArrowBigDownLinesFilled.displayName = "ArrowBigDownLinesFilled";
export const ArrowBigDownLinesFilledMetadata = { 
  id: "arrow-big-down-lines_filled", 
  baseId: "arrow-big-down-lines", 
  variant: "filled", 
  name: "Arrow Big Down Lines", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowBigDownLinesFilled;
