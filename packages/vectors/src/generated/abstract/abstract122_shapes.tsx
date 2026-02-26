
'use client';
import React from 'react';

export interface Abstract122ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract122Shapes = React.forwardRef<SVGSVGElement, Abstract122ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 19"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M24 1.45201L21.0209 0L13.0852 6.28568L16.0713 8.62844L20.32 5.26421V13.7462L2.93911 0.0889008L0 1.52523V17.548L2.97911 19L10.8609 12.7561L7.87479 10.4134L3.67998 13.7358V5.32524L21.0522 18.9878L24 17.548V1.45201Z" fill="currentColor"/>
    </svg>
  )
);

Abstract122Shapes.displayName = "Abstract122Shapes";

export const Abstract122ShapesMetadata = {
  id: "abstract122_shapes",
  baseId: "abstract122",
  variant: "shapes",
  name: "Abstract122",
  category: "abstract",
  tags: [],
  viewBox: "0 0 24 19",
} as const;

export default Abstract122Shapes;
