import os

src = os.path.join('src', 'stitch-screens', 'stitch', 'LandingPage.jsx')
dst = os.path.join('src', 'app', 'intro', 'page.jsx')

with open(src, 'r', encoding='utf-8') as f:
    content = f.read()

# Add 'use client' and Link import at the top
content = "'use client';\n" + content.replace(
    "import React from 'react';",
    "import React from 'react';\nimport Link from 'next/link';"
)

# Replace dead hash anchors with real routes
content = content.replace('href="#login"', 'href="/auth"')
content = content.replace('href="#signup"', 'href="/auth"')

# Replace <a> tags for navigation links with <Link>
# Login link
content = content.replace(
    '<a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/auth">Log In</a>',
    '<Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/auth">Log In</Link>'
)
# Get Started button
content = content.replace(
    '<a className="bg-primary-container text-white px-md py-sm rounded-lg font-label-md text-label-md font-bold hover:bg-[#257db0] transition-colors shadow-sm transform hover:-translate-y-[1px]" href="/auth">Get Started</a>',
    '<Link className="bg-primary-container text-white px-md py-sm rounded-lg font-label-md text-label-md font-bold hover:bg-[#257db0] transition-colors shadow-sm transform hover:-translate-y-[1px]" href="/auth">Get Started</Link>'
)
# Join CivicPulse hero CTA — replace <a> open tag
content = content.replace(
    '<a className="bg-primary-container text-white px-xl py-sm rounded-lg font-headline-sm text-headline-sm text-center hover:bg-[#257db0] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-[1px] flex items-center justify-center gap-sm" href="/auth">',
    '<Link className="bg-primary-container text-white px-xl py-sm rounded-lg font-headline-sm text-headline-sm text-center hover:bg-[#257db0] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-[1px] flex items-center justify-center gap-sm" href="/auth">'
)
# Replace the matching </a> (the one right before "See How It Works")
content = content.replace(
    '</a>\n<a className="bg-transparent border border-secondary',
    '</Link>\n<a className="bg-transparent border border-secondary'
)

with open(dst, 'w', encoding='utf-8') as f:
    f.write(content)

print('Landing page rebuilt successfully')
