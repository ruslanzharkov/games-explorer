export interface GameGenre {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

export interface IGame {
  added: string;
  added_by_status: object;
  background_image: string;
  clip: object;
  dominant_color: string;
  esrb_rating: object;
  genres: GameGenre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: any[];
  platforms: Platform[];
  playtime: number;
  rating: number;
  rating_top: number;
  ratings: any[];
  ratings_count: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  short_screenshots: any[];
  slug: string;
  stores: any[];
  suggestions_count: number;
  tags: any[];
  tba: boolean;
  updated: string;
  user_game: string | null;
}

export interface Platform {
  platform: {
    games_count: number;
    id: number;
    image: string | null;
    image_background: string;
    name: string;
    slug: string;
    year_end: number | null;
    year_start: number | null;
  };
  released_at: string | null;
  requirements_en: string | null;
  requirements_ru: string | null;
}
