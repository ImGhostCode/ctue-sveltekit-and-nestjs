/*
  Warnings:

  - You are about to drop the column `favoriteList` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "favoriteList";

-- DropEnum
DROP TYPE "FavoriteItem";

-- CreateTable
CREATE TABLE "FavoriteItem" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "FavoriteItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FavoriteItemToWord" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FavoriteItemToSentence" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteItemToWord_AB_unique" ON "_FavoriteItemToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteItemToWord_B_index" ON "_FavoriteItemToWord"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteItemToSentence_AB_unique" ON "_FavoriteItemToSentence"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteItemToSentence_B_index" ON "_FavoriteItemToSentence"("B");

-- AddForeignKey
ALTER TABLE "FavoriteItem" ADD CONSTRAINT "FavoriteItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteItemToWord" ADD CONSTRAINT "_FavoriteItemToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoriteItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteItemToWord" ADD CONSTRAINT "_FavoriteItemToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "words"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteItemToSentence" ADD CONSTRAINT "_FavoriteItemToSentence_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoriteItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteItemToSentence" ADD CONSTRAINT "_FavoriteItemToSentence_B_fkey" FOREIGN KEY ("B") REFERENCES "sentences"("id") ON DELETE CASCADE ON UPDATE CASCADE;
