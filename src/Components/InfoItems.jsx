import React from "react";
import InfoItem from "./InfoItem";

function InfoItems() {
  const infoItems = [
    {
      id: 1,
      logo: `<i class="fa-solid fa-truck fa-3x"></i>`,
      title: "Free Delivery Near Nairobi",
      text: `Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, `,
    },
    {
      id: 2,
      logo: `<i class="fa-sharp fa-solid fa-headset fa-3x"></i>`,
      title: "Customer Support",
      text: `Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, `,
    },
    {
      id: 3,
      logo: `<i class="fa-regular fa-volume-high fa-3x"></i>`,
      title: "Good Deals",
      text: `Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, `,
    },
  ];
  return (
    <div className="container mt-2">
      <div className="row">
        {infoItems.map((info) => (
          <InfoItem item={info} />
        ))}
      </div>
    </div>
  );
}

export default InfoItems;
