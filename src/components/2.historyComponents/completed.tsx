export default function Completed({ data }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Completed</h3>
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 border border-gray-300 rounded mb-2 bg-gray-100"
        >
          <p>
            <strong>Type:</strong> {item.type}
          </p>
          <p>
            <strong>Date:</strong> {new Date(item.date).toLocaleString()}
          </p>
          <p>
            <strong>Description:</strong> {item.desc || 'No description'}
          </p>
        </div>
      ))}
    </div>
  )
}
