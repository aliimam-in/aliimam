export interface Artist {
    id: string;
    name: string;
    type: string;
    href: string;
  }
  
  export interface NowPlayingSong {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  }