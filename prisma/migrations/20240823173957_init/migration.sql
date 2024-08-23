/*
  Warnings:

  - You are about to alter the column `tipo` on the `tarifa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

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
ALTER TABLE `tarifa` MODIFY `tipo` ENUM('REDONDO', 'SENCILLO') NOT NULL;

-- AddForeignKey
ALTER TABLE `Tarifa` ADD CONSTRAINT `Tarifa_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unidad` ADD CONSTRAINT `Unidad_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_unidadId_fkey` FOREIGN KEY (`unidadId`) REFERENCES `Unidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
