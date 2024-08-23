/*
  Warnings:

  - Added the required column `email` to the `Usuario` table without a default value. This is not possible if the table is not empty.

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
ALTER TABLE `usuario` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Tarifa` ADD CONSTRAINT `Tarifa_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unidad` ADD CONSTRAINT `Unidad_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_unidadId_fkey` FOREIGN KEY (`unidadId`) REFERENCES `Unidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
