# Task 3: Flipkart Wishlist Manager Architecture

## Data Flow Diagram

```mermaid
flowchart TD

A[Add Item Form] --> B[Form Submit]

B --> C[JavaScript Array / LocalStorage]

C --> D[Display Wishlist Items]

D --> E[Edit Item]

D --> F[Delete Item]

E --> C

F --> C

C --> D