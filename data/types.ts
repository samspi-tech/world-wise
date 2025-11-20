export type City =
    | {
          id: number;
          date: string;
          emoji: string;
          country: string;
          cityName: string;
          notes: string | null;
          position: {
              lat: number;
              lng: number;
          };
      }
    | undefined;

export type Cities = City[] | undefined;
