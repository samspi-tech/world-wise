export type City =
    | {
          id?: number;
          date: Date | null;
          emoji: string;
          country: string;
          cityName: string;
          notes: string;
          position: {
              lat: number;
              lng: number;
          };
      }
    | undefined;

export type Cities = City[] | undefined;
