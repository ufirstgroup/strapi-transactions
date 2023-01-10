/* global strapi */
const data = {
  name: 'My new Product',
  price: 3.5,
}

it('Inserts a product with a transaction', async () => {
  const newTransaction = await strapi.db.connection.transaction()
  const insertedRows = await newTransaction('products').insert(data, '*')

  expect(insertedRows).toHaveLength(1)

  // Find it with Strapi - still not present in the database
  const productResult = await strapi.entityService.findMany(
    'api::product.product',
    {
      filters: data,
    }
  )

  expect(productResult).toHaveLength(0)

  await newTransaction.commit()

  // Find it with Strapi - found it!
  const productResultWithStrapi = await strapi.entityService.findMany(
    'api::product.product',
    {
      filters: data,
    }
  )

  expect(productResultWithStrapi).toHaveLength(1)

  const newProduct = productResultWithStrapi[0]
  expect(newProduct).toMatchObject(data)

  await strapi.entityService.delete('api::product.product', newProduct.id)
})
