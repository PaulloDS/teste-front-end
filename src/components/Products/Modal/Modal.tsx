import { useState } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  } | null;
}

export default function Modal({ isOpen, onClose, product }: ModalProps) {
  const [quantity, setQuantity] = useState(1);
  if (!isOpen || !product) return null;

  const increaseQuantity = () => {
    setQuantity((prevQuantity: any) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity: any) => prevQuantity - 1);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <div className={styles.infos}>
          <img
            src={product.photo}
            alt={product.productName}
            className={styles.modalImage}
          />
          <div className={styles.desc}>
            <h2 className={styles.name}>{product.productName}</h2>
            <p className={styles.price}>R$ {totalPrice}</p>
            <p>{product.descriptionShort}</p>
            <a href="#">Veja mais detalhes do produto {">"}</a>

            <div className={styles.actions}>
              <div className={styles.quantityControl}>
                <button
                  onClick={decreaseQuantity}
                  className={styles.quantityButton}
                >
                  -
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className={styles.quantityButton}
                >
                  +
                </button>
              </div>
              <button className={styles.buyButton}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
