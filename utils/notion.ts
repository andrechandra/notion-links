import 'server-only'

import { Client } from '@notionhq/client'
import { cache } from 'react'

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getLinks = cache(() => {
  const databaseId = process.env.NOTION_DATABASE_ID!

  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID environment variable is not defined')
  }

  return notionClient.databases.query({
    database_id: databaseId,
  })
})
