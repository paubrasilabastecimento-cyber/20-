export interface ProductPackage {
  id: string;
  bottles: number;
  supplyDays: number;
  pricePerBottle: number;
  originalPricePerBottle: number;
  totalPrice: number;
  originalTotalPrice: number;
  savings: number;
  savingsPercentage: number;
  badge?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  freeShipping: boolean;
  bonusGifts?: string[];
}

export type IngredientCategory = 'structural' | 'botanical' | 'absorption';

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  category: IngredientCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  clinicalBenefits: string[];
  mechanism: string;
  scientificReference?: string;
}

export interface Review {
  id: string;
  author: string;
  age: number;
  location: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  jointFocus: string; // e.g., 'Knees & Hips', 'Hands & Fingers', 'Active Golfing'
  bottlesUsed: string;
}

export interface FAQItem {
  id: string;
  category: 'usage' | 'ingredients' | 'guarantee' | 'results';
  question: string;
  answer: string;
}

export interface CartItem {
  packageItem: ProductPackage;
  quantity: number;
}

export interface QuizState {
  stiffnessAreas: string[];
  duration: string;
  activityLevel: string;
  primaryGoal: string;
}

export interface DailyLogEntry {
  id: string;
  date: string;
  stiffnessLevel: number; // 1 (great) to 10 (severe stiffness)
  takenDosage: boolean; // 2 capsules
  notes?: string;
}
