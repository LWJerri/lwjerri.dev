export interface LynardAPI {
  success: boolean;
  data: {
    listening_to_spotify: boolean;
    spotify: { song: string; artist: string; track_id: string };
    kv: { cityName: string; cityMapURL: string };
  };
}
