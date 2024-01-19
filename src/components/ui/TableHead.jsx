
export const TableHead = ({ children }) => {
  return (
    <div className="overflow-x-auto" tabIndex={0} role="group">
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove Item</th>
          </tr>
        </thead>
          {children}
      </table>
    </div>
  )
}