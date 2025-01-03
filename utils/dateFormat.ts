import { format } from "date-fns";

export const getFullDate = (tanggal: string) => {
  return format(tanggal, "MMM d,  yyyy");
};

export const getBulanTahun = (tanggal: string) => {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });
};

export function getFullDateID(tanggal: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(tanggal).toLocaleDateString("id-ID", options);
}

export const getTanggal = (tanggal: string) => {
  return format(tanggal, "d");
};

export const getTanggaLBulan = (tanggal: string) => {
  return format(tanggal, "d/M");
};
