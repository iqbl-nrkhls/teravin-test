import { Link } from 'react-router-dom'

export function Button ({
  text, href, ...props
}) {
  return (
    <button
      className="border rounded-lg px-3 min-w-[120px] hover:bg-gray-100/70"
      {...props}
    >
      {text}
    </button>
  )
}

export function ButtonLink ({
  href, ...props
}) {
  return (
    <Link to={href}>
      <Button
        {...props}
      />
    </Link>
  )
}