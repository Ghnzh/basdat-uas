import { bukuItem } from "@/types/ItemInterface";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface props {
  data: bukuItem[];
}

const KasHarianCard = ({ data }: props) => {
  const router = useRouter();
  const handleDelete = async (id: number) => {
    await fetch("/api/book?id=" + id, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-12">
        {data.map((item) => {
          return (
            <div
              key={item.id_buku}
              className="p-8 bg-[#A3E636] text-black text-xl font-bold rounded-md shadow-[6px_6px_0px_rgba(0,0,0,0.9)] border-2 border-black"
            >
              <Image
                src={`/img/${item.image}.jpg`}
                alt={item.judulBuku}
                width={400}
                height={400}
                className="w-32 rounded-lg"
              />
              <div className="flex justify-between my-4">
                <p className="text-2xl font-extrabold">{item.judulBuku}</p>
                <p className="">{item.rating}</p>
              </div>
              {item.pengarang}
              <p className="">{item.tahunTerbit}</p>
              <div className="mt-4 flex justify-end space-x-2 w-full">
                <div className="relative group">
                  <button
                    className="p-3 bg-black text-white rounded-md"
                    onClick={() => router.push(`/books/update/${item.id_buku}`)}
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                  </button>
                  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 duration-300">
                    Edit
                  </span>
                </div>
                <button
                  className="bg-red-600 text-white p-3 rounded-md"
                  onClick={() => handleDelete(item.id_buku)}
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 duration-300">
                    Hapus
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default KasHarianCard;
