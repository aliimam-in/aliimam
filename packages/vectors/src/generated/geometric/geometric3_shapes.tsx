
'use client';
import React from 'react';

export interface Geometric3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric3Shapes = React.forwardRef<SVGSVGElement, Geometric3ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M30.8866 119.241C41.1358 114.623 52.5068 112.053 64.4778 112.053C109.687 112.053 146.337 148.703 146.337 193.912V240.029C146.337 304.271 198.415 356.349 262.657 356.349C271.59 356.349 280.288 355.342 288.643 353.436V129.062C288.643 57.7831 230.86 0 159.581 0C91.606 0 35.9048 52.55 30.8866 119.241Z" fill="#43A363"/>
    </svg>
  )
);

Geometric3Shapes.displayName = "Geometric3Shapes";

export const Geometric3ShapesMetadata = {
  id: "geometric3_shapes",
  baseId: "geometric3",
  variant: "shapes",
  name: "Geometric3",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric3Shapes;
