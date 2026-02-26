/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowDownRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowDownRightFilled = React.forwardRef<SVGSVGElement, CircleArrowDownRightFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 4.66l-.117 .007a1 1 0 0 0 -.883 .993v3.585l-4.293 -4.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4.292 4.293h-3.585l-.117 .007a1 1 0 0 0 .117 1.993l6.034 .001a.998 .998 0 0 0 .186 -.025l.053 -.014l.066 -.02l.13 -.059l.093 -.055a.98 .98 0 0 0 .438 -.828v-6l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
CircleArrowDownRightFilled.displayName = "CircleArrowDownRightFilled";
export const CircleArrowDownRightFilledMetadata = { 
  id: "circle-arrow-down-right_filled", 
  baseId: "circle-arrow-down-right", 
  variant: "filled", 
  name: "Circle Arrow Down Right", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowDownRightFilled;
