/**
 * Auto-generated logo component: Qdrant Icon Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QdrantIconDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const QdrantIconDarkLogo = React.forwardRef<SVGSVGElement, QdrantIconDarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 57 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#fff" clipPath="url(#a)">
    <path d="M28.667 0 .953 16v32l27.714 16 10.392-6V46l-10.392 6-17.32-10V22l17.32-10 17.32 10v40l10.393-6V16z" />
    <path d="M18.275 26v12l10.392 6 10.392-6V26l-10.392-6z" />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M.664 0h56v64h-56z" />
    </clipPath>
  </defs>
    </svg>
  )
);

QdrantIconDarkLogo.displayName = "QdrantIconDarkLogo";

export const QdrantIconDarkLogoMetadata = {
  id: "qdrant-icon-dark",
  baseId: "qdrant-icon-dark",
  variant: "default",
  name: "Qdrant Icon Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 57 64",
} as const;

export default QdrantIconDarkLogo;
