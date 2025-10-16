import React from 'react';

const FeaturedSection = () => {
  const featuredItems = [
    {
      id: 1,
      image: '/reworked_nike_navy.png',
      alt: 'Reworked Nike Hoodies',
      title: 'Reworked Nike Hoodies',
      description: 'One-of-a-kind crewnecks crafted from authentic 1980s Nike sweaters. Each piece combines vintage fragments into something entirely new—no two are alike.',
      className: 'vintage'
    },
    {
      id: 2,
      image: '/reverse_flares.png',
      alt: 'Reverse Flares',
      title: 'Reverse Flares',
      description: 'Reverse flared jeans crafted from premium materials for a unique silhouette.',
      className: 'upcycled'
    },
    {
      id: 3,
      image: '/limited_editions.png',
      alt: 'Limited Editions',
      title: 'Limited Editions',
      description: 'Vintage Carhartt Bartlett jackets reimagined for a modern audience.',
      className: 'limited'
    }
  ];

  return (
    <section className="featured" id="shop">
      <div className="container">
        <h2 className="section-title">Curated Collections</h2>
        <div className="featured-grid">
          {featuredItems.map((item) => (
            <div key={item.id} className="featured-item">
              <img 
                src={item.image} 
                alt={item.alt} 
                className={`featured-image ${item.className}`} 
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;