import Item from './Item'

function ItemList({ items }) {
  return (
    <div className="container mt-4">
    <div className="row">
        {items.map((producto) => (<Item key={producto.id} producto={producto} />
        ))}
    </div>
  </div>
  )
  
}

export default ItemList;