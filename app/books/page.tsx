"use client";
import { useEffect, useState } from "react";
import KasHarianCard from "@/app/components/molecules/Card";
import { bukuItem } from "@/types/ItemInterface";

const Home = () => {
  const [dataBuku, setDataBuku] = useState<{ [key: string]: bukuItem[] }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/book");
      const data = await response.json();
      setDataBuku(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="w-full h-full p-12">
        <div className="p-20">
          {isLoading ? (
            <p className="text-center text-4xl font-bold tracking-[-1px] my-52">
              Loading...
            </p>
          ) : Object.entries(dataBuku).length === 0 ? (
            <p className="text-center text-gray-800 text-3xl font-bold tracking-[-1px] mt-20">
              Data masih kosong
            </p>
          ) : (
            Object.entries(dataBuku).map(([key, value]) => (
              <KasHarianCard key={key} data={value} />
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
