import graphql from '../helpers/graphql'

const query = `
query ORDERS {
  allOrders {
    data {
      _id
      creationDate
      line {
        product {
          name
          description
        }
        quantity
        price
      }
      status
      customer {
        firstName
        lastName
        address {
          street
          city
          state
          zipCode
        }
      }
    }
  }
}
`

/*
 * Array of the lines in each order with their item names and description and subtotal
 * Total price of all lines
 * Status
 * Shipping address
 * Customer name
 */

export default async function (req, res) {
  let data
  try {
    data = await graphql.request(query)
  } catch (error) {
    res.status(500).json({ message: `Unable to reach FaunaDB: ${error.message}` })
  } finally {
    const orders = data.allOrders.data
      .sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate))
      .map(order => ({
        _id: order._id,
        status: order.status,
        shippingAddress: Object.values(order.customer.address).join(', '),
        customerName: `${order.customer.firstName} ${order.customer.lastName}`,
        line: order.line
          .map(line => ({ ...line, subtotal: parseFloat((line.quantity * line.price).toFixed(2)) }))
          .sort((a, b) => a.subtotal - b.subtotal),
        subtotal: parseFloat(
          order.line
            .map(line => line.quantity * line.price)
            .reduce((accumulator, lineTotal) => accumulator + lineTotal, 0)
            .toFixed(2)
        ),
      }))
    res.status(200).json(orders)
  }
}
