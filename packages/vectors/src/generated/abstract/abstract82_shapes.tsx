
'use client';
import React from 'react';

export interface Abstract82ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract82Shapes = React.forwardRef<SVGSVGElement, Abstract82ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 23 21"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M8.15578 0.891723C6.14286 2.0471 4.78299 4.21176 4.78299 6.68877C4.78299 6.75426 4.78635 6.81807 4.78803 6.88188L1.50759 0.891723H8.15578ZM11.9482 13.3624C13.1855 13.2818 14.3322 12.8653 15.2975 12.2037L11.9482 18.3198V13.3624ZM11.0534 13.3624V18.3198L7.70414 12.2037C8.66947 12.8653 9.81615 13.2818 11.0534 13.3624ZM11.0534 12.469C8.05169 12.2406 5.6795 9.73675 5.6795 6.69045C5.6795 3.64415 8.05169 1.14026 11.0534 0.911874V12.469ZM11.9482 0.911874C14.95 1.14026 17.3222 3.64415 17.3222 6.69045C17.3222 9.73675 14.95 12.2406 11.9482 12.469V0.911874ZM21.4924 0.891723L18.212 6.88188C18.2136 6.81807 18.217 6.75426 18.217 6.68877C18.217 4.21176 16.8571 2.0471 14.8442 0.891723H21.4924ZM0 0L11.5 21L23 0H0Z" />
    </svg>
  )
);

Abstract82Shapes.displayName = "Abstract82Shapes";

export const Abstract82ShapesMetadata = {
  id: "abstract82_shapes",
  baseId: "abstract82",
  variant: "shapes",
  name: "Abstract82",
  category: "abstract",
  tags: [],
  viewBox: "0 0 23 21",
} as const;

export default Abstract82Shapes;
