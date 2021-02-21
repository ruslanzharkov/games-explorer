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
  platforms: any[];
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
