import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AwardProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Award: IconComponent<AwardProps> = React.forwardRef<
  SVGSVGElement,
  AwardProps
>(function Award(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "solid") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12 0.5C16.1421 0.5 19.5 3.85786 19.5 8C19.5 10.1685 18.5787 12.1209 17.1074 13.4902L18.4688 21.1533L18.4707 21.166C18.5385 21.5674 18.4824 21.9801 18.3096 22.3486C18.1366 22.7172 17.855 23.0241 17.5029 23.2285C17.1507 23.4329 16.7438 23.5249 16.3379 23.4922C15.9532 23.4611 15.5866 23.3186 15.2812 23.084V23.085L12.002 20.624L8.71777 23.085L8.7168 23.084C8.41185 23.3175 8.04687 23.4602 7.66309 23.4912C7.25773 23.5239 6.85193 23.4323 6.5 23.2285C6.14813 23.0247 5.86576 22.7184 5.69238 22.3506C5.51912 21.9827 5.46247 21.57 5.5293 21.1689C5.53016 21.1639 5.53132 21.1584 5.53223 21.1533L6.89258 13.4902C5.42128 12.1209 4.5 10.1685 4.5 8C4.5 3.85786 7.85786 0.5 12 0.5ZM14.3486 15.1221C13.6096 15.3656 12.8206 15.5 12 15.5C11.1784 15.5 10.3882 15.3662 9.64844 15.1221L8.92871 19.1787L10.5059 17.998L10.5068 17.9971C10.9387 17.6744 11.4638 17.5001 12.0029 17.5L12.2051 17.5078C12.6056 17.5402 12.9927 17.6691 13.333 17.8828L13.499 17.9971L13.502 17.999L15.0693 19.1758L14.3486 15.1221Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M15.477 12.89L16.992 21.416C17.009 21.5164 16.9949 21.6196 16.9516 21.7118C16.9084 21.8039 16.838 21.8807 16.7499 21.9318C16.6619 21.9829 16.5603 22.0059 16.4588 21.9977C16.3573 21.9895 16.2607 21.9506 16.182 21.886L12.602 19.199C12.4292 19.0699 12.2192 19.0001 12.0035 19.0001C11.7878 19.0001 11.5778 19.0699 11.405 19.199L7.819 21.885C7.74032 21.9494 7.64386 21.9884 7.54249 21.9966C7.44112 22.0048 7.33967 21.9818 7.25166 21.9309C7.16365 21.8799 7.09327 21.8033 7.04991 21.7113C7.00656 21.6194 6.99228 21.5163 7.009 21.416L8.523 12.89"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Award doesn't support ${type}`);
  return null;
});

Award.displayName = "Award";

Award.metadata = {
  name: "Award",
  category: "solid/accountsAccess",
  tags: ["award", "icon"],
  description: "Award icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Award;
