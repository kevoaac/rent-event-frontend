const cartSlice = (set, get) => ({
  cart: [],
  cartQuantity: 0,

  addToCart: (item) => {
    set((prev) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prev.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      // If the item exists, update its quantity
      if (existingItemIndex !== -1) {
        const updatedCart = [...prev.cart];
        updatedCart[existingItemIndex].quantity += 1;

        return {
          cart: updatedCart,
          cartQuantity: prev.cartQuantity + 1,
        };
      } else {
        // If the item is not in the cart, add it
        return {
          cart: [...prev.cart, item],
          cartQuantity: prev.cartQuantity + 1,
        };
      }
    });
  },

  increaseQuantity: (itemId) => {
    set((prev) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prev.cart.findIndex(
        (cartItem) => cartItem._id === itemId
      );
      // Update item quantity
      const updatedCart = [...prev.cart];
      updatedCart[existingItemIndex].quantity += 1;

      return {
        cart: updatedCart,
        cartQuantity: prev.cartQuantity + 1,
      };
    });
  },

  removeFromCart: (itemId) => {
    const existingItemIndex = get().cart.findIndex(
      (cartItem) => cartItem.id === itemId
    );
    // If the item exists in the cart, update its quantity or remove it
    if (existingItemIndex !== -1) {
      const updatedCart = [...get().cart];
      const removedItem = updatedCart[existingItemIndex];
      // Decrease quantity if more than 1
      if (removedItem.quantity > 1) {
        removedItem.quantity -= 1;
      } else {
        // Remove the item if quantity is 1
        updatedCart.splice(existingItemIndex, 1);
      }

      set({
        // Update the cart and cartQuantity
        cart: updatedCart,
        cartQuantity: get().cartQuantity - 1,
      });
    }
  },

  deleteFromCart: (itemId) => {
    const existingItemIndex = get().cart.findIndex(
      (cartItem) => cartItem.id === itemId
    );
    const updatedCart = [...get().cart];
    const deletedItem = updatedCart[existingItemIndex];

    // Delete the item cart
    updatedCart.splice(existingItemIndex, 1);

    set({
      // Update the cart and cartQuantity
      cart: updatedCart,
      cartQuantity: get().cartQuantity - deletedItem.quantity,
    });
  },

  resetCart: () => {
    set({
      // Reset cart and cartQuantity to default values
      cart: [],
      cartQuantity: 0,
    });
  },
});

export default cartSlice;