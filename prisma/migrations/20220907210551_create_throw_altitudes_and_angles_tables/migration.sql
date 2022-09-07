-- CreateTable
CREATE TABLE "throw_altitude" (
    "id" SERIAL NOT NULL,
    "altitude" DOUBLE PRECISION NOT NULL,
    "throwId" INTEGER NOT NULL,

    CONSTRAINT "throw_altitude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "throw_angles" (
    "id" SERIAL NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "z" DOUBLE PRECISION NOT NULL,
    "throwId" INTEGER NOT NULL,

    CONSTRAINT "throw_angles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "throw_altitude" ADD CONSTRAINT "throw_altitude_throwId_fkey" FOREIGN KEY ("throwId") REFERENCES "throws"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "throw_angles" ADD CONSTRAINT "throw_angles_throwId_fkey" FOREIGN KEY ("throwId") REFERENCES "throws"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
