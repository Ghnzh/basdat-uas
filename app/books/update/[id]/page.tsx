/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const id_buku = params.id;
  const [judulBukuBaru, setJudulBuku] = useState("");
  const [pengarangBaru, setPengarang] = useState("");
  const [imageBaru, setImage] = useState("");
  const [tahunTerbitBaru, setTahunTerbit] = useState("");
  const [ratingBaru, setRating] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(
      judulBukuBaru,
      pengarangBaru,
      imageBaru,
      tahunTerbitBaru,
      ratingBaru
    );

    await fetch("/api/book", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        judulBuku: judulBukuBaru,
        pengarang: pengarangBaru,
        image: imageBaru,
        tahunTerbit: tahunTerbitBaru,
        rating: ratingBaru,
        id_buku,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    router.push("/books");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("/api/book/" + id_buku);
    const json = await res.json();

    if (!json) {
      router.push("/books");
      return;
    }

    setJudulBuku(json.dataBuku.judulBuku);
    setPengarang(json.dataBuku.pengarang);
    setImage(json.dataBuku.image);
    setTahunTerbit(json.dataBuku.tahunTerbit);
    setRating(json.dataBuku.rating);
  };

  return (
    <form
      className="w-[500px] mx-auto pt-20 flex flex-col gap-2 text-black"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Judul"
        value={judulBukuBaru}
        onChange={(e) => setJudulBuku(e.target.value)}
        className="w-full border p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Pengarang"
        value={pengarangBaru}
        onChange={(e) => setPengarang(e.target.value)}
        className="w-full border p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Tahun Terbit"
        value={tahunTerbitBaru}
        onChange={(e) => setTahunTerbit(e.target.value)}
        className="w-full border p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Rating"
        value={ratingBaru}
        onChange={(e) => setRating(e.target.value)}
        className="w-full border p-2 rounded-md"
      />
      <button type="submit" className="bg-sky-500 p-2 rounded-lg">
        Update
      </button>
    </form>
  );
};

export default Page;
