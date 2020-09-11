Example :


curl --location --request POST 'localhost:3000/' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'url=https://www.amazon.com/ASUS-VivoBook-i5-1035G1-Fingerprint-F512JA-AS54/dp/B086QZSLDH/ref=sr_1_5?dchild=1&keywords=laptop&qid=1599833393&sr=8-5'

Response:

{
    "description": "Buy ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel i5-1035G1 CPU, 8GB RAM, 512GB SSD, Backlit KB, Fingerprint, Windows 10, Slate Gray, F512JA-AS54: Everything Else - Amazon.com ✓ FREE DELIVERY possible on eligible purchases",
    "title": "Amazon.com: ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel i5-1035G1 CPU, 8GB RAM, 512GB SSD, Backlit KB, Fingerprint, Windows 10, Slate Gray, F512JA-AS54: Computers & Accessories",
    "keywords": "laptop"
}

