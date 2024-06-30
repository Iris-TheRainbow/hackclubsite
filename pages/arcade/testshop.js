import ShopComponent from "../../components/arcade/shop-component"
import { getArcadeUser } from "../api/arcade/[userAirtableID]"
import { shopParts } from "../api/arcade/shop"
import { Image, Link, Text } from 'theme-ui'
import { Balancer } from "react-wrap-balancer"
import Meta from '@hackclub/meta'
import Head from 'next/head'

/** @jsxImportSource theme-ui */

const styled = `
@import url('https://fonts.googleapis.com/css2?family=Slackey&family=Emblema+One&family=Gaegu&display=swap');

.slackey {
  font-family: "Slackey", sans-serif;
 }

 .gaegu {
  font-family: "Gaegu", sans-serif;
}

body {
  background-color: #FAEFD6;
}

`

export default function Shop({ availableItems, userAirtableID = null, hoursBalance = 0 }) {
  
  return (
    <>
      <Meta
        as={Head}
        title="Arcade Shop"
        description="Redeem prizes at your own Arcade Shop."
        image="https://cloud-luaw423i2-hack-club-bot.vercel.app/0frame_33__1_.png"
      />
      <style>
        {`
        ._title-container {
          width: 100%;
        }
        `}
      </style>
      <Balancer className="_title-container">
        <h1
          sx={{
            textAlign: 'center',
            fontSize: 5,
            color: '#FF8C37',
            my: 0,
            pt: 5,
            display: 'block',
            width: '100%'
          }}
          className="slackey"
        >
          Welcome to the shop
        </h1>
      </Balancer>
      <Text sx={{ display: 'block', textAlign: 'center', color: '#35290F' }} className='gaegu' variant='subtitle' >Your current balance is {Math.floor(hoursBalance)} 🎟️</Text>
      <ShopComponent availableItems={availableItems} userAirtableID={userAirtableID} hoursBalance={hoursBalance} />
    </>
  )
}

export async function getStaticProps( ) {
  const props = ''
  await Promise.all([
    shopParts().then(items => {
      const availableItems = items.filter(item => item['Enabled']).map(item => ({
        'Name': 'testitem' || null,
        'Small Name': 'test' || null,
        'Full Name': 'testingitem' || null,
        'Description': 'this item is a test' || null,
        'Fulfillment Description': 'this itme is not fufilled' || null,
        'Cost Hours': '9999' || 0,
        id: 1,
        'Image URL': 'https://1.gravatar.com/avatar/eff4705adec973404213b5e110132b4930a26144294b68a83fd9caf8c8ccdc72?size=256' || null,
        'Max Order Quantity': '-1' || 1,
        Stock: '-999' || null
      }))
      props.availableItems = availableItems
    }),
    getArcadeUser('').then(user => {
      const hoursBalance = '999'
      props.hoursBalance = hoursBalance
    })
  ])
  
  return { props, revalidate: 10 }
}
