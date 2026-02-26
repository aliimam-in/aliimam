/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZoomQuestionFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZoomQuestionFilled = React.forwardRef<SVGSVGElement, ZoomQuestionFilledProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-4 8.928a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1m-1.9 -5.123a1 1 0 0 0 1.433 1.389l.088 -.09a.5 .5 0 1 1 .379 .824a1 1 0 0 0 -.002 2a2.5 2.5 0 1 0 -1.9 -4.123" />
    </svg>
  )
);
ZoomQuestionFilled.displayName = "ZoomQuestionFilled";
export const ZoomQuestionFilledMetadata = { 
  id: "zoom-question_filled", 
  baseId: "zoom-question", 
  variant: "filled", 
  name: "Zoom Question", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZoomQuestionFilled;
