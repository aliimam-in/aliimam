/**
 * Auto-generated logo component: Curseforge (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurseforgeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CurseforgeLogo = React.forwardRef<SVGSVGElement, CurseforgeLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 260 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#130700" d="M196.422 98.77S247.874 90.623 256 66.858h-78.819V48H4l21.334 24.862v25.473s53.83-2.811 74.653 13.047c28.502 26.532-32.058 62.397-32.058 62.397l-10.384 34.512c16.239-15.529 47.188-35.618 103.933-34.65-21.594 6.854-43.307 17.56-60.211 34.65h114.71l-10.802-34.512s-83.139-49.235-8.753-75.005v-.004Z" />
    </svg>
  )
);

CurseforgeLogo.displayName = "CurseforgeLogo";

export const CurseforgeLogoMetadata = {
  id: "curseforge",
  baseId: "curseforge",
  variant: "default",
  name: "Curseforge",
  category: "mix",
  tags: [],
  viewBox: "0 0 260 256",
} as const;

export default CurseforgeLogo;
