import React from 'react'
import car from '../../assets/car2.jpg'
export default function CarCardComponent({
  imageSrc = car,
  imageAlt = "card image",
  title = "Card title",
  text = "Some quick example text to build on the card title and make up the bulk of the card’s content.",
  items = ["An item", "A second item", "A third item"],
  links = [
    { href: "#", label: "Card link" },
    { href: "#", label: "Another link" },
  ],
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageSrc} className="card-img-top" alt={imageAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>

      <ul className="list-group list-group-flush">
        {items.map((item, idx) => (
          <li className="list-group-item" key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <div className="card-body">
        {links.map((link, idx) => (
          <a className="card-link" href={link.href} key={idx}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
