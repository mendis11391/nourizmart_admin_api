import NrmProductsModel from '../models-v2/NRM_PRODUCTS'
import {INrmProductsAttributes} from '../models-v2/NRM_PRODUCTS.d'
// CRUD operations
async function createProduct(productData: any) {
  try {
    const product = await NrmProductsModel.create(productData);
    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

async function getProductById(productId: number) {
  try {
    const product = await NrmProductsModel.findByPk(productId);
    return product;
  } catch (error) {
    console.error('Error getting product by ID:', error);
    throw error;
  }
}

async function updateProduct(productId: number, newData: object) {
  try {
    const product = await NrmProductsModel.findByPk(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.update(newData);
    return product;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

async function deleteProduct(productId: number) {
  try {
    const product = await NrmProductsModel.findByPk(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.destroy();
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}