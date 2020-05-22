import React from 'react'
import cn from 'classnames'
import styles from './OrderCard.module.css'

function StatusBadge({ status, ...rest }) {
  let color
  switch (status) {
    case 'processing':
      color = styles.statusProcessing
      break
    case 'shipped':
      color = styles.statusShipped
      break
    case 'cancelled':
      color = styles.statusCancelled
      break
    default:
      color = styles.statusNeutral
      break
  }
  return (
    <div {...rest} className={cn(styles.status, color, rest?.className)}>
      {status}
    </div>
  )
}

export default function OrderCard({ order, ...rest }) {
  return (
    <article {...rest} className={cn(rest?.className, styles.card)}>
      <header className={styles.header}>
        <h3 className={styles.headerOrder}>Order #{order._id}</h3>
        <StatusBadge status={order.status} />
      </header>
      <div>
        <p className={styles.for}>
          For <strong>{order.customerName}</strong>
        </p>
        <div className={styles.address}>
          <p>
            {/* display street address on first line */}
            {order.shippingAddress.split(', ').shift()}
            <br />
            {/* display city, state, zip code */}
            {order.shippingAddress.split(', ').slice(1).join(', ')}
          </p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {order.line.map((line, index) => (
            <tr key={index}>
              {/* order details */}
              <td>{line.quantity}</td>
              <td>{line.product.name}</td>
              <td>{line.product.description}</td>
              <td>{`$${line.price?.toFixed(2)}`}</td>
              <td>{`$${line.subtotal?.toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className={styles.subtotal}>
              <strong>${!isNaN(order.subtotal) ? order.subtotal.toFixed(2) : '---'}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </article>
  )
}
