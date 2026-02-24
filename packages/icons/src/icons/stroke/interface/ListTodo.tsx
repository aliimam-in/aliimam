
import * as React from "react"

export interface ListTodoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListTodo = React.forwardRef<SVGSVGElement, ListTodoProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4"/><rect width="6" height="6" x="3" y="4" rx="1"/></g>` }}
      {...props}
    />
  )
)

ListTodo.displayName = "ListTodo"
