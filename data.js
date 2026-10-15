/* Eventika demo data. All records are fictional and simulated locally. */
window.EVENTIKA_DATA = {
  "app": {
    "name": "Eventika",
    "tagline": "Your event. Your sound. Your people.",
    "currency": "TZS",
    "demoMode": true
  },
  "user": {
    "name": "Collin Wilfred",
    "location": "Dar es Salaam, Tanzania",
    "roles": [
      "Customer",
      "Vendor",
      "Admin"
    ]
  },
  "regions": [
    "Dar es Salaam",
    "Mwanza",
    "Arusha",
    "Dodoma",
    "Mbeya",
    "Morogoro",
    "Tanga",
    "Zanzibar",
    "Kilimanjaro",
    "Other"
  ],
  "categories": [
    {
      "id": "sound",
      "name": "Sound & Audio",
      "icon": "audio-lines",
      "color": "mint",
      "description": "Speakers, mixers, microphones and monitors"
    },
    {
      "id": "lighting",
      "name": "Stage & Lighting",
      "icon": "lightbulb",
      "color": "violet",
      "description": "Stage design, moving lights and LED screens"
    },
    {
      "id": "venues",
      "name": "Venues",
      "icon": "map-pin",
      "color": "cyan",
      "description": "Indoor and outdoor event spaces"
    },
    {
      "id": "studio",
      "name": "Studios & Recording",
      "icon": "mic-vocal",
      "color": "pink",
      "description": "Rehearsal, live capture, mixing and mastering"
    },
    {
      "id": "artists",
      "name": "Artists & Choirs",
      "icon": "music-2",
      "color": "orange",
      "description": "Musicians, choirs, DJs and MCs"
    },
    {
      "id": "production",
      "name": "Production Crew",
      "icon": "clapperboard",
      "color": "blue",
      "description": "Engineers, camera crews and stage managers"
    },
    {
      "id": "power",
      "name": "Power & Logistics",
      "icon": "zap",
      "color": "yellow",
      "description": "Generators, transport and technical logistics"
    },
    {
      "id": "eventops",
      "name": "Event Operations",
      "icon": "shield-check",
      "color": "green",
      "description": "Security, first aid, barriers and support"
    }
  ],
  "vendors": [
    {
      "id": "v1",
      "name": "Pulse Production TZ",
      "category": "sound",
      "verified": true,
      "rating": 4.9,
      "reviews": 128,
      "completed": 214,
      "region": "Dar es Salaam",
      "district": "Kinondoni",
      "address": "Mikocheni, Dar es Salaam",
      "phone": "+255 754 220 810",
      "response": "Usually within 20 min",
      "price": 650000,
      "description": "Professional live sound systems, mixing consoles and experienced engineers for concerts, worship events and large gatherings.",
      "services": [
        "PA system",
        "Line array speakers",
        "Digital mixing console",
        "Wireless microphones",
        "Sound engineer"
      ],
      "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i1",
          "title": "Line Array PA System — 10,000W",
          "category": "sound",
          "price": 1200000,
          "unit": "per event",
          "qty": 2,
          "available": 2,
          "specs": "Line array tops, subwoofers, amplifiers and processing",
          "image": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80"
        },
        {
          "id": "i2",
          "title": "Digital Mixing Console",
          "category": "sound",
          "price": 350000,
          "unit": "per event",
          "qty": 3,
          "available": 3,
          "specs": "Digital FOH console with scene recall",
          "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80"
        },
        {
          "id": "i3",
          "title": "Wireless Microphone Set (4)",
          "category": "sound",
          "price": 180000,
          "unit": "per event",
          "qty": 6,
          "available": 6,
          "specs": "Four handheld wireless microphones and receivers",
          "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      "id": "v2",
      "name": "Neon Stage & Visuals",
      "category": "lighting",
      "verified": true,
      "rating": 4.8,
      "reviews": 86,
      "completed": 143,
      "region": "Dar es Salaam",
      "district": "Ilala",
      "address": "Vingunguti Industrial Area, Dar es Salaam",
      "phone": "+255 687 410 225",
      "response": "Within 1 hour",
      "price": 450000,
      "description": "Creative stage lighting, LED screens, trussing and show visuals with setup and operation teams.",
      "services": [
        "LED screens",
        "Moving-head lights",
        "Trussing",
        "Stage design",
        "Lighting operator"
      ],
      "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i4",
          "title": "LED Screen Wall — 6m × 3m",
          "category": "lighting",
          "price": 950000,
          "unit": "per event",
          "qty": 2,
          "available": 2,
          "specs": "LED wall, processor and operator",
          "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80"
        },
        {
          "id": "i5",
          "title": "Moving Head Lighting Package",
          "category": "lighting",
          "price": 520000,
          "unit": "per event",
          "qty": 4,
          "available": 4,
          "specs": "Moving heads, wash lights, controller and technician",
          "image": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      "id": "v3",
      "name": "Mwanzo Events Arena",
      "category": "venues",
      "verified": true,
      "rating": 4.7,
      "reviews": 64,
      "completed": 101,
      "region": "Dar es Salaam",
      "district": "Temeke",
      "address": "Kurasini, Dar es Salaam",
      "phone": "+255 713 920 144",
      "response": "Within 2 hours",
      "price": 1800000,
      "description": "Flexible outdoor venue with parking, security coordination, power access and a large event footprint.",
      "services": [
        "Outdoor venue",
        "Indoor hall",
        "Parking",
        "Power connection",
        "Security coordination"
      ],
      "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i6",
          "title": "Outdoor Concert Venue — up to 1,500",
          "category": "venues",
          "price": 1800000,
          "unit": "per event",
          "qty": 1,
          "available": 1,
          "specs": "Outdoor space, power access, parking and toilets",
          "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      "id": "v4",
      "name": "Studio Kioo",
      "category": "studio",
      "verified": true,
      "rating": 4.9,
      "reviews": 52,
      "completed": 78,
      "region": "Dar es Salaam",
      "district": "Kinondoni",
      "address": "Mwenge, Dar es Salaam",
      "phone": "+255 762 801 900",
      "response": "Usually within 30 min",
      "price": 80000,
      "description": "Rehearsal and recording studio for choirs, bands, vocalists and live production teams.",
      "services": [
        "Rehearsal room",
        "Live audio capture",
        "Mixing",
        "Mastering",
        "Vocal recording"
      ],
      "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i7",
          "title": "Choir Rehearsal Studio",
          "category": "studio",
          "price": 80000,
          "unit": "per hour",
          "qty": 1,
          "available": 1,
          "specs": "Treated room, PA, keyboard and recording option",
          "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80"
        },
        {
          "id": "i8",
          "title": "Live Multitrack Recording",
          "category": "studio",
          "price": 650000,
          "unit": "per event",
          "qty": 2,
          "available": 2,
          "specs": "Multitrack audio capture, engineer and project files",
          "image": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      "id": "v5",
      "name": "The Lanterns Choir",
      "category": "artists",
      "verified": true,
      "rating": 5.0,
      "reviews": 31,
      "completed": 42,
      "region": "Dar es Salaam",
      "district": "Ubungo",
      "address": "Ubungo, Dar es Salaam",
      "phone": "+255 714 050 911",
      "response": "Within 1 hour",
      "price": 450000,
      "description": "Contemporary gospel choir available for concerts, worship nights, community gatherings and recordings.",
      "services": [
        "Gospel choir",
        "Backing vocals",
        "Worship set",
        "Special arrangements"
      ],
      "image": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i9",
          "title": "Gospel Choir Performance",
          "category": "artists",
          "price": 450000,
          "unit": "per performance",
          "qty": 1,
          "available": 1,
          "specs": "12-member choir, 30–45 minute set; sound rider supplied",
          "image": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      "id": "v6",
      "name": "Frame by Frame Live",
      "category": "production",
      "verified": false,
      "rating": 4.6,
      "reviews": 19,
      "completed": 27,
      "region": "Mwanza",
      "district": "Nyamagana",
      "address": "Nyamagana, Mwanza",
      "phone": "+255 689 332 401",
      "response": "Within 3 hours",
      "price": 550000,
      "description": "Multi-camera event capture, livestreaming, highlight videos and post-event editing.",
      "services": [
        "Live video capture",
        "Livestreaming",
        "Photography",
        "Editing"
      ],
      "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i10",
          "title": "Multi-camera Live Recording",
          "category": "production",
          "price": 750000,
          "unit": "per event",
          "qty": 2,
          "available": 2,
          "specs": "Three-camera setup, director and edited highlight",
          "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      "id": "v7",
      "name": "Jua Power & Logistics",
      "category": "power",
      "verified": true,
      "rating": 4.7,
      "reviews": 37,
      "completed": 58,
      "region": "Dar es Salaam",
      "district": "Kinondoni",
      "address": "Bunju, Dar es Salaam",
      "phone": "+255 755 918 112",
      "response": "Within 1 hour",
      "price": 300000,
      "description": "Backup generators, event transport, loading teams and technical logistics for productions of different sizes.",
      "services": [
        "Generator hire",
        "Equipment transport",
        "Loading crew",
        "Power distribution"
      ],
      "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i11",
          "title": "Backup Generator — 30 kVA",
          "category": "power",
          "price": 380000,
          "unit": "per event",
          "qty": 2,
          "available": 2,
          "specs": "30 kVA generator, cables and operator; fuel quoted separately",
          "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      "id": "v8",
      "name": "Salama Event Crew",
      "category": "eventops",
      "verified": true,
      "rating": 4.8,
      "reviews": 24,
      "completed": 36,
      "region": "Dar es Salaam",
      "district": "Ilala",
      "address": "Ilala, Dar es Salaam",
      "phone": "+255 713 411 055",
      "response": "Within 2 hours",
      "price": 220000,
      "description": "Event operations support including trained stewards, entry coordination, barriers and approved first-aid partners.",
      "services": [
        "Event stewards",
        "Entry coordination",
        "Crowd barriers",
        "First-aid coordination"
      ],
      "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
      "items": [
        {
          "id": "i12",
          "title": "Event Steward Team — 6 people",
          "category": "eventops",
          "price": 220000,
          "unit": "per event",
          "qty": 5,
          "available": 5,
          "specs": "Six stewards for entry and audience coordination",
          "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80"
        }
      ]
    }
  ],
  "events": [
    {
      "id": "ev1",
      "name": "Worship & Sound Night",
      "type": "Gospel concert",
      "date": "2026-11-15",
      "time": "16:00",
      "region": "Dar es Salaam",
      "district": "Kinondoni",
      "attendance": 900,
      "budget": 8000000,
      "status": "Planning",
      "description": "A community gospel concert with a live band, choir and professional recording.",
      "priorities": [
        "Sound quality",
        "Vendor reliability",
        "Value for money"
      ],
      "requirements": [
        "PA system",
        "Wireless microphones",
        "LED screen",
        "Venue",
        "Live recording"
      ]
    },
    {
      "id": "ev2",
      "name": "Choir Recording Session",
      "type": "Recording session",
      "date": "2026-11-02",
      "time": "09:00",
      "region": "Dar es Salaam",
      "district": "Kinondoni",
      "attendance": 40,
      "budget": 1200000,
      "status": "Confirmed",
      "description": "Choir rehearsal and multitrack recording session.",
      "priorities": [
        "Quality",
        "Budget"
      ],
      "requirements": [
        "Rehearsal studio",
        "Recording engineer"
      ]
    }
  ],
  "bookings": [
    {
      "id": "BK-2026-0041",
      "eventId": "ev2",
      "vendorId": "v4",
      "title": "Choir Rehearsal Studio + Recording",
      "date": "2026-11-02",
      "status": "Confirmed",
      "amount": 730000,
      "paid": 365000,
      "paymentStatus": "Deposit paid",
      "contract": "Signed by both parties",
      "deliveryStatus": "Upcoming",
      "quantity": 1
    },
    {
      "id": "BK-2026-0042",
      "eventId": "ev1",
      "vendorId": "v1",
      "title": "PA System + Mixing Console",
      "date": "2026-11-15",
      "status": "Awaiting vendor response",
      "amount": 1550000,
      "paid": 0,
      "paymentStatus": "Unpaid",
      "contract": "Draft",
      "deliveryStatus": "Not started",
      "quantity": 1
    }
  ],
  "messages": [
    {
      "id": "m1",
      "thread": "v1",
      "sender": "Pulse Production TZ",
      "text": "Thanks for the event brief. We can provide the PA package. Would you like the engineer included in the quotation?",
      "time": "10:42"
    },
    {
      "id": "m2",
      "thread": "v1",
      "sender": "You",
      "text": "Yes, please include the engineer and transport to the venue.",
      "time": "10:48"
    },
    {
      "id": "m3",
      "thread": "v1",
      "sender": "Pulse Production TZ",
      "text": "Noted. We will send an updated quotation shortly.",
      "time": "10:51"
    }
  ],
  "invoices": [
    {
      "id": "INV-2026-0108",
      "bookingId": "BK-2026-0041",
      "vendorId": "v4",
      "customer": "Collin Wilfred",
      "issueDate": "2026-10-10",
      "dueDate": "2026-10-25",
      "subtotal": 730000,
      "tax": 0,
      "paid": 365000,
      "status": "Partially paid",
      "items": [
        {
          "name": "Choir Rehearsal Studio",
          "qty": 1,
          "price": 80000
        },
        {
          "name": "Live Multitrack Recording",
          "qty": 1,
          "price": 650000
        }
      ]
    }
  ],
  "contracts": [
    {
      "id": "CON-2026-0041",
      "bookingId": "BK-2026-0041",
      "vendorId": "v4",
      "status": "Signed",
      "date": "2026-10-10",
      "terms": [
        "Vendor provides rehearsal studio and live multitrack recording.",
        "Customer pays 50% deposit and the remaining balance before delivery of final files.",
        "Any changes must be confirmed by both parties in Eventika.",
        "Cancellation and rescheduling follow the agreed booking terms."
      ]
    }
  ],
  "reviews": [
    {
      "id": "r1",
      "vendorId": "v1",
      "customer": "Amina J.",
      "rating": 5,
      "date": "2026-09-20",
      "text": "Excellent sound and a very professional crew. Setup was completed before the audience arrived.",
      "verified": true,
      "tags": [
        "Sound quality",
        "On time"
      ]
    },
    {
      "id": "r2",
      "vendorId": "v4",
      "customer": "Daniel M.",
      "rating": 5,
      "date": "2026-09-11",
      "text": "Clean studio, friendly team and clear recording output.",
      "verified": true,
      "tags": [
        "Professional",
        "Value for money"
      ]
    },
    {
      "id": "r3",
      "vendorId": "v2",
      "customer": "Grace P.",
      "rating": 4,
      "date": "2026-08-29",
      "text": "Good lighting package. Communication was clear throughout.",
      "verified": true,
      "tags": [
        "Quality",
        "Communication"
      ]
    }
  ],
  "subscriptions": [
    {
      "id": "starter",
      "name": "Starter",
      "price": 0,
      "features": [
        "Up to 5 active listings",
        "Basic storefront",
        "Booking requests",
        "Basic availability calendar"
      ]
    },
    {
      "id": "growth",
      "name": "Growth",
      "price": 35000,
      "features": [
        "Up to 30 active listings",
        "AI listing assistant",
        "Invoices and receipts",
        "Analytics dashboard",
        "Priority listing tools"
      ]
    },
    {
      "id": "professional",
      "name": "Professional",
      "price": 85000,
      "features": [
        "Unlimited listings",
        "Multiple staff accounts",
        "Advanced analytics",
        "Bulk inventory tools",
        "Priority support"
      ]
    },
    {
      "id": "enterprise",
      "name": "Enterprise",
      "price": 250000,
      "features": [
        "Multi-branch management",
        "Advanced permissions",
        "Custom reporting",
        "Dedicated onboarding",
        "Integration planning"
      ]
    }
  ],
  "adminStats": {
    "gmv": 28450000,
    "activeVendors": 126,
    "activeCustomers": 842,
    "openDisputes": 3,
    "pendingVerifications": 12
  },
  "notifications": [
    {
      "title": "Vendor replied",
      "body": "Pulse Production TZ responded to your enquiry.",
      "time": "10 min ago",
      "unread": true
    },
    {
      "title": "Deposit due soon",
      "body": "Your Studio Kioo balance is due on 25 Oct 2026.",
      "time": "1 hour ago",
      "unread": true
    },
    {
      "title": "New vendor near you",
      "body": "Jua Power & Logistics added a backup generator package.",
      "time": "Yesterday",
      "unread": false
    }
  ]
};
