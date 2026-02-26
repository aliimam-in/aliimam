
'use client';
import React from 'react';

export interface Geometric1TextureProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric1Texture = React.forwardRef<SVGSVGElement, Geometric1TextureProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M0 342H500V500H0V342Z" fill="#292524"/>
<path d="M0 103H500V107H0V103Z" fill="#292524"/>
<path d="M0 179.515H500V185.515H0V179.515Z" fill="#292524"/>
<path d="M0 225.375H500V233.375H0V225.375Z" fill="#292524"/>
<path d="M0 298H500V332.44H0V298Z" fill="#292524"/>
<path d="M0 258.03H500V279.47H0V258.03Z" fill="#292524"/>
    </svg>
  )
);

Geometric1Texture.displayName = "Geometric1Texture";

export const Geometric1TextureMetadata = {
  id: "geometric1_texture",
  baseId: "geometric1",
  variant: "texture",
  name: "Geometric1",
  category: "geometric",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Geometric1Texture;
