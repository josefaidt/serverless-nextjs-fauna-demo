import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import { subtitle } from '../components/Header/Header.module.css'
import OrderCard from '../components/OrderCard'

const fetcher = url => fetch(url).then(r => r.json())

export default function HomePage() {
  const { data: orders, error } = useSWR('/api/orders', fetcher)
  return (
    <>
      <Head>
        <title>Jed's Supply Co.</title>
      </Head>
      <Container>
        <section>
          <Header>
            Jed&apos;s Supply Co.
            <br />
            <span className={subtitle}>Order Summary</span>
          </Header>
          <Content>
            {error ? <p>Oops, something went wrong: {error.message}</p> : null}
            {orders?.length ? (
              <>
                {orders?.map(order => (
                  <OrderCard order={order} key={order._id} />
                ))}
                <details>
                  <summary>data</summary>
                  <code>
                    <pre>{JSON.stringify(orders, null, 2)}</pre>
                  </code>
                </details>
              </>
            ) : (
              !error && <p>Loading orders...</p>
            )}
          </Content>
        </section>
      </Container>
    </>
  )
}
