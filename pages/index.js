import { gql } from '@apollo/client'
import client from '../apollo-client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import React from 'react';

export default function Home({ countries }) {
  return (
    <div>
      <h1 className='text-5xl text-center text-slate-800 font-bold p-5'>Countries Detail</h1>

      <div>

        <Table removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>CAPITAL</TableColumn>
            <TableColumn>FLAG</TableColumn>
          </TableHeader>
          <TableBody>
            {countries.map((country) => (

              <TableRow key={country.code}>

                <TableCell>{country.name}</TableCell>
                <TableCell>{country.capital}</TableCell>
                <TableCell>{country.emoji}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>


      </div>

    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
     query{
      countries{
        code
        name
        emoji
        capital
        
      }
    }
    `
  })

  return {
    props: {
      countries: data.countries
    }
  }
}
