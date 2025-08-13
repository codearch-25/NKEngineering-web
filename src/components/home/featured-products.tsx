"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";

export default function FeaturedProducts() {
  // Featured products data - in a real application, this would come from a database
  const featuredProducts = [
    {
      id: 1,
      name: "Fire Suppression Systems",
      description: "Advanced fire suppression systems for commercial and residential buildings. Our cutting-edge technology provides maximum protection against fire hazards with minimal environmental impact and seamless integration with existing building infrastructure.",
      image: "/images/fire-system-1.png",
    },
    {
      id: 2,
      name: "Gas Tank Solutions",
      description: "High-quality gas tank equipment for industrial applications. Engineered with premium materials and rigorous safety standards, our gas tank solutions offer superior durability, efficiency, and compliance with international safety regulations.",
      image: "/images/gas-tanks-1.jpg",
    },
    {
      id: 3,
      name: "Sprinkler Systems",
      description: "Comprehensive sprinkler systems for fire safety and protection. Our customizable designs provide reliable fire suppression capabilities with precise coverage zones, intelligent activation mechanisms, and integration with building management systems.",
      image: "/images/Sprinkler-1.jpg",
    },
    {
      id: 4,
      name: "Smoke Detectors",
      description: "State-of-the-art smoke detection technology for early warning systems. Featuring advanced optical sensors, IoT connectivity, and AI-powered analytics, our smoke detectors provide unprecedented accuracy in detecting potential fire threats before they escalate.",
      image: "/images/smoker.jpg",
    },
    {
      id: 5,
      name: "Industrial Machinery",
      description: "Specialized machinery solutions for manufacturing and production facilities. Our industrial equipment combines innovative engineering with robust construction to enhance operational efficiency, reduce downtime, and maximize productivity in demanding environments.",
      image: "/images/machine.png",
    },
    {
      id: 6,
      name: "Gas Storage Systems",
      description: "Secure and efficient gas storage solutions for various industrial needs. Designed with multiple safety redundancies, precision monitoring systems, and optimal storage capacity, our gas storage systems ensure both safety and operational efficiency.",
      image: "/images/gas-tanks-2.jpg",
    },
  ];

  return (
    <section id="featured-products" className="py-12 md:py-20 bg-primary-maroon/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our top-selling engineering solutions designed for safety, efficiency, and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm hover:text-primary-maroon">
              View All Products
              <span className="ml-1 text-lg" aria-hidden="true">→</span>
            </Link>
        </div>
      </div>
    </section>
  );
}