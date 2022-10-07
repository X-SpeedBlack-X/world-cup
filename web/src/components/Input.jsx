export function Input({ name, label, type, placeholder }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-bold text-gray-400 mb-2">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className="p-3 border border-gray-600 rounded-xl outline-0 focus:outline focus:outline-gray-600 focus:outline-1"
      />
    </div>
  );
}
