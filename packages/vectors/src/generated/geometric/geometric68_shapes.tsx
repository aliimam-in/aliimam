/**
 * Auto-generated logo component: Geometric68 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric68ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric68Shapes = React.forwardRef<SVGSVGElement, Geometric68ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M116.453 213.81L58.5236 314.147L120.245 349.782L178.175 249.445L236.104 349.782L297.826 314.147L239.896 213.81H355.756V142.54H239.896L297.826 42.2028L236.104 6.56787L178.175 106.905L120.245 6.56787L58.5236 42.2028L116.453 142.54H0.593994V213.81H116.453Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric68Shapes.displayName = "Geometric68Shapes";

export const Geometric68ShapesMetadata = {
  id: "geometric68_shapes",
  baseId: "geometric68",
  variant: "shapes",
  name: "Geometric68",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric68Shapes;
