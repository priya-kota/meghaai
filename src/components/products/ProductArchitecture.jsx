import intelligenceLayerImage from "../../assets/products/intelligence-layer.png";

/* =========================================================
   COMPONENT
========================================================= */

export default function ProductArchitecture() {
  return (
    <section className="product-architecture">

      <div className="products-container">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className="products-section-heading center">

          <span className="products-eyebrow">
            INTELLIGENCE LAYER
          </span>

        </div>


        {/* =================================================
            ARCHITECTURE STACK
        ================================================= */}

        <div className="architecture-stack">

          <img
            src={intelligenceLayerImage}
            alt="The Intelligence Layer for the Physical Industrial World"
          />

        </div>

      </div>

    </section>
  );
}