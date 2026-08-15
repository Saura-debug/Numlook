# PhoneLookup

A full-stack phone number lookup and validation platform built for searching, validating, and enriching US phone numbers. The application integrates with the Abstract Phone Validation API and maintains a PostgreSQL-backed cache to avoid unnecessary external API requests.

## Features

- User registration and authentication
- Secure password hashing
- JWT-based authentication
- Phone number lookup and validation
- Carrier information
- Line type detection
- Country and location information
- International and national phone formats
- MCC and MNC information
- Timezone information
- VoIP detection
- Disposable number detection
- Risk level and abuse detection
- Search history for authenticated users
- PostgreSQL caching of lookup results
- Cache expiration and refresh mechanism
- RESTful backend API
- React-based frontend
- Responsive UI

## Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Query
- React Hook Form
- Zod
- Axios

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT
- Axios
- Zod

### External API

- Abstract API — Phone Validation API

## Architecture

The application follows a layered backend architecture:


Frontend
   │
   ▼
React Components
   │
   ▼
React Query / Hooks
   │
   ▼
Axios API Client
   │
   ▼
Express REST API
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ├──────────────► PostgreSQL
   │
   └──────────────► Abstract Phone API

How Phone Lookup Works

When a user searches for a phone number:

The frontend sends the phone number to the backend.
The backend checks PostgreSQL for an existing cached lookup.
If a valid cached record exists, the cached result is returned.
If the record does not exist or has expired, the backend requests fresh information from the Abstract Phone Validation API.
The external API response is mapped into the application's internal data structure.
The mapped data is stored in PostgreSQL.
A search-history record is created for the authenticated user.
The backend returns the stored lookup result to the frontend.
React renders the result in the Phone Information card.

This caching approach reduces unnecessary calls to the external API and allows previously searched numbers to be served directly from PostgreSQL.

Phone Information Provided

Depending on the information returned by the external provider, the application can display:

Phone number
International format
National format
Carrier
Line type
MCC
MNC
Country
Country code
Country prefix
Region
City
Timezone
SMS domain
SMS email
Line status
VoIP status
Risk level
Disposable number status
Abuse detection status

Database Design

The application uses PostgreSQL with Prisma ORM.

User

Stores authenticated users and their credentials.

PhoneLookup

Stores normalized phone lookup results and acts as the application's cache.

SearchHistory

Associates users with the phone numbers they have searched.

User
 │
 │ 1:N
 ▼
SearchHistory
 │
 │ N:1
 ▼
PhoneLookup

API Flow

Example lookup request:

GET /api/v1/lookup?phone=+14152007900

Example response:

{
  "success": true,
  "data": {
    "phoneNumber": "+14152007900",
    "valid": true,
    "lineType": "mobile",
    "carrier": "T-Mobile USA Inc.",
    "country": "United States",
    "countryCode": "US",
    "region": "California",
    "city": "San Francisco",
    "timezone": "America/Los_Angeles",
    "isVoip": false,
    "riskLevel": "low",
    "disposable": false
  }
}
Project Structure
PhoneLookup/
│
├── frontend/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── routes/
│       ├── types/
│       └── ...
│
└── numlookup-backend/
    └── src/
        ├── config/
        ├── constants/
        ├── controllers/
        ├── dto/
        ├── mappers/
        ├── middleware/
        ├── prisma/
        ├── repositories/
        ├── routes/
        ├── services/
        ├── types/
        ├── utils/
        └── server.ts
Caching Strategy

The application does not call the external phone lookup API for every search.

When a number is searched:

Search
   │
   ▼
Check PostgreSQL
   │
   ├── Cached + Not Expired
   │          │
   │          ▼
   │      Return Cache
   │
   └── Missing / Expired
              │
              ▼
       Call External API
              │
              ▼
        Map Response
              │
              ▼
        Save / Update DB
              │
              ▼
         Return Result

This provides better performance and reduces unnecessary external API usage.

Environment Variables

Create a .env file in the backend:

DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
ABSTRACT_API_KEY=your_abstract_api_key

Do not commit .env files or API keys to the repository.

Running Locally
Backend
cd numlookup-backend
npm install
npm run dev
Frontend
cd frontend
npm install
npm run dev

Make sure PostgreSQL is running and the required environment variables are configured before starting the backend.

Future Improvements
Advanced search filters
More detailed search history
Pagination
Admin dashboard
Rate limiting improvements
Better analytics
Exporting lookup results
Improved error handling and monitoring
Production deployment

Screenshot

Authentication
Login
<img width="1920" height="1066" alt="image" src="https://github.com/user-attachments/assets/9364b0e3-8c03-4497-babe-fbd0264adeca" />
Signup
<img width="1920" height="1066" alt="image" src="https://github.com/user-attachments/assets/28840479-960a-45b0-88fa-7b1fb6b99cf3" />
DashBoard
<img width="1900" height="1043" alt="image" src="https://github.com/user-attachments/assets/fee91fca-96c0-44ff-bf6e-18b9cf6d2637" />
Phone Lookup
<img width="1900" height="1043" alt="image" src="https://github.com/user-attachments/assets/b8711ff3-840b-47a0-ac9d-7412e5b34791" />





   
