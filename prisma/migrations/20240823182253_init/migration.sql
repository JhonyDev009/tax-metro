/*
  Warnings:

  - You are about to drop the column `destino` on the `tarifa` table. All the data in the column will be lost.
  - You are about to drop the column `origen` on the `tarifa` table. All the data in the column will be lost.
  - You are about to drop the column `destino` on the `viaje` table. All the data in the column will be lost.
  - You are about to drop the column `monto` on the `viaje` table. All the data in the column will be lost.
  - You are about to drop the column `origen` on the `viaje` table. All the data in the column will be lost.
  - Added the required column `origenId` to the `Tarifa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinoId` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montoId` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origenId` to the `Viaje` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Tarifa_destinoId_fkey` ON `tarifa`;

-- DropIndex
DROP INDEX `Unidad_choferId_fkey` ON `unidad`;

-- DropIndex
DROP INDEX `Viaje_choferId_fkey` ON `viaje`;

-- DropIndex
DROP INDEX `Viaje_unidadId_fkey` ON `viaje`;

-- AlterTable
ALTER TABLE `tarifa` DROP COLUMN `destino`,
    DROP COLUMN `origen`,
    ADD COLUMN `origenId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `viaje` DROP COLUMN `destino`,
    DROP COLUMN `monto`,
    DROP COLUMN `origen`,
    ADD COLUMN `destinoId` INTEGER NOT NULL,
    ADD COLUMN `montoId` INTEGER NOT NULL,
    ADD COLUMN `origenId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Tarifa` ADD CONSTRAINT `Tarifa_origenId_fkey` FOREIGN KEY (`origenId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarifa` ADD CONSTRAINT `Tarifa_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unidad` ADD CONSTRAINT `Unidad_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_origenId_fkey` FOREIGN KEY (`origenId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_montoId_fkey` FOREIGN KEY (`montoId`) REFERENCES `Tarifa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_unidadId_fkey` FOREIGN KEY (`unidadId`) REFERENCES `Unidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
