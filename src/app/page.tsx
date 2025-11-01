"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { ChefHat, Coffee, Cookie, MapPin, MessageCircle, Salad, Soup, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brown Café"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Brown Café"
          description="Experience the perfect blend of comfort and flavor in our cozy cafeteria, where every meal is crafted with care and passion"
          tag="Fresh Daily"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Intimate cafe setting with a neon sign reading 'All you need is love (and cake)'"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardTwo
          title="Our Specialties"
          description="Discover our carefully crafted menu featuring fresh ingredients and time-honored recipes"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          features={[
            {
              title: "Artisan Coffee",
              description: "Premium coffee beans freshly roasted and brewed to perfection every morning",
              icon: Coffee
            },
            {
              title: "Fresh Pastries",
              description: "Daily baked croissants, muffins, and pastries made with the finest ingredients",
              icon: Cookie
            },
            {
              title: "Healthy Salads",
              description: "Garden-fresh salads with organic vegetables and house-made dressings",
              icon: Salad
            },
            {
              title: "Comfort Soups",
              description: "Warm, hearty soups prepared daily with seasonal ingredients and love",
              icon: Soup
            }
          ]}
        />
      </div>

      <div id="popular-dishes" data-section="popular-dishes">
        <ProductCardThree
          title="Popular Dishes"
          description="Try our most loved menu items, prepared fresh daily with premium ingredients"
          tag="Customer Favorites"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Gourmet Club Sandwich",
              price: "$12.50",
              imageSrc: "https://images.pexels.com/photos/5971871/pexels-photo-5971871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Overhead view of fresh fruit and vegetables being prepared for a healthy lunch",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Signature Tomato Soup",
              price: "$8.75",
              imageSrc: "https://images.pexels.com/photos/4210846/pexels-photo-4210846.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Top view of white bowl with yummy homemade noodles cooked in fresh delicious chicken broth and topped with green aromatic parsley placed on white marble table",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Chocolate Brownie",
              price: "$6.25",
              imageSrc: "https://images.pexels.com/photos/34525276/pexels-photo-34525276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "chocolate dessert cake slice - Photo by Sephina Cornwall",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from the people who make our cafeteria a special place"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Software Developer",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Adult man in pink dress shirt looking stressed while talking on a smartphone indoors."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Teacher",
              company: "High School",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Accountant",
              company: "Financial Firm",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6973116/pexels-photo-6973116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy senior couple laughing and enjoying their time together indoors."
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The passionate people who make Brown Café a warm and welcoming place"
          tag="Our Staff"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Head Chef",
              description: "With over 15 years of culinary experience, Maria brings creativity and passion to every dish she creates.",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hands holding color swatches over cupcakes and packaging in a bright setting."
            },
            {
              id: "2",
              name: "David Thompson",
              role: "General Manager",
              description: "David ensures every customer has an exceptional experience with his attention to detail and warm hospitality.",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Smiling waiter stands in an elegant restaurant interior, exuding warmth and professionalism."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Brown Café"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday through Friday from 7:00 AM to 6:00 PM, and weekends from 8:00 AM to 4:00 PM."
            },
            {
              id: "2",
              title: "Do you offer catering services?",
              content: "Yes! We provide catering for office meetings, events, and special occasions. Contact us for custom menu options and pricing."
            },
            {
              id: "3",
              title: "Are there vegetarian and vegan options?",
              content: "Absolutely! We offer a variety of vegetarian and vegan dishes, including salads, soups, and plant-based entrees."
            },
            {
              id: "4",
              title: "Do you take reservations?",
              content: "We operate on a first-come, first-served basis for regular dining. However, we do take reservations for large groups of 8 or more."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Experience Brown Café Today"
          description="Join our newsletter to stay updated on daily specials, new menu items, and special events"
          tagIcon={MapPin}
          imageSrc="https://images.pexels.com/photos/10135116/pexels-photo-10135116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy restaurant interior featuring elegant decor and warm lighting."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about our daily specials and events. You can unsubscribe at any time."
        />
      </div>
    </ThemeProvider>
  );
}