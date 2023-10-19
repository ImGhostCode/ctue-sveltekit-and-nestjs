-- CreateTable
CREATE TABLE "CommunicationPhrase" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "mean" TEXT NOT NULL,

    CONSTRAINT "CommunicationPhrase_pkey" PRIMARY KEY ("id")
);
