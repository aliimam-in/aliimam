/**
 * Auto-generated logo component: Chess Rook (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessRookFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessRookFilledLogo = React.forwardRef<SVGSVGElement, ChessRookFilledLogoProps>(
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
      <path d="M14 3a1 1 0 0 1 .993 .883l.007 .117v2h1.652l.362 -2.164a1 1 0 0 1 1.034 -.836l.116 .013a1 1 0 0 1 .836 1.035l-.013 .116l-.5 3a1 1 0 0 1 -.865 .829l-.122 .007h-1.383l.877 7.89a1 1 0 0 1 -.877 1.103l-.117 .007h-8a1 1 0 0 1 -1 -.993l.006 -.117l.877 -7.89h-1.383a1 1 0 0 1 -.96 -.718l-.026 -.118l-.5 -3a1 1 0 0 1 1.947 -.442l.025 .114l.361 2.164h1.653v-2a1 1 0 0 1 1.993 -.117l.007 .117v2h2v-2a1 1 0 0 1 1 -1z" />
  <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" />
    </svg>
  )
);

ChessRookFilledLogo.displayName = "ChessRookFilledLogo";

export const ChessRookFilledLogoMetadata = {
  id: "chess-rook_filled",
  baseId: "chess-rook",
  variant: "filled",
  name: "Chess Rook",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessRookFilledLogo;
