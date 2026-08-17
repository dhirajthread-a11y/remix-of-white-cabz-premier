import suvAsset from "@/assets/suv.asset.json";
import ertigaAsset from "@/assets/ertiga.asset.json";
import weddingAsset from "@/assets/wedding-car.asset.json";
import weddingHoodAsset from "@/assets/wedding-hood.png.asset.json";
import fleetNightAsset from "@/assets/fleet-night.asset.json";
import ertigaFrontAsset from "@/assets/ertiga-front.asset.json";
import logoAsset from "@/assets/logo.asset.json";

export const IMAGES = {
  logo: logoAsset.url,
  suv: suvAsset.url,
  ertiga: ertigaAsset.url,
  wedding: weddingAsset.url,
  weddingHood: weddingHoodAsset.url,
  fleetNight: fleetNightAsset.url,
  ertigaFront: ertigaFrontAsset.url,
  // aliases kept so existing content keeps working, all real fleet photos
  hatchback: suvAsset.url,
  sedan: ertigaFrontAsset.url,
  innova: ertigaAsset.url,
  tempo: fleetNightAsset.url,
  luxury: weddingHoodAsset.url,
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "local-taxi",
    title: "Local Taxi",
    icon: "MapPin",
    description:
      "Hourly and point-to-point city rides with transparent meters and courteous chauffeurs.",
    features: ["8hr / 80km packages", "Instant confirmation", "No hidden charges"],
    image: IMAGES.sedan,
  },
  {
    slug: "outstation-cab",
    title: "Outstation Cab",
    icon: "Route",
    description:
      "Intercity travel across India with well-maintained cars and experienced highway drivers.",
    features: ["All-India permit", "Driver allowance included", "Flexible halts"],
    image: IMAGES.ertigaFront,
  },
  {
    slug: "one-way-taxi",
    title: "One Way Taxi",
    icon: "ArrowRight",
    description: "Pay only for the distance you travel — no return fare on select routes.",
    features: ["Zero return fare", "Fixed price", "Popular routes covered"],
    image: IMAGES.hatchback,
  },
  {
    slug: "round-trip",
    title: "Round Trip",
    icon: "Repeat",
    description: "Same cab and driver for your full journey, with multi-day itineraries.",
    features: ["Multi-city halts", "Daily km slabs", "Same driver throughout"],
    image: IMAGES.innova,
  },
  {
    slug: "airport-pickup",
    title: "Airport Pickup",
    icon: "PlaneLanding",
    description: "Flight-tracked pickups with meet-and-greet at the arrival gate.",
    features: ["Flight tracking", "60 min free waiting", "Luggage assistance"],
    image: IMAGES.suv,
  },
  {
    slug: "airport-drop",
    title: "Airport Drop",
    icon: "PlaneTakeoff",
    description: "On-time terminal drops with early-morning and late-night availability.",
    features: ["24/7 availability", "Fixed airport rates", "Live driver details"],
    image: IMAGES.fleetNight,
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    icon: "Briefcase",
    description: "Employee transport, client pickups and monthly billing for businesses.",
    features: ["GST invoicing", "Dedicated account manager", "Verified drivers"],
    image: IMAGES.luxury,
  },
  {
    slug: "wedding-car-rental",
    title: "Wedding Car Rental",
    icon: "Heart",
    description: "Decorated luxury cars and guest fleets for your big day.",
    features: ["Floral decoration", "Uniformed chauffeur", "Guest transfer fleet"],
    image: IMAGES.wedding,
  },
  {
    slug: "tour-packages",
    title: "Tour Packages",
    icon: "Mountain",
    description: "Curated sightseeing circuits — hills, heritage and pilgrimage routes.",
    features: ["Custom itineraries", "Local guide on request", "All-inclusive pricing"],
    image: IMAGES.ertiga,
  },
  {
    slug: "monthly-cab-rental",
    title: "Monthly Cab Rental",
    icon: "CalendarClock",
    description: "Dedicated car and driver on a monthly subscription for regular commutes.",
    features: ["Fixed monthly cost", "Replacement car assured", "Priority support"],
    image: IMAGES.ertigaFront,
  },
];

export type Vehicle = {
  name: string;
  image: string;
  passengers: string;
  luggage: string;
  ac: string;
  mileage: string;
  price: string;
  tag?: string;
};

