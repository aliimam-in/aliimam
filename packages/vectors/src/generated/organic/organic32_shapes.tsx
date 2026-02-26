
'use client';
import React from 'react';

export interface Organic32ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic32Shapes = React.forwardRef<SVGSVGElement, Organic32ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M100.332 150.957C100.332 127.261 65.6233 86.6535 59.8019 52.6608C55.0294 24.7931 58.88 10.9276 72.0454 5.66186C90.9138 -1.88501 115.785 23.6608 125.058 62.3546C129.274 79.9488 131.239 124.17 143.656 139.624C152.658 150.827 201.297 156.108 208.446 157.052C230.082 159.91 300.688 150.52 284.105 200.273C274.65 228.638 218.014 214.934 196.145 205.56C182.891 199.879 159.926 192.755 143.656 195.258C134.774 196.624 129.783 222.04 115.785 240.589C89.394 275.562 55.001 302.402 30.274 294.162C17.3214 289.846 6.38735 272.523 18.9382 250.835C33.5322 225.617 100.332 185.792 100.332 150.957Z" fill="currentColor"/>
    </svg>
  )
);

Organic32Shapes.displayName = "Organic32Shapes";

export const Organic32ShapesMetadata = {
  id: "organic32_shapes",
  baseId: "organic32",
  variant: "shapes",
  name: "Organic32",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic32Shapes;
