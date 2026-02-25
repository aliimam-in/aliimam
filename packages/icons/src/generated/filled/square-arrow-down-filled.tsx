/**
 * Auto-generated logo component: Square Arrow Down Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowDownFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowDownFilledLogo = React.forwardRef<SVGSVGElement, SquareArrowDownFilledLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4l.094 .083l.092 .064l.098 .052l.11 .044l.112 .03l.126 .017l.075 .003l.117 -.007l.149 -.029l.105 -.035l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.293 2.292v-5.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);

SquareArrowDownFilledLogo.displayName = "SquareArrowDownFilledLogo";

export const SquareArrowDownFilledLogoMetadata = {
  id: "square-arrow-down-filled",
  baseId: "square-arrow-down-filled",
  variant: "default",
  name: "Square Arrow Down Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowDownFilledLogo;
