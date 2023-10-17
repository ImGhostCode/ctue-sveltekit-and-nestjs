/*
  Warnings:

  - You are about to drop the column `topicId` on the `sentences` table. All the data in the column will be lost.
  - You are about to drop the column `topicId` on the `words` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sentences" DROP CONSTRAINT "sentences_topicId_fkey";

-- DropForeignKey
ALTER TABLE "words" DROP CONSTRAINT "words_topicId_fkey";

-- AlterTable
ALTER TABLE "practices" ALTER COLUMN "reviewDay" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "sentences" DROP COLUMN "topicId";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "words" DROP COLUMN "topicId",
ALTER COLUMN "note" DROP NOT NULL,
ALTER COLUMN "picture" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_SentenceToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TopicToWord" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SentenceToTopic_AB_unique" ON "_SentenceToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_SentenceToTopic_B_index" ON "_SentenceToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicToWord_AB_unique" ON "_TopicToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicToWord_B_index" ON "_TopicToWord"("B");

-- AddForeignKey
ALTER TABLE "_SentenceToTopic" ADD CONSTRAINT "_SentenceToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "sentences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SentenceToTopic" ADD CONSTRAINT "_SentenceToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicToWord" ADD CONSTRAINT "_TopicToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicToWord" ADD CONSTRAINT "_TopicToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "words"("id") ON DELETE CASCADE ON UPDATE CASCADE;
