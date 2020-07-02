export interface IChirp {
  username: string;
  message: string;
  id: string;
}

export interface HomeProps {}

export interface HomeState {
  chirps: IChirp[];
}

export interface ChirpCardProps {
  chirps: IChirp;
}
