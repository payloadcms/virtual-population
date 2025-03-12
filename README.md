# Relationship CSV Export Implementation

A Payload user wants to have a single view in Payload which can allow querying and exporting from two collections at once:

1. Requests
2. Request Lines

A Request can have many request lines.

Here are some example queries that the Payload user may want to perform, against Request Lines:

- Give me all the request lines that somebody submitted (request.requestedBy)
- Give me all the request lines by request ID (request)
- Give me all request lines where request total is less than 1000 (where request.total less_than 1000)

The goal is to produce a CSV export that is highly legible, which looks something like this:

| Request ID    | Request Total       | Requested By        | Line Item Title    | Line Item Description description    | Line Number      | Line Item Cost   |
| ------------- | ------------------- | ------------------- | ------------------ | ------------------------------------ | ---------------- | ---------------- |
| 13            | 3000                | Sean                | MacBook Pro - 14   | MacBook Pro                          | 14               | 1000             |
| 13            | 3000                | Sean                | Plant - 14         | Plant                                | 14               | 1000             |
| 13            | 3000                | Sean                | Plant - 14         | Plant                                | 14               | 1000             |
| ------------- | ------------------- | ------------------- | ------------------ | ------------------------------------ | ---------------- | ---------------- |

## Required, missing functionality

- Can the Admin UI build filters based on nested relationship properties?
  - Should we "white-label" which nested properties we want to expose via UI? It would be bad to expose all of them...
  - We should ideally eliminate virtual fields from the UI filter...
  - We should also disable sorting on virtual fields...
