import React, { useEffect, useState } from "react";
import styles from "./ProductsList.module.scss";
import Modal from "../../Modal/Modal";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}



export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
        setLoading(false);
      });
  }, []);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const nextProducts = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevProducts = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const calculatePriceWithMarkup = (price: number) => {
    return price * 1.1; // Simulação de acréscimo de 10% do valor real
  };

  const calculateInstallments = (price: number) => {
    const priceWithMarkup = calculatePriceWithMarkup(price);
    const installment = priceWithMarkup / 2; // Simulação de parcelamento em 2x sem juros do valor cheio (com 10% acima do valor real)
    return installment.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        {/* Produtos Relacionados */}
        {/* Botão de voltar */}
        {startIndex > 0 && (
          <button onClick={prevProducts} className={styles.navButtonLeft}>
            {"<"}
          </button>
        )}
        {/* Container dos produtos */}
        <div className={styles.productsWrapper}>
          {products
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product) => {
              const priceWithMarkup = calculatePriceWithMarkup(product.price);
              const installment = calculateInstallments(product.price);
              return (
                <div key={product.productName} className={styles.productCard}>
                  <img
                    src={product.photo}
                    alt={product.productName}
                    className={styles.productImage}
                  />
                  <h3 className={styles.productTitle}>{product.productName}</h3>
                  {/* Preço com 10% a mais (preço riscado) */}
                  <p className={styles.productPrice}>
                    <span className={styles.strikethrough}>
                      R${" "}
                      {priceWithMarkup.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>{" "}
                    <span className={styles.discountedPrice}>
                      R${" "}
                      {product.price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </p>
                  {/* Parcelamento */}
                  <p className={styles.parcelamento}>
                    ou 2x de R$ {installment} sem juros
                  </p>
                  <p className={styles.frete}>Frete grátis</p>
                  <button
                    className={styles.buyButton}
                    onClick={() => handleBuyClick(product)}
                  >
                    COMPRAR
                  </button>
                </div>
              );
            })}
        </div>
        {/* Botão de avançar */}
        {startIndex + itemsPerPage < products.length && (
          <button onClick={nextProducts} className={styles.navButtonRight}>
            {">"}
          </button>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      </div>
    </div>
  );
}
