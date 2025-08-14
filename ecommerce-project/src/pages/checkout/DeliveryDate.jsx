import dayjs from "dayjs";

function DeliveryDate({ deliveryOption }) {
  if (!deliveryOption) {
    return null;
  }
  
  return (
    <div className="delivery-date">
      Delivery date: {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
    </div>
  );
}

export default DeliveryDate;