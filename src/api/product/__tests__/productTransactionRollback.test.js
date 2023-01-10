/* global strapi */
const data = {
  name: 'My new Product',
  price: 3.5,
}

it('Rollbacks a transaction', async () => {
  const newTransaction = await strapi.db.connection.transaction()
  const insertedRows = await newTransaction('products').insert(data, '*')

  expect(insertedRows).toHaveLength(1)
  await newTransaction.rollback()

  // Make sure the data is not inserted with Strapi
  const productResult = await strapi.entityService.findMany(
    'api::product.product',
    {
      filters: data,
    }
  )

  expect(productResult).toHaveLength(0)
})
