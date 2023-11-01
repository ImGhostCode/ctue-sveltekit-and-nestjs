/*
  Warnings:

  - You are about to drop the column `favoriteList` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "contributions" DROP CONSTRAINT "contributions_userId_fkey";

-- DropForeignKey
ALTER TABLE "practices" DROP CONSTRAINT "practices_userId_fkey";

-- DropForeignKey
ALTER TABLE "sentences" DROP CONSTRAINT "sentences_userId_fkey";

-- DropForeignKey
ALTER TABLE "words" DROP CONSTRAINT "words_userId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "favoriteList";
