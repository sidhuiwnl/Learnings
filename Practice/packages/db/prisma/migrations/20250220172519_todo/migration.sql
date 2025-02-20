-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "todo" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
