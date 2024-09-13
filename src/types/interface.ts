export interface Location {
  x: number;
  y: number;
  width: number;
  height: number;
  probability: number;
}

export interface Prediction {
  prediction: string;
  location: Location;
}

export interface PredictionMultiple {
  prediction: Prediction[];
}

export interface Character {
  name: string;
  shortDescription: string;
  examples: string;
  url: string;
  imagePath: string;
}
