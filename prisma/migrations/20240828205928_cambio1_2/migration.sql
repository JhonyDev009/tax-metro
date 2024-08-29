/*
  Warnings:

  - You are about to drop the column `pago` on the `viaje` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Tarifa_destinoId_fkey` ON `tarifa`;

-- DropIndex
DROP INDEX `Tarifa_origenId_fkey` ON `tarifa`;

-- DropIndex
DROP INDEX `Unidad_choferId_fkey` ON `unidad`;

-- DropIndex
DROP INDEX `Viaje_choferId_fkey` ON `viaje`;

-- DropIndex
DROP INDEX `Viaje_destinoId_fkey` ON `viaje`;

-- DropIndex
DROP INDEX `Viaje_montoId_fkey` ON `viaje`;

-- DropIndex
DROP INDEX `Viaje_origenId_fkey` ON `viaje`;

-- DropIndex
DROP INDEX `Viaje_unidadId_fkey` ON `viaje`;

-- AlterTable
ALTER TABLE `viaje` DROP COLUMN `pago`;

-- AddForeignKey
ALTER TABLE `Tarifa` ADD CONSTRAINT `Tarifa_origenId_fkey` FOREIGN KEY (`origenId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarifa` ADD CONSTRAINT `Tarifa_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unidad` ADD CONSTRAINT `Unidad_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
