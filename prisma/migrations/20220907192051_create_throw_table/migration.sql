-- CreateTable
CREATE TABLE "throws" (
    "id" SERIAL NOT NULL,
    "date_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,

    CONSTRAINT "throws_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "throws" ADD CONSTRAINT "throws_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
