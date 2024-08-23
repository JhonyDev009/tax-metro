-- CreateTable
CREATE TABLE `Destino` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rol` ENUM('ADMIN', 'CHOFER') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tarifa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `origen` VARCHAR(191) NOT NULL,
    `destino` VARCHAR(191) NOT NULL,
    `monto` DOUBLE NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `destinoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `choferId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Viaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `origen` VARCHAR(191) NOT NULL,
    `destino` VARCHAR(191) NOT NULL,
    `monto` DOUBLE NOT NULL,
    `unidadId` INTEGER NOT NULL,
    `choferId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tarifa` ADD CONSTRAINT `Tarifa_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unidad` ADD CONSTRAINT `Unidad_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_unidadId_fkey` FOREIGN KEY (`unidadId`) REFERENCES `Unidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Viaje` ADD CONSTRAINT `Viaje_choferId_fkey` FOREIGN KEY (`choferId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
