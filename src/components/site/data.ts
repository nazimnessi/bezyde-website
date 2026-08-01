import {
  MessageCircle,
  Footprints,
  ShoppingBag,
  Home,
  Stethoscope,
  BookOpen,
  Smartphone,
  Dices,
  Church,
  Pill,
  Users,
  Car,
  ShieldCheck,
  HeartHandshake,
  CalendarClock,
  Camera,
  Sparkles,
  MapPin,
  Phone,
  Hospital,
  Heart,
  Building2,
  PartyPopper,
  UserPlus,
} from "lucide-react";

export const DISCLAIMER =
  "Please note: Bezyde provides companionship services only. We do not offer medical care, nursing services, cash handling, or overnight stays.";

export const trust = [
  "Background Verified Companions",
  "Compassionately Trained",
  "Flexible Monthly Plans",
  "Serving Pathanamthitta",
  "Expanding Soon",
];

export const problems = [
  "Busy family schedules",
  "Children living away",
  "Loss of social interaction",
  "Limited mobility",
  "Nobody to share quality time with",
];

export const services = [
  { icon: MessageCircle, title: "Friendly Conversations", desc: "Long chats, stories, memories shared over tea." },
  { icon: Footprints, title: "Daily Walks", desc: "Gentle walks in the park or around the neighborhood." },
  { icon: ShoppingBag, title: "Grocery Shopping", desc: "A helping hand for weekly essentials and errands." },
  { icon: Home, title: "Light Household Chores", desc: "Small tasks that make everyday life easier." },
  { icon: Stethoscope, title: "Appointment Companion", desc: "Supportive company for hospital and clinic visits." },
  { icon: BookOpen, title: "Reading Together", desc: "Books, newspapers, or scripture — read aloud with warmth." },
  { icon: Smartphone, title: "Technology Assistance", desc: "Video calls with family, phone help, gentle guidance." },
  { icon: Dices, title: "Games & Recreation", desc: "Chess, cards, carrom — laughter and healthy fun." },
  { icon: Church, title: "Temple, Mosque & Church Visits", desc: "Respectful company for places of worship." },
  { icon: Pill, title: "Medication Reminders", desc: "Timely nudges — no medical administration." },
  { icon: Users, title: "Family Updates", desc: "Regular notes so loved ones stay in the loop." },
  { icon: Car, title: "Travel & Local Outings", desc: "A friendly companion for short local trips." },
];

export const steps = [
  { n: "01", title: "Choose Your Plan", desc: "Pick a monthly subscription or request a custom schedule that works for your family." },
  { n: "02", title: "Meet Your Companion", desc: "We carefully match you with a verified companion based on personality and preferences." },
  { n: "03", title: "Recurring Visits", desc: "Your companion visits at scheduled times throughout the week, reliably." },
  { n: "04", title: "Enjoy Peace of Mind", desc: "Real friendships bloom while families stay reassured with regular updates." },
];

export const whys = [
  { icon: ShieldCheck, title: "Background Verified", desc: "Every companion goes through thorough verification." },
  { icon: HeartHandshake, title: "Compassionately Trained", desc: "Trained in empathy, patience and elder care basics." },
  { icon: CalendarClock, title: "Flexible Scheduling", desc: "Visits that adjust to your family's rhythm." },
  { icon: Sparkles, title: "Personalized Matching", desc: "The right companion for your loved one's personality." },
  { icon: Users, title: "Trusted & Reliable", desc: "Consistent visits you can count on, every week." },
  { icon: MapPin, title: "Friendly Local Service", desc: "Rooted in Kerala, we understand local culture." },
  { icon: CalendarClock, title: "Monthly Subscriptions", desc: "Simple plans. Cancel or change anytime." },
  { icon: HeartHandshake, title: "Growing Community", desc: "A warm circle of companions and families." },
];