export const FLEET: Vehicle[] = [
  {
    name: "Hatchback",
    image: IMAGES.hatchback,
    passengers: "4 Passengers",
    luggage: "2 Bags",
    ac: "Dual AC",
    mileage: "20 km/l",
    price: "₹10 / km",
    tag: "Budget",
  },
  {
    name: "Sedan",
    image: IMAGES.sedan,
    passengers: "4 Passengers",
    luggage: "3 Bags",
    ac: "Chilled AC",
    mileage: "18 km/l",
    price: "₹12 / km",
    tag: "Popular",
  },
  {
    name: "SUV",
    image: IMAGES.suv,
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Dual AC",
    mileage: "15 km/l",
    price: "₹15 / km",
  },
  {
    name: "Innova Crysta",
    image: IMAGES.innova,
    passengers: "7 Passengers",
    luggage: "5 Bags",
    ac: "Rear AC vents",
    mileage: "14 km/l",
    price: "₹18 / km",
    tag: "Family favourite",
  },
  {
    name: "Ertiga",
    image: IMAGES.ertiga,
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Dual AC",
    mileage: "17 km/l",
    price: "₹14 / km",
  },
  {
    name: "Tempo Traveller",
    image: IMAGES.tempo,
    passengers: "12-17 Passengers",
    luggage: "12 Bags",
    ac: "Push-back AC",
    mileage: "10 km/l",
    price: "₹24 / km",
    tag: "Groups",
  },
  {
    name: "Luxury Cars",
    image: IMAGES.luxury,
    passengers: "4 Passengers",
    luggage: "3 Bags",
    ac: "Climate control",
    mileage: "12 km/l",
    price: "₹40 / km",
    tag: "Premium",
  },
];

export const REVIEWS = [
  {
    name: "Harpreet Singh",
    city: "Jalandhar",
    rating: 5,
    text: "Booked an Innova for a Jalandhar–Chandigarh airport drop at 3 AM. Driver arrived 15 minutes early, car was spotless. Best cab service I have used in Punjab.",
    initials: "HS",
  },
  {
    name: "Neha Sharma",
    city: "Ludhiana",
    rating: 5,
    text: "Used White Cabz for our wedding. The decorated car was gorgeous and the guest fleet ran perfectly on schedule. Very professional team.",
    initials: "NS",
  },
  {
    name: "Rahul Verma",
    city: "Delhi",
    rating: 5,
    text: "Outstation trip to Manali with family. Highway-experienced driver, comfortable Ertiga and fully transparent billing. Zero surprises.",
    initials: "RV",
  },
  {
    name: "Simran Kaur",
    city: "Amritsar",
    rating: 5,
    text: "I travel weekly for work and their monthly rental plan saves me so much. Same driver every time and always on time.",
    initials: "SK",
  },
  {
    name: "Amit Gupta",
    city: "Chandigarh",
    rating: 4,
    text: "Corporate account for our team transfers. GST invoices every month, drivers are polite and GPS tracking gives real peace of mind.",
    initials: "AG",
  },
  {
    name: "Pooja Malhotra",
    city: "Phagwara",
    rating: 5,
    text: "Late night pickup from the station felt completely safe. Driver shared live location with my family. Highly recommended for women travellers.",
    initials: "PM",
  },
];

export const FAQS = [
  {
    q: "How do I book a cab with White Cabz?",
    a: "Fill the booking form on our website, tap the WhatsApp button, or call us at +91 94786 13001. You will receive confirmation with the driver and vehicle details before your trip.",
  },
  {
    q: "Do you provide outstation cabs across India?",
    a: "Yes. Our vehicles carry all-India permits and our drivers are experienced on long highway routes, covering 50+ cities for one-way and round-trip journeys.",
  },
  {
    q: "Are toll, parking and state taxes included in the fare?",
    a: "Toll, parking and state permit charges are billed at actuals on top of the per-km fare. We share the exact breakup before your trip so there are no surprises.",
  },
  {
    q: "What are your night charges?",
    a: "A night allowance of ₹300 applies for trips operating between 10:00 PM and 6:00 AM. This covers the driver's night halt and rest.",
  },
  {
    q: "Can I cancel or reschedule my booking?",
    a: "Yes. Cancellations made more than 2 hours before pickup are completely free. Rescheduling is free at any time, subject to vehicle availability.",
  },
  {
    q: "Are your cabs GPS enabled and safe for solo travellers?",
    a: "Every vehicle is GPS enabled and every driver is police-verified. You can share your live trip link with family directly from WhatsApp.",
  },
];

export const STATS = [
  { value: 25000, suffix: "+", label: "Happy Customers" },
  { value: 120000, suffix: "+", label: "Trips Completed" },
  { value: 50, suffix: "+", label: "Cities Covered" },
  { value: 180, suffix: "+", label: "Professional Drivers" },
];
