Feature: Flujo completo en saucedemo.com

  Scenario: Iniciar sesión y agregar un producto al carrito
    Given que estoy en la página de login
    When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    And hago clic en el botón de login
    Then debería ver el título "Products"
    When agrego el primer producto al carrito
    And voy al carrito
    Then debería ver el producto "Sauce Labs Backpack" en el carrito
    When vuelvo a la página de productos
    And abro el menú y cierro sesión
    Then debería regresar a la página de login