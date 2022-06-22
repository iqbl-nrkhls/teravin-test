export function Input ({ label, required, ...props }) {
  return (
    <label className="flex items-center">
      {label && <p className="w-1/3">{label}</p>}
      <input
      className={`border bg-white px-2 py-1 ${label ? 'w-2/3' : 'w-full'}`}
      required={required}
      {...props} />
    </label>
  )
}