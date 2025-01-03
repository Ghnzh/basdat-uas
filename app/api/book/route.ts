import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: NextRequest) => {
  const dataBuku = await prisma.buku.findMany({
    orderBy: {
      id_buku: "desc",
    },
  });

  return NextResponse.json({ dataBuku });
};

const generateUniqueId = async () => {
  const lastRecord = await prisma.buku.findFirst({
    orderBy: {
      id_buku: "desc",
    },
  });

  const lastId = lastRecord ? lastRecord.id_buku : 0;
  return lastId + 1;
};

export const POST = async (req: NextRequest) => {
  const id = await generateUniqueId();

  const { judulBuku, image, pengarang, tahunTerbit, rating } = await req.json();
  const dataBuku = await prisma.buku.create({
    data: {
      id_buku: id,
      judulBuku,
      image,
      pengarang,
      tahunTerbit,
      rating,
    },
  });

  console.log(dataBuku);

  return NextResponse.json({ dataBuku });
};

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url).searchParams;
  const id = Number(url.get("id")) || 0;

  const dataKas = await prisma.buku.delete({
    where: {
      id_buku: id,
    },
  });

  if (!dataKas) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }

  return NextResponse.json({});
};

export const PUT = async (req: NextRequest) => {
  const { id_buku, judulBuku, image, pengarang, tahunTerbit, rating } =
    await req.json();

  const dataBuku = await prisma.buku.update({
    where: {
      id_buku: Number(id_buku),
    },
    data: {
      judulBuku,
      image,
      pengarang,
      tahunTerbit,
      rating,
    },
  });

  return NextResponse.json({ dataBuku });
};
