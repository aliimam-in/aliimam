
'use client';
import React from 'react';

export interface Abstract117ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract117Shapes = React.forwardRef<SVGSVGElement, Abstract117ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 23 23"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M11.5 23C16.1073 23 20.0812 20.2948 21.9212 16.3866H1.08064C2.91882 20.2948 6.89452 23 11.5 23ZM0.12231 13.2433H22.8777C22.9361 12.8599 22.9744 12.4711 22.9945 12.0768H0.00548154C0.0255609 12.4711 0.0638969 12.8599 0.12231 13.2433ZM22.3885 7.76525H0.613331C0.481902 8.14493 0.370561 8.53554 0.279291 8.93165H22.7207C22.6313 8.53554 22.5181 8.14493 22.3885 7.76525ZM22.9032 9.94293H0.0967514C0.0474657 10.3117 0.0146032 10.6859 0 11.0656H23C22.9854 10.6859 22.9544 10.3117 22.9032 9.94293ZM11.5 0C6.83794 0 2.82207 2.77095 1.01493 6.75397H21.9869C20.1779 2.77095 16.1639 0 11.5 0ZM0.324926 14.2545H22.6769C22.582 14.636 22.4706 15.0102 22.3392 15.3771H0.66262C0.531191 15.0121 0.418021 14.6379 0.324926 14.2545Z" fill="currentColor"/>
    </svg>
  )
);

Abstract117Shapes.displayName = "Abstract117Shapes";

export const Abstract117ShapesMetadata = {
  id: "abstract117_shapes",
  baseId: "abstract117",
  variant: "shapes",
  name: "Abstract117",
  category: "abstract",
  tags: [],
  viewBox: "0 0 23 23",
} as const;

export default Abstract117Shapes;
