export interface Song {
  id: number;
  name: string;
  duration: string;
  popular?: boolean;
}

export interface Album {
  id: number;
  year: number;
  title: string;
  songs: Song[];
}

export const album: Album = {
  id: 0,
  year: 2003,
  title: "Tuna Universidad de La Sabana",
  songs: [
    { id: 1, name: "Himno", duration: "2:03", popular: false },
    { id: 2, name: "Nathalie", duration: "4:58", popular: true },
    { id: 3, name: "Tuna Compostelana", duration: "2:45", popular: false },
    { id: 4, name: "Los Dos", duration: "3:34", popular: false },
    { id: 5, name: "Que Tiempo Tan Feliz", duration: "3:45", popular: false },
    { id: 6, name: "Tani Mi Tani", duration: "3:08", popular: false },
    { id: 7, name: "La Gloria Eres Tu", duration: "3:00", popular: true },
    { id: 8, name: "Estudiantina Madrileña", duration: "2:32", popular: true },
    { id: 9, name: "A Mis Amigos", duration: "3:36", popular: false },
    { id: 10, name: "Granada", duration: "4:24", popular: false },
    { id: 11, name: "Noches De Cartagena", duration: "3:22", popular: true },
    { id: 12, name: "Canta Llano", duration: "3:20", popular: false },
  ],
};

export default album;
