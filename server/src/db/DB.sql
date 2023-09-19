CREATE DATABASE  IF NOT EXISTS `tienda` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tienda`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tienda
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calificaciones`
--

DROP TABLE IF EXISTS `calificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calificaciones` (
  `IdCalificacion` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int DEFAULT NULL,
  `nivelSatisfaccion` int NOT NULL,
  `fechaSatisfaccion` date NOT NULL,
  `comentarios` varchar(1000) NOT NULL,
  PRIMARY KEY (`IdCalificacion`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificaciones`
--

LOCK TABLES `calificaciones` WRITE;
/*!40000 ALTER TABLE `calificaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `calificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `IdCategoria` int NOT NULL AUTO_INCREMENT,
  `nombreCategoria` varchar(50) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`IdCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudades` (
  `IdCiudad` int NOT NULL AUTO_INCREMENT,
  `nombreCiudad` varchar(100) NOT NULL,
  PRIMARY KEY (`IdCiudad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comunas`
--

DROP TABLE IF EXISTS `comunas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comunas` (
  `IdComuna` int NOT NULL AUTO_INCREMENT,
  `IdCiudad` int DEFAULT NULL,
  `nombreComuna` varchar(100) NOT NULL,
  PRIMARY KEY (`IdComuna`),
  KEY `IdCiudad` (`IdCiudad`),
  CONSTRAINT `comunas_ibfk_1` FOREIGN KEY (`IdCiudad`) REFERENCES `ciudades` (`IdCiudad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunas`
--

LOCK TABLES `comunas` WRITE;
/*!40000 ALTER TABLE `comunas` DISABLE KEYS */;
/*!40000 ALTER TABLE `comunas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuentaclientes`
--

DROP TABLE IF EXISTS `cuentaclientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuentaclientes` (
  `IdCuenta` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int NOT NULL,
  `numCuenta` int NOT NULL,
  `cvv` int NOT NULL,
  `fechaExpiracion` date NOT NULL,
  PRIMARY KEY (`IdCuenta`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `cuentaclientes_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuentaclientes`
--

LOCK TABLES `cuentaclientes` WRITE;
/*!40000 ALTER TABLE `cuentaclientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuentaclientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallefacturas`
--

DROP TABLE IF EXISTS `detallefacturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detallefacturas` (
  `IdDetalleFactura` int NOT NULL AUTO_INCREMENT,
  `IdFactura` int DEFAULT NULL,
  `IdProducto` int DEFAULT NULL,
  `cantidad` int NOT NULL,
  `subtotalDetalle` float NOT NULL,
  PRIMARY KEY (`IdDetalleFactura`),
  KEY `IdFactura` (`IdFactura`),
  KEY `IdProducto` (`IdProducto`),
  CONSTRAINT `detallefacturas_ibfk_1` FOREIGN KEY (`IdFactura`) REFERENCES `facturas` (`IdFactura`),
  CONSTRAINT `detallefacturas_ibfk_2` FOREIGN KEY (`IdProducto`) REFERENCES `productos` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallefacturas`
--

LOCK TABLES `detallefacturas` WRITE;
/*!40000 ALTER TABLE `detallefacturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallefacturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallepedido`
--

DROP TABLE IF EXISTS `detallepedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detallepedido` (
  `IdDetallePedido` int NOT NULL AUTO_INCREMENT,
  `IdPedido` int DEFAULT NULL,
  `IdProducto` int DEFAULT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`IdDetallePedido`),
  KEY `IdPedido` (`IdPedido`),
  KEY `IdProducto` (`IdProducto`),
  CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`IdPedido`) REFERENCES `pedidos` (`IdPedido`),
  CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`IdProducto`) REFERENCES `productos` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallepedido`
--

LOCK TABLES `detallepedido` WRITE;
/*!40000 ALTER TABLE `detallepedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallepedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `IdDireccion` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int DEFAULT NULL,
  `IdCiudad` int DEFAULT NULL,
  `nombreCalle` varchar(100) NOT NULL,
  PRIMARY KEY (`IdDireccion`),
  KEY `IdCiudad` (`IdCiudad`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `direcciones_ibfk_1` FOREIGN KEY (`IdCiudad`) REFERENCES `ciudades` (`IdCiudad`),
  CONSTRAINT `direcciones_ibfk_2` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas` (
  `IdFactura` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int DEFAULT NULL,
  `IdDescuento` int DEFAULT NULL,
  `IdCuenta` int DEFAULT NULL,
  `fechaVenta` date NOT NULL,
  `iva` float NOT NULL,
  `subtotal` float NOT NULL,
  `neto` float NOT NULL,
  PRIMARY KEY (`IdFactura`),
  KEY `IdCuenta` (`IdCuenta`),
  KEY `IdDescuento` (`IdDescuento`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`IdCuenta`) REFERENCES `cuentaclientes` (`IdCuenta`),
  CONSTRAINT `facturas_ibfk_2` FOREIGN KEY (`IdDescuento`) REFERENCES `promociones` (`IdDescuento`),
  CONSTRAINT `facturas_ibfk_3` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `IdPedido` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int DEFAULT NULL,
  `IdCuenta` int DEFAULT NULL,
  `IdDirecciones` int DEFAULT NULL,
  `fechaPedido` date NOT NULL,
  `neto` float NOT NULL,
  PRIMARY KEY (`IdPedido`),
  KEY `IdCuenta` (`IdCuenta`),
  KEY `IdDirecciones` (`IdDirecciones`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`IdCuenta`) REFERENCES `cuentaclientes` (`IdCuenta`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`IdDirecciones`) REFERENCES `direcciones` (`IdDireccion`),
  CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfiles`
--

DROP TABLE IF EXISTS `perfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfiles` (
  `IdPerfil` int NOT NULL AUTO_INCREMENT,
  `nombrePerfil` varchar(50) NOT NULL,
  PRIMARY KEY (`IdPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfiles`
--

LOCK TABLES `perfiles` WRITE;
/*!40000 ALTER TABLE `perfiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `IdProducto` int NOT NULL AUTO_INCREMENT,
  `IdCategoria` int DEFAULT NULL,
  `idReferencia` int DEFAULT NULL,
  `nombreProducto` varchar(100) NOT NULL,
  `estadoProducto` varchar(100) NOT NULL,
  `stockMinimo` int NOT NULL,
  PRIMARY KEY (`IdProducto`),
  KEY `IdCategoria` (`IdCategoria`),
  KEY `idReferencia` (`idReferencia`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`IdCategoria`) REFERENCES `categorias` (`IdCategoria`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`idReferencia`) REFERENCES `referencias` (`idReferencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promociones`
--

DROP TABLE IF EXISTS `promociones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promociones` (
  `IdDescuento` int NOT NULL AUTO_INCREMENT,
  `IdProducto` int DEFAULT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `porcentaje` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdDescuento`),
  KEY `IdProducto` (`IdProducto`),
  CONSTRAINT `promociones_ibfk_1` FOREIGN KEY (`IdProducto`) REFERENCES `productos` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promociones`
--

LOCK TABLES `promociones` WRITE;
/*!40000 ALTER TABLE `promociones` DISABLE KEYS */;
/*!40000 ALTER TABLE `promociones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quejasreclamos`
--

DROP TABLE IF EXISTS `quejasreclamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quejasreclamos` (
  `IdQuejaReclamo` int NOT NULL AUTO_INCREMENT,
  `IdFactura` int NOT NULL,
  `fechaQueja` date NOT NULL,
  `descripcionQueja` varchar(2000) NOT NULL,
  PRIMARY KEY (`IdQuejaReclamo`),
  KEY `IdFactura` (`IdFactura`),
  CONSTRAINT `quejasreclamos_ibfk_1` FOREIGN KEY (`IdFactura`) REFERENCES `facturas` (`IdFactura`) ON DELETE CASCADE,
  CONSTRAINT `quejasreclamos_ibfk_2` FOREIGN KEY (`IdFactura`) REFERENCES `facturas` (`IdFactura`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quejasreclamos`
--

LOCK TABLES `quejasreclamos` WRITE;
/*!40000 ALTER TABLE `quejasreclamos` DISABLE KEYS */;
/*!40000 ALTER TABLE `quejasreclamos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencias`
--

DROP TABLE IF EXISTS `referencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencias` (
  `idReferencia` int NOT NULL AUTO_INCREMENT,
  `precioUnitario` int NOT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `talla` varchar(100) DEFAULT NULL,
  `tipoTela` varchar(100) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`idReferencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencias`
--

LOCK TABLES `referencias` WRITE;
/*!40000 ALTER TABLE `referencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `referencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `IdUsuario` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `telefono` text NOT NULL,
  `genero` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `_password` varchar(20) NOT NULL,
  `IdPerfil` int DEFAULT NULL,
  PRIMARY KEY (`IdUsuario`),
  KEY `IdPerfil` (`IdPerfil`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`IdPerfil`) REFERENCES `perfiles` (`IdPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tienda'
--

--
-- Dumping routines for database 'tienda'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-10 10:50:05
