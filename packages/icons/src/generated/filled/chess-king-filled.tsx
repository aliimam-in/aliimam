/**
 * Auto-generated logo component: Chess King Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessKingFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessKingFilledLogo = React.forwardRef<SVGSVGElement, ChessKingFilledLogoProps>(
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
      <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v1.758a4.49 4.49 0 0 1 2.033 -.734l.24 -.018l.227 -.006a4.5 4.5 0 0 1 4.5 4.5a4.504 4.504 0 0 1 -4.064 4.478l-.217 .016l-.219 .006h-7a4.5 4.5 0 1 1 2.501 -8.241l-.001 -1.759h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" />
  <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" />
    </svg>
  )
);

ChessKingFilledLogo.displayName = "ChessKingFilledLogo";

export const ChessKingFilledLogoMetadata = {
  id: "chess-king-filled",
  baseId: "chess-king-filled",
  variant: "default",
  name: "Chess King Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessKingFilledLogo;