export const plans = [
  {
    name: "Nearby",
    price: "₹6,999",
    priceSuffix: "/month",
    tag: "Steady company for an independent parent.",
    popular: false,
    schedule: [
      { label: "Visits", value: "4–5 visits per month" },
      { label: "Frequency", value: "Weekly visits" },
      { label: "Duration", value: "1–1.5 hours per visit" },
    ],
    includesPrefix: undefined as string | undefined,
    includes: [
      "Dedicated Primary Companion for every visit",
      "Warm conversations and emotional companionship",
      "Tea-time chats, reading, board games, and walks",
      "Light errands during visits",
      "Dedicated Backup Companion",
      "Emergency escalation protocol",
      "Birthday and festival acknowledgements",
    ],
    cta: "Choose Nearby",
  },
  {
    name: "Together",
    price: "₹10,999",
    priceSuffix: "/month",
    tag: "Regular support and a dependable second set of eyes.",
    popular: true,
    schedule: [
      { label: "Visits", value: "8–9 visits per month" },
      { label: "Frequency", value: "Twice-weekly visits" },
      { label: "Duration", value: "1–1.5 hours per visit" },
    ],
    includesPrefix: "Everything in Nearby, plus",
    includes: [
      "Extended errands",
      "Pharmacy pickups",
      "Bill payment assistance",
      "Light household support",
      "Mid-week wellness phone check-in",
      "Priority scheduling for additional services",
      "Flexible rescheduling",
    ],
    cta: "Choose Together",
  },
  {
    name: "Wholehearted",
    price: "₹16,499",
    priceSuffix: "/month",
    tag: "Comprehensive companionship with greater reassurance.",
    popular: false,
    schedule: [
      { label: "Visits", value: "14–16 visits per month" },
      { label: "Frequency", value: "3–4 visits every week" },
    ],
    includesPrefix: "Everything in Together, plus",
    includes: [
      "Home safety observations during every visit",
      "Priority emergency response coordination",
      "Partner clinic referral benefits",
      "Companion continuity guarantee through familiar backup companions",
    ],
    cta: "Choose Wholehearted",
  },
  {
    name: "All In",
    price: "Talk to Us",
    priceSuffix: "",
    tag: "Personalized care for unique needs.",
    popular: false,
    schedule: [],
    includesPrefix: "May Include",
    includes: [
      "Near-daily visits",
      "Multiple hospital escorts",
      "Dedicated care coordination",
      "Personalized schedules",
      "Priority emergency response",
      "Family-specific support planning",
    ],
    cta: "Talk to Us",
  },
];

export const addOns = [
  { name: "Hospital or Clinic Escort", price: "From ₹1,000", icon: Hospital, desc: "A trusted companion by your side for hospital or clinic visits." },
  { name: "Government Office Assistance", price: "From ₹600", icon: Building2, desc: "Help with paperwork, queues, and errands at government offices." },
  { name: "Festival or Special Occasion Visit", price: "From ₹800", icon: PartyPopper, desc: "Company during birthdays, festivals, or family celebrations." },
  { name: "Additional Companion Visit", price: "From ₹500", icon: UserPlus, desc: "An extra visit whenever you need a little more companionship." },
];

export const bezydePromise = [
  { title: "Trust First", desc: "Every companion is police verified before joining Bezyde.", icon: ShieldCheck },
  { title: "A Familiar Face", desc: "You'll see the same Primary Companion every visit, helping build genuine relationships.", icon: Users },
  { title: "Always Covered", desc: "If your companion is unavailable, a familiar Backup Companion is ready to step in.", icon: HeartHandshake },
  { title: "Stay Connected", desc: "Receive a WhatsApp update after every visit so you're always informed.", icon: MessageCircle },
  { title: "Peace of Mind", desc: "With your loved one's consent, we'll share a visit photo after each visit.", icon: Camera },
  { title: "Ready When Needed", desc: "Our emergency escalation protocol ensures families are informed if something unexpected happens.", icon: Phone },
  { title: "Companionship With Dignity", desc: "Every interaction is built on kindness, patience, respect, and meaningful human connection.", icon: Heart },
];

export const faqs = [
  {
    q: "Is Bezyde a medical or nursing service?",
    a: "No. Bezyde is a companionship service. Our companions are not medical professionals and do not administer medication or provide clinical care.",
  },
  {
    q: "Can I choose my companion?",
    a: "Yes. We match you based on personality and preferences, and you're always welcome to request a different companion if it isn't the right fit.",
  },
  {
    q: "Can I customize visit timings?",
    a: "Absolutely. Choose a fixed weekly schedule or work with us on a custom plan that fits your loved one's routine.",
  },
  {
    q: "What if I need additional visits in a month?",
    a: "Extra visits can be added on top of any plan. Just let us know a day or two ahead and we'll arrange it.",
  },
  {
    q: "Are companions background verified?",
    a: "Yes. Every companion goes through a thorough background check and compassion-focused training before their first visit.",
  },
  {
    q: "Which locations do you currently serve?",
    a: "We're based in Pathanamthitta, Kerala, and are expanding to more cities in Kerala very soon.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, monthly plans can be paused or cancelled anytime with no penalty. We only ask for a short notice period.",
  },
];