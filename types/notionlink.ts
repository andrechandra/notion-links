export interface NotionLink {
  properties: {
    Name: {
      title: Array<{
        plain_text: string
      }>
    }
    URL: {
      url: string
    }
    Order: {
      number: number
    }
    Icons: {
      rich_text: Array<{ plain_text: string }>
    }
    Description: {
      rich_text: Array<{ plain_text: string }>
    }
  }
}
