import "../styles/products.css";

import ProductHero from "../components/products/ProductHero";
import ProductCatalogue from "../components/products/ProductCatalogue";
// import ProductArchitecture from "../components/products/ProductArchitecture";
import ProductCTA from "../components/products/ProductCTA";

function Products() {
  return (
    <main className="products-page">

      {/* =========================================
          HERO
      ========================================= */}

      <ProductHero />


      {/* =========================================
          PRODUCTS
          
          Catalogue + showcase are now ONE section.
      ========================================= */}

      <ProductCatalogue />


      {/* =========================================
          MEGHAAI INTELLIGENCE ARCHITECTURE
      ========================================= */}

      {/* <ProductArchitecture /> */}


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <ProductCTA />

    </main>
  );
}

export default Products;