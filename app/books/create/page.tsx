/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [judulBuku, setJudulBuku] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [image, setImage] = useState("");
  const [tahunTerbit, setTahunTerbit] = useState("");
  const [rating, setRating] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        judulBuku,
        pengarang,
        image,
        tahunTerbit,
        rating,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    setIsLoading(false);
    router.push("/books");
  };

  return (
    <>
      <main className="w-full h-full p-12">
        <div className="p-20 tracking-[-0.5px]">
          <form onSubmit={handleSubmit}>
            <div className="rounded-xl bg-[#fafafa] text-[#025864] font-medium shadow p-6">
              <div className="grid grid-cols-3 items-center mb-6">
                <label htmlFor="gambar" className="pl-2 pb-2 col-span-3">
                  Gambar
                </label>
                <input
                  required
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full border p-3 rounded-lg mt-2"
                />
              </div>
              <div className="grid grid-cols-3 items-center mb-6">
                <label htmlFor="judul" className="pl-2 pb-2 col-span-3">
                  Judul Buku
                </label>
                <input
                  required
                  type="text"
                  value={judulBuku}
                  onChange={(e) => setJudulBuku(e.target.value)}
                  className="w-full border p-3 rounded-lg mt-2"
                />
              </div>
              <div className="gap-4 grid grid-cols-6">
                <div className="col-span-3">
                  <label className="pl-2 pb-2 ">Pengarang</label>
                  <input
                    type="text"
                    placeholder="Pengarang"
                    value={pengarang}
                    onChange={(e) => setPengarang(e.target.value)}
                    className="w-full font-bold border p-3 rounded-lg mt-2 placeholder:font-normal"
                  />
                </div>
                <div className="col-span-3">
                  <label className="pl-2 pb-2 ">Tahun Terbit</label>
                  <input
                    type="text"
                    placeholder="Masukkan Tahun Terbit"
                    value={tahunTerbit}
                    onChange={(e) => setTahunTerbit(e.target.value)}
                    className="w-full font-bold border p-3 rounded-lg mt-2 placeholder:font-normal"
                  />
                </div>
                <div className="col-span-3">
                  <label className="pl-2 pb-2" text-white>
                    Rating
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full font-bold border p-3 rounded-lg mt-2 placeholder:font-normal"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  disabled={isLoading}
                  className="px-5 py-2.5 text-[#00d47e] font-medium rounded-lg bg-[#025864] hover:shadow hover:scale-105 duration-500"
                >
                  {isLoading ? "Loading..." : "Tambah Data"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default page;
