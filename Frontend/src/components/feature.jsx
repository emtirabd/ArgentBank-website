import data from '../data/feature.json'; 

function Feature() {
  return (
    <section className="features">
      {data.features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.src} alt={`${feature.icon} Icon`} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Feature;
