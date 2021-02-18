Create database Inventory;
use Inventory;

Create Table Product(
ProductId Int Identity(1,1) Primary Key,
Name Varchar(100) Not Null,
Category Varchar(100),
Color Varchar(20),
UnitPrice Decimal Not Null,
AvailableQuantity Int Not Null)
GO
Create Table UserInfo(
UserId Int Identity(1,1) Not null Primary Key,
FirstName Varchar(30) Not null,
LastName Varchar(30) Not null,
UserName Varchar(30) Not null,
Email Varchar(50) Not null,
Password Varchar(20) Not null,
CreatedDate DateTime Default(GetDate()) Not Null)
GO
Insert Into UserInfo(FirstName, LastName, UserName, Email, Password) 
Values ('Inventory', 'Admin', 'InventoryAdmin', 'InventoryAdmin@abc.com', '$admin@2017')
GO
INSERT INTO Inventory.dbo.Product (Name, Category, Color, UnitPrice, AvailableQuantity) VALUES('Producto 1', 'Categoria ABC', 'Rojo', 15, 500);
INSERT INTO Inventory.dbo.Product (Name, Category, Color, UnitPrice, AvailableQuantity) VALUES('Producto 2', 'Categoria ABC', 'Rojo', 10, 5000);
INSERT INTO Inventory.dbo.Product (Name, Category, Color, UnitPrice, AvailableQuantity) VALUES('Producto 3', 'Categoria ABC', 'Naranja', 5, 100);
INSERT INTO Inventory.dbo.Product (Name, Category, Color, UnitPrice, AvailableQuantity) VALUES('Producto 4', 'Categoria ABC', 'Verde', 1, 0);
INSERT INTO Inventory.dbo.Product (Name, Category, Color, UnitPrice, AvailableQuantity) VALUES('Producto 5', 'Categoria ABC', 'Rojo', 15, 3500);
