interface Spotify {
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  timestamps: {
    start: number;
    end: number;
  };
  track_id: string;
}

interface User {
  avatar: string;
  avatar_decoration_data?: string;
  bot: boolean;
  clan?: any;
  discriminator: string;
  display_name: string;
  global_name: string;
  id: string;
  public_flags: number;
  username: string;
}

export interface LynardWS {
  op: number;
  d: {
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_web: boolean;
    activities: Array<any>;
    discord_status: "online" | "idle" | "offline" | "dnd";
    discord_user: User;
    kv: Record<string, string>;
    spotify?: Spotify;
  };
  t: "INIT_STATE" | "PRESENCE_UPDATE";
}
