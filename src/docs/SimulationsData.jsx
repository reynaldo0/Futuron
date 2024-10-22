const SimulationsData = {
    earthImages: {
      healthy: "/bumi/sehat.jpg",
      damaged: "/bumi/rusak.jpg",
    },
    simulationDescription: {
      title: "Simulasi Masa Depan Bumi",
      subtitle:
        "Seret slider untuk melihat perbedaan Bumi dengan atau tanpa teknologi yang digunakan untuk melestarikan lingkungan.",
    },
    sliderLabels: {
      damage: "🌍 Kerusakan Lingkungan",
      technology: "🌍 Teknologi Melestarikan",
    },
    cards: [
      {
        title: "Bumi Rusak",
        description:
          "Teknologi tidak digunakan dengan bijak, menyebabkan hutan rusak, kualitas udara menurun, suhu global naik, dan populasi satwa liar berkurang drastis.",
        hoverColor: "bg-red-400",
        borderColor: "border-y-red-400",
      },
      {
        title: "Bumi Lestari",
        description:
          "Teknologi digunakan untuk melestarikan hutan, menjaga kualitas udara, mengurangi suhu global, dan melindungi populasi satwa liar.",
        hoverColor: "bg-primary-200",
        borderColor: "border-y-primary-300",
      },
    ],
  };
  
  export default SimulationsData;
  