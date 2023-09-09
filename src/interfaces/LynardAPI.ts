interface Spotify {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
}

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string;
  display_name: string;
  public_flags: number;
  avatar_decoration_data: string | null;
}

export interface LynardAPI {
  data: {
    kv: Record<string, any>;
    spotify?: Spotify;
    discord_user: User;
    activities: Array<Record<string, any>>;
    discord_status: "online" | "idle" | "offline" | "dnd";
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
  };
  success: boolean;
}
