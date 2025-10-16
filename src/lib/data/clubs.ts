// Centralized club data service - Future-proof for PBPI API integration
export interface Club {
  // Basic Info
  id: string;
  slug: string;
  name: string;
  description: string;
  logoUrl?: string;
  bannerUrl?: string;
  
  // Location
  address: string;
  city: string;
  region: string;
  country: string;
  latitude?: number;
  longitude?: number;
  
  // Contact
  email: string;
  phone: string;
  website?: string;
  
  // Social Media
  socialMedia: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    youtube?: string;
  };
  
  // Facilities
  courts: number;
  indoor: boolean;
  amenities: string[];
  
  // Status & Stats
  status: 'ACTIVE' | 'PENDING' | 'SUSPENDED';
  memberCount: number;
  establishedYear: number;
  
  // Admin Info
  adminEmail: string;
  adminPassword: string; // In real app, this would be hashed
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
}

// Mock data - This will be replaced with API calls to PBPI server
const clubsData: Club[] = [
  {
    id: "padel-banten",
    slug: "padel-banten",
    name: "Padel Banten",
    description: "Premier padel facility in Banten with world-class courts and professional coaching. We offer training programs for all skill levels and host regular tournaments.",
    logoUrl: "/clubs/padel-banten-logo.svg",
    bannerUrl: "/clubs/padel-banten-banner.svg",
    address: "Jl. Raya Serang Km 15, Serang",
    city: "Serang",
    region: "Banten",
    country: "Indonesia",
    latitude: -6.1158,
    longitude: 106.1544,
    email: "info@padelbanten.com",
    phone: "+62-254-123456",
    website: "https://padelbanten.com",
    socialMedia: {
      instagram: "@padelbanten",
      facebook: "PadelBantenOfficial",
      whatsapp: "+62-254-123456",
      youtube: "Padel Banten Channel"
    },
    courts: 4,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Café", "Pro Shop", "Changing Rooms"],
    status: "ACTIVE",
    memberCount: 45,
    establishedYear: 2020,
    adminEmail: "admin@padelbanten.com",
    adminPassword: "padelbanten2024",
    createdAt: "2020-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "jakarta-padel-club",
    slug: "jakarta-padel-club",
    name: "Jakarta Padel Club",
    description: "The heart of padel in Jakarta. Our state-of-the-art facility features 6 courts with premium lighting and air conditioning. Join our vibrant community of players.",
    logoUrl: "/clubs/jakarta-padel-logo.svg",
    bannerUrl: "/clubs/jakarta-padel-banner.svg",
    address: "Jl. Sudirman No. 123, Jakarta Selatan",
    city: "Jakarta",
    region: "Jakarta",
    country: "Indonesia",
    latitude: -6.2088,
    longitude: 106.8456,
    email: "contact@jakartapadel.com",
    phone: "+62-21-5550123",
    website: "https://jakartapadel.com",
    socialMedia: {
      instagram: "@jakartapadelclub",
      facebook: "JakartaPadelClub",
      whatsapp: "+62-21-5550123"
    },
    courts: 6,
    indoor: true,
    amenities: ["Air Conditioning", "Premium Lighting", "Parking", "Restaurant", "Pro Shop", "Locker Rooms", "Sauna"],
    status: "ACTIVE",
    memberCount: 78,
    establishedYear: 2019,
    adminEmail: "admin@jakartapadel.com",
    adminPassword: "jakartapadel2024",
    createdAt: "2019-03-20T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "bali-padel-center",
    slug: "bali-padel-center",
    name: "Bali Padel Center",
    description: "Experience padel in paradise! Our beautiful facility in Bali offers both indoor and outdoor courts with stunning views. Perfect for vacation padel.",
    logoUrl: "/clubs/bali-padel-logo.svg",
    bannerUrl: "/clubs/bali-padel-banner.svg",
    address: "Jl. Pantai Kuta No. 88, Kuta",
    city: "Kuta",
    region: "Bali",
    country: "Indonesia",
    latitude: -8.7183,
    longitude: 115.1686,
    email: "hello@balipadel.com",
    phone: "+62-361-987654",
    website: "https://balipadel.com",
    socialMedia: {
      instagram: "@balipadelcenter",
      facebook: "BaliPadelCenter",
      whatsapp: "+62-361-987654",
      youtube: "Bali Padel Center"
    },
    courts: 5,
    indoor: false,
    amenities: ["Outdoor Courts", "Beach View", "Parking", "Beach Bar", "Equipment Rental", "Showers"],
    status: "ACTIVE",
    memberCount: 32,
    establishedYear: 2021,
    adminEmail: "admin@balipadel.com",
    adminPassword: "balipadel2024",
    createdAt: "2021-06-10T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "surabaya-padel-academy",
    slug: "surabaya-padel-academy",
    name: "Surabaya Padel Academy",
    description: "Professional padel training center in Surabaya. We focus on developing young talent and offer comprehensive coaching programs for competitive players.",
    logoUrl: "/clubs/surabaya-padel-logo.svg",
    bannerUrl: "/clubs/surabaya-padel-banner.svg",
    address: "Jl. Raya Darmo No. 456, Surabaya",
    city: "Surabaya",
    region: "East Java",
    country: "Indonesia",
    latitude: -7.2575,
    longitude: 112.7521,
    email: "info@surabayapadel.com",
    phone: "+62-31-1234567",
    website: "https://surabayapadel.com",
    socialMedia: {
      instagram: "@surabayapadelacademy",
      facebook: "SurabayaPadelAcademy",
      whatsapp: "+62-31-1234567"
    },
    courts: 3,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Training Equipment", "Video Analysis", "Café"],
    status: "ACTIVE",
    memberCount: 28,
    establishedYear: 2022,
    adminEmail: "admin@surabayapadel.com",
    adminPassword: "surabayapadel2024",
    createdAt: "2022-02-14T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "bandung-padel-hub",
    slug: "bandung-padel-hub",
    name: "Bandung Padel Hub",
    description: "The coolest padel destination in Bandung! Our modern facility combines padel with a vibrant social atmosphere. Perfect for both serious players and casual enthusiasts.",
    logoUrl: "/clubs/bandung-padel-logo.svg",
    bannerUrl: "/clubs/bandung-padel-banner.svg",
    address: "Jl. Dago No. 789, Bandung",
    city: "Bandung",
    region: "West Java",
    country: "Indonesia",
    latitude: -6.9039,
    longitude: 107.6186,
    email: "contact@bandungpadel.com",
    phone: "+62-22-8765432",
    website: "https://bandungpadel.com",
    socialMedia: {
      instagram: "@bandungpadelhub",
      facebook: "BandungPadelHub",
      whatsapp: "+62-22-8765432"
    },
    courts: 4,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Co-working Space", "Café", "Event Space"],
    status: "ACTIVE",
    memberCount: 52,
    establishedYear: 2020,
    adminEmail: "admin@bandungpadel.com",
    adminPassword: "bandungpadel2024",
    createdAt: "2020-08-25T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "medan-padel-club",
    slug: "medan-padel-club",
    name: "Medan Padel Club",
    description: "Northern Sumatra's premier padel destination. We bring the excitement of padel to Medan with professional facilities and a welcoming community.",
    logoUrl: "/clubs/medan-padel-logo.svg",
    bannerUrl: "/clubs/medan-padel-banner.svg",
    address: "Jl. Gatot Subroto No. 321, Medan",
    city: "Medan",
    region: "North Sumatra",
    country: "Indonesia",
    latitude: 3.5952,
    longitude: 98.6722,
    email: "info@medanpadel.com",
    phone: "+62-61-2345678",
    website: "https://medanpadel.com",
    socialMedia: {
      instagram: "@medanpadelclub",
      facebook: "MedanPadelClub",
      whatsapp: "+62-61-2345678"
    },
    courts: 3,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Restaurant", "Pro Shop", "Kids Area"],
    status: "ACTIVE",
    memberCount: 35,
    establishedYear: 2021,
    adminEmail: "admin@medanpadel.com",
    adminPassword: "medanpadel2024",
    createdAt: "2021-04-12T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "yogyakarta-padel-center",
    slug: "yogyakarta-padel-center",
    name: "Yogyakarta Padel Center",
    description: "Cultural city meets modern padel! Our facility in Yogyakarta offers a unique blend of traditional charm and contemporary padel facilities.",
    logoUrl: "/clubs/yogyakarta-padel-logo.svg",
    bannerUrl: "/clubs/yogyakarta-padel-banner.svg",
    address: "Jl. Malioboro No. 654, Yogyakarta",
    city: "Yogyakarta",
    region: "Yogyakarta",
    country: "Indonesia",
    latitude: -7.7956,
    longitude: 110.3695,
    email: "hello@yogyakartapadel.com",
    phone: "+62-274-9876543",
    website: "https://yogyakartapadel.com",
    socialMedia: {
      instagram: "@yogyakartapadelcenter",
      facebook: "YogyakartaPadelCenter",
      whatsapp: "+62-274-9876543"
    },
    courts: 2,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Cultural Café", "Art Gallery", "Library"],
    status: "ACTIVE",
    memberCount: 24,
    establishedYear: 2022,
    adminEmail: "admin@yogyakartapadel.com",
    adminPassword: "yogyakartapadel2024",
    createdAt: "2022-09-18T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "makassar-padel-club",
    slug: "makassar-padel-club",
    name: "Makassar Padel Club",
    description: "Eastern Indonesia's padel pioneer! We're bringing the excitement of padel to Sulawesi with modern facilities and passionate players.",
    logoUrl: "/clubs/makassar-padel-logo.svg",
    bannerUrl: "/clubs/makassar-padel-banner.svg",
    address: "Jl. Ahmad Yani No. 987, Makassar",
    city: "Makassar",
    region: "South Sulawesi",
    country: "Indonesia",
    latitude: -5.1477,
    longitude: 119.4327,
    email: "contact@makassarpadel.com",
    phone: "+62-411-1234567",
    website: "https://makassarpadel.com",
    socialMedia: {
      instagram: "@makassarpadelclub",
      facebook: "MakassarPadelClub",
      whatsapp: "+62-411-1234567"
    },
    courts: 3,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Seafood Restaurant", "Marine Theme", "Equipment Rental"],
    status: "ACTIVE",
    memberCount: 29,
    establishedYear: 2023,
    adminEmail: "admin@makassarpadel.com",
    adminPassword: "makassarpadel2024",
    createdAt: "2023-01-20T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "palembang-padel-academy",
    slug: "palembang-padel-academy",
    name: "Palembang Padel Academy",
    description: "South Sumatra's premier padel training facility. We focus on developing local talent and promoting padel throughout the region.",
    logoUrl: "/clubs/palembang-padel-logo.svg",
    bannerUrl: "/clubs/palembang-padel-banner.svg",
    address: "Jl. Sudirman No. 147, Palembang",
    city: "Palembang",
    region: "South Sumatra",
    country: "Indonesia",
    latitude: -2.9761,
    longitude: 104.7754,
    email: "info@palembangpadel.com",
    phone: "+62-711-8765432",
    website: "https://palembangpadel.com",
    socialMedia: {
      instagram: "@palembangpadelacademy",
      facebook: "PalembangPadelAcademy",
      whatsapp: "+62-711-8765432"
    },
    courts: 2,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Training Center", "Video Analysis", "Café"],
    status: "ACTIVE",
    memberCount: 18,
    establishedYear: 2023,
    adminEmail: "admin@palembangpadel.com",
    adminPassword: "palembangpadel2024",
    createdAt: "2023-05-30T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "semarang-padel-hub",
    slug: "semarang-padel-hub",
    name: "Semarang Padel Hub",
    description: "Central Java's padel destination! Our modern facility in Semarang offers excellent courts and a vibrant community for players of all levels.",
    logoUrl: "/clubs/semarang-padel-logo.svg",
    bannerUrl: "/clubs/semarang-padel-banner.svg",
    address: "Jl. Pemuda No. 258, Semarang",
    city: "Semarang",
    region: "Central Java",
    country: "Indonesia",
    latitude: -6.9667,
    longitude: 110.4167,
    email: "hello@semarangpadel.com",
    phone: "+62-24-3456789",
    website: "https://semarangpadel.com",
    socialMedia: {
      instagram: "@semarangpadelhub",
      facebook: "SemarangPadelHub",
      whatsapp: "+62-24-3456789"
    },
    courts: 3,
    indoor: true,
    amenities: ["Air Conditioning", "Lighting", "Parking", "Restaurant", "Pro Shop", "Event Space"],
    status: "ACTIVE",
    memberCount: 41,
    establishedYear: 2021,
    adminEmail: "admin@semarangpadel.com",
    adminPassword: "semarangpadel2024",
    createdAt: "2021-11-08T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  }
];

// Helper functions
export function getAllClubs(): Club[] {
  return clubsData;
}

export function getClubBySlug(slug: string): Club | undefined {
  return clubsData.find(club => club.slug === slug);
}

export function getClubById(id: string): Club | undefined {
  return clubsData.find(club => club.id === id);
}

export function getClubsByRegion(region: string): Club[] {
  return clubsData.filter(club => club.region === region);
}

export function getActiveClubs(): Club[] {
  return clubsData.filter(club => club.status === 'ACTIVE');
}

export function searchClubs(query: string): Club[] {
  const lowercaseQuery = query.toLowerCase();
  return clubsData.filter(club => 
    club.name.toLowerCase().includes(lowercaseQuery) ||
    club.city.toLowerCase().includes(lowercaseQuery) ||
    club.region.toLowerCase().includes(lowercaseQuery) ||
    club.description.toLowerCase().includes(lowercaseQuery)
  );
}

// Admin authentication helper
export function authenticateClubAdmin(email: string, password: string): Club | null {
  const club = clubsData.find(c => c.adminEmail === email && c.adminPassword === password);
  return club || null;
}
