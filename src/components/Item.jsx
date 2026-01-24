import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const buildImgSrc = (path = "") => {
  const base = import.meta.env.BASE_URL || "/";
  const b = base.endsWith("/") ? base : `${base}/`;
  const p = String(path).trim().startsWith("/") ? String(path).trim().slice(1) : String(path).trim();
  return `${b}${p}`;
};

function Item({ producto }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4 d-flex justify-content-center">
      <Card style={{ width: '22rem' }} className="shadow-sm">
        <Card.Img
          variant="top"
          src={buildImgSrc(producto.image)}
          alt={producto.title}
          onError={(e) => {
            e.currentTarget.src = buildImgSrc("products/no-image.png");
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{producto.title}</Card.Title>
          <h6 className="fw-bold">${producto.price}</h6>
          <Button variant="primary" onClick={() => navigate(`/producto/${producto.id}`)}>
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
