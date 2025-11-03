-- CreateTable
CREATE TABLE "UserNext" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserNext_pkey" PRIMARY KEY ("id")
);
