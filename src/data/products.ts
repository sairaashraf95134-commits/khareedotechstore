import headphonesImg from "@/assets/product-headphones.jpg";
import smartwatchImg from "@/assets/product-smartwatch.jpg";
import mouseImg from "@/assets/product-mouse.jpg";
import keyboardImg from "@/assets/product-keyboard.jpg";
import speakerImg from "@/assets/product-speaker.jpg";
import laptopstandImg from "@/assets/product-laptopstand.jpg";
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 27500,
    image: headphonesImg,
    description: "Premium noise-cancelling wireless headphones",
    details: "Experience crystal-clear audio with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Bluetooth 5.3 with multipoint connection for seamless device switching.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 41500,
    image: smartwatchImg,
    description: "Feature-packed smartwatch with health tracking",
    details: "Track your fitness goals with advanced heart rate monitoring, SpO2 tracking, and GPS. AMOLED always-on display, 7-day battery life, and 100+ watch faces. Water resistant up to 50m.",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 16500,
    image: mouseImg,
    description: "High-precision RGB gaming mouse",
    details: "Dominate with a 25,600 DPI optical sensor, 1ms response time, and 8 programmable buttons. Customizable RGB lighting with 16.8M colors. Lightweight at just 69g for effortless control.",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 24800,
    image: keyboardImg,
    description: "RGB mechanical keyboard with hot-swap switches",
    details: "Tactile typing experience with hot-swappable mechanical switches, per-key RGB backlighting, and durable PBT keycaps. USB-C connectivity with detachable cable. N-key rollover for gaming.",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 22000,
    image: speakerImg,
    description: "Portable speaker with 360° immersive sound",
    details: "Fill any room with powerful 360° sound and deep bass. IPX7 waterproof, 20-hour battery, and built-in microphone for hands-free calls. Connect two speakers for stereo mode.",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 10900,
    image: laptopstandImg,
    description: "Ergonomic aluminum laptop stand",
    details: "Elevate your workspace with this premium aluminum stand. Adjustable height and angle, ventilated design for cooling, and non-slip silicone pads. Supports laptops up to 17 inches and 20 lbs.",
    rating: 4.2,
  },
];
