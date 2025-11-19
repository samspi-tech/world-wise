export type City = {
    id: string;
    date: string;
    emoji: string;
    notes: string;
    country: string;
    cityName: string;
    position: {
        lat: string;
        lng: string;
    };
};

export type Cities = City[] | undefined;
