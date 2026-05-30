#!/usr/bin/env python3
"""
Backend API Tests for BesteFixo
Tests all API endpoints with valid and invalid data
"""
import requests
import json
import sys
from datetime import datetime

# Base URL from .env
BASE_URL = "https://fixo-premium-service.preview.emergentagent.com/api"

def print_test(name, passed, details=""):
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"\n{status}: {name}")
    if details:
        print(f"  Details: {details}")
    return passed

def test_health():
    """Test GET /api/health"""
    print("\n" + "="*60)
    print("TEST 1: GET /api/health")
    print("="*60)
    
    try:
        response = requests.get(f"{BASE_URL}/health", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 200:
            return print_test("Health endpoint status", False, f"Expected 200, got {response.status_code}")
        
        data = response.json()
        if not data.get('ok'):
            return print_test("Health endpoint ok field", False, "ok field is not true")
        
        if data.get('service') != 'BesteFixo API':
            return print_test("Health endpoint service field", False, f"Expected 'BesteFixo API', got {data.get('service')}")
        
        if not data.get('time'):
            return print_test("Health endpoint time field", False, "time field is missing")
        
        return print_test("GET /api/health", True, "All fields correct")
    
    except Exception as e:
        return print_test("GET /api/health", False, f"Exception: {str(e)}")

def test_quote_valid():
    """Test POST /api/quote with valid data"""
    print("\n" + "="*60)
    print("TEST 2: POST /api/quote (valid data)")
    print("="*60)
    
    try:
        payload = {
            "name": "Jan de Vries",
            "company": "De Vries Makelaardij BV",
            "email": "jan.devries@example.nl",
            "phone": "0612345678",
            "serviceType": "Kantoorschoonmaak",
            "location": "Amsterdam",
            "message": "Wij zijn op zoek naar wekelijkse kantoorschoonmaak voor ons kantoor van 200m2."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/quote", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 200:
            return print_test("POST /api/quote valid", False, f"Expected 200, got {response.status_code}")
        
        data = response.json()
        if not data.get('ok'):
            return print_test("POST /api/quote valid - ok field", False, "ok field is not true")
        
        if not data.get('id'):
            return print_test("POST /api/quote valid - id field", False, "id field is missing")
        
        if not data.get('message'):
            return print_test("POST /api/quote valid - message field", False, "message field is missing")
        
        # Store the ID for later verification
        global quote_id
        quote_id = data.get('id')
        
        return print_test("POST /api/quote (valid)", True, f"Quote created with ID: {quote_id}")
    
    except Exception as e:
        return print_test("POST /api/quote (valid)", False, f"Exception: {str(e)}")

def test_quote_missing_fields():
    """Test POST /api/quote with missing required fields"""
    print("\n" + "="*60)
    print("TEST 3: POST /api/quote (missing email)")
    print("="*60)
    
    try:
        payload = {
            "name": "Test User",
            "phone": "0612345678",
            "serviceType": "Kantoorschoonmaak"
            # Missing email
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/quote", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            return print_test("POST /api/quote missing email", False, f"Expected 400, got {response.status_code}")
        
        data = response.json()
        if not data.get('error'):
            return print_test("POST /api/quote missing email - error field", False, "error field is missing")
        
        return print_test("POST /api/quote (missing email)", True, "Correctly rejected with 400")
    
    except Exception as e:
        return print_test("POST /api/quote (missing email)", False, f"Exception: {str(e)}")

def test_contact_valid():
    """Test POST /api/contact with valid data"""
    print("\n" + "="*60)
    print("TEST 4: POST /api/contact (valid data)")
    print("="*60)
    
    try:
        payload = {
            "name": "Maria Jansen",
            "email": "maria.jansen@example.nl",
            "phone": "0687654321",
            "message": "Ik wil graag meer informatie over jullie diensten voor particulieren."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 200:
            return print_test("POST /api/contact valid", False, f"Expected 200, got {response.status_code}")
        
        data = response.json()
        if not data.get('ok'):
            return print_test("POST /api/contact valid - ok field", False, "ok field is not true")
        
        if not data.get('id'):
            return print_test("POST /api/contact valid - id field", False, "id field is missing")
        
        # Store the ID for later verification
        global contact_id
        contact_id = data.get('id')
        
        return print_test("POST /api/contact (valid)", True, f"Contact created with ID: {contact_id}")
    
    except Exception as e:
        return print_test("POST /api/contact (valid)", False, f"Exception: {str(e)}")

def test_contact_missing_message():
    """Test POST /api/contact with missing message"""
    print("\n" + "="*60)
    print("TEST 5: POST /api/contact (missing message)")
    print("="*60)
    
    try:
        payload = {
            "name": "Test User",
            "email": "test@example.nl"
            # Missing message
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            return print_test("POST /api/contact missing message", False, f"Expected 400, got {response.status_code}")
        
        return print_test("POST /api/contact (missing message)", True, "Correctly rejected with 400")
    
    except Exception as e:
        return print_test("POST /api/contact (missing message)", False, f"Exception: {str(e)}")

def test_review_valid():
    """Test POST /api/reviews with valid data"""
    print("\n" + "="*60)
    print("TEST 6: POST /api/reviews (valid data)")
    print("="*60)
    
    try:
        payload = {
            "name": "Pieter van Dam",
            "role": "Particulier, Rotterdam",
            "rating": 5,
            "text": "Geweldige service en zeer professioneel werk! Het team was op tijd en heeft alles tot in de puntjes schoongemaakt."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/reviews", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 200:
            return print_test("POST /api/reviews valid", False, f"Expected 200, got {response.status_code}")
        
        data = response.json()
        if not data.get('ok'):
            return print_test("POST /api/reviews valid - ok field", False, "ok field is not true")
        
        review = data.get('review')
        if not review:
            return print_test("POST /api/reviews valid - review field", False, "review field is missing")
        
        if not review.get('id'):
            return print_test("POST /api/reviews valid - review.id", False, "review.id is missing")
        
        if review.get('approved') != True:
            return print_test("POST /api/reviews valid - approved", False, f"Expected approved=true, got {review.get('approved')}")
        
        # Store the ID for later verification
        global review_id
        review_id = review.get('id')
        
        return print_test("POST /api/reviews (valid)", True, f"Review created with ID: {review_id}")
    
    except Exception as e:
        return print_test("POST /api/reviews (valid)", False, f"Exception: {str(e)}")

def test_review_invalid_rating_zero():
    """Test POST /api/reviews with rating=0"""
    print("\n" + "="*60)
    print("TEST 7: POST /api/reviews (rating=0)")
    print("="*60)
    
    try:
        payload = {
            "name": "Test User",
            "rating": 0,
            "text": "This should fail with rating 0"
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/reviews", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            return print_test("POST /api/reviews rating=0", False, f"Expected 400, got {response.status_code}")
        
        return print_test("POST /api/reviews (rating=0)", True, "Correctly rejected with 400")
    
    except Exception as e:
        return print_test("POST /api/reviews (rating=0)", False, f"Exception: {str(e)}")

def test_review_invalid_rating_six():
    """Test POST /api/reviews with rating=6"""
    print("\n" + "="*60)
    print("TEST 8: POST /api/reviews (rating=6)")
    print("="*60)
    
    try:
        payload = {
            "name": "Test User",
            "rating": 6,
            "text": "This should fail with rating 6"
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/reviews", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            return print_test("POST /api/reviews rating=6", False, f"Expected 400, got {response.status_code}")
        
        return print_test("POST /api/reviews (rating=6)", True, "Correctly rejected with 400")
    
    except Exception as e:
        return print_test("POST /api/reviews (rating=6)", False, f"Exception: {str(e)}")

def test_review_text_too_short():
    """Test POST /api/reviews with text too short"""
    print("\n" + "="*60)
    print("TEST 9: POST /api/reviews (text too short)")
    print("="*60)
    
    try:
        payload = {
            "name": "Test User",
            "rating": 5,
            "text": "kort"  # Only 4 characters, minimum is 10
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/reviews", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            return print_test("POST /api/reviews text too short", False, f"Expected 400, got {response.status_code}")
        
        return print_test("POST /api/reviews (text too short)", True, "Correctly rejected with 400")
    
    except Exception as e:
        return print_test("POST /api/reviews (text too short)", False, f"Exception: {str(e)}")

def test_review_missing_name():
    """Test POST /api/reviews with missing name"""
    print("\n" + "="*60)
    print("TEST 10: POST /api/reviews (missing name)")
    print("="*60)
    
    try:
        payload = {
            "rating": 5,
            "text": "This should fail without a name"
            # Missing name
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BASE_URL}/reviews", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            return print_test("POST /api/reviews missing name", False, f"Expected 400, got {response.status_code}")
        
        return print_test("POST /api/reviews (missing name)", True, "Correctly rejected with 400")
    
    except Exception as e:
        return print_test("POST /api/reviews (missing name)", False, f"Exception: {str(e)}")

def test_get_reviews():
    """Test GET /api/reviews"""
    print("\n" + "="*60)
    print("TEST 11: GET /api/reviews")
    print("="*60)
    
    try:
        response = requests.get(f"{BASE_URL}/reviews", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            return print_test("GET /api/reviews", False, f"Expected 200, got {response.status_code}")
        
        data = response.json()
        print(f"Response: {json.dumps(data, indent=2)[:500]}...")  # Print first 500 chars
        
        if 'reviews' not in data:
            return print_test("GET /api/reviews - reviews field", False, "reviews field is missing")
        
        reviews = data['reviews']
        if not isinstance(reviews, list):
            return print_test("GET /api/reviews - reviews type", False, "reviews is not a list")
        
        print(f"Total reviews returned: {len(reviews)}")
        
        # Check if our posted review is in the list
        if review_id:
            found = any(r.get('id') == review_id for r in reviews)
            if not found:
                return print_test("GET /api/reviews - posted review", False, f"Posted review {review_id} not found in list")
            print(f"✓ Posted review {review_id} found in list")
        
        # Verify sorting (newest first)
        if len(reviews) > 1:
            dates = [r.get('createdAt') for r in reviews if r.get('createdAt')]
            if dates != sorted(dates, reverse=True):
                return print_test("GET /api/reviews - sorting", False, "Reviews not sorted by createdAt desc")
            print("✓ Reviews correctly sorted by createdAt desc")
        
        return print_test("GET /api/reviews", True, f"Returned {len(reviews)} reviews, correctly sorted")
    
    except Exception as e:
        return print_test("GET /api/reviews", False, f"Exception: {str(e)}")

def test_get_reviews_with_limit():
    """Test GET /api/reviews with limit parameter"""
    print("\n" + "="*60)
    print("TEST 12: GET /api/reviews?limit=2")
    print("="*60)
    
    try:
        response = requests.get(f"{BASE_URL}/reviews?limit=2", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            return print_test("GET /api/reviews?limit=2", False, f"Expected 200, got {response.status_code}")
        
        data = response.json()
        reviews = data.get('reviews', [])
        print(f"Response: {json.dumps(data, indent=2)}")
        print(f"Total reviews returned: {len(reviews)}")
        
        if len(reviews) > 2:
            return print_test("GET /api/reviews?limit=2", False, f"Expected max 2 reviews, got {len(reviews)}")
        
        return print_test("GET /api/reviews?limit=2", True, f"Correctly limited to {len(reviews)} reviews")
    
    except Exception as e:
        return print_test("GET /api/reviews?limit=2", False, f"Exception: {str(e)}")

def test_get_submissions():
    """Test GET /api/submissions (admin peek)"""
    print("\n" + "="*60)
    print("TEST 13: GET /api/submissions")
    print("="*60)
    
    try:
        response = requests.get(f"{BASE_URL}/submissions", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            return print_test("GET /api/submissions", False, f"Expected 200, got {response.status_code}")
        
        data = response.json()
        print(f"Response keys: {list(data.keys())}")
        
        if 'quotes' not in data:
            return print_test("GET /api/submissions - quotes field", False, "quotes field is missing")
        
        if 'contacts' not in data:
            return print_test("GET /api/submissions - contacts field", False, "contacts field is missing")
        
        if 'reviews' not in data:
            return print_test("GET /api/submissions - reviews field", False, "reviews field is missing")
        
        print(f"Quotes: {len(data['quotes'])}")
        print(f"Contacts: {len(data['contacts'])}")
        print(f"Reviews: {len(data['reviews'])}")
        
        # Verify our posted documents are present
        all_passed = True
        
        if quote_id:
            found = any(q.get('id') == quote_id for q in data['quotes'])
            if not found:
                print(f"❌ Posted quote {quote_id} not found")
                all_passed = False
            else:
                print(f"✓ Posted quote {quote_id} found")
        
        if contact_id:
            found = any(c.get('id') == contact_id for c in data['contacts'])
            if not found:
                print(f"❌ Posted contact {contact_id} not found")
                all_passed = False
            else:
                print(f"✓ Posted contact {contact_id} found")
        
        if review_id:
            found = any(r.get('id') == review_id for r in data['reviews'])
            if not found:
                print(f"❌ Posted review {review_id} not found")
                all_passed = False
            else:
                print(f"✓ Posted review {review_id} found")
        
        if not all_passed:
            return print_test("GET /api/submissions - persistence", False, "Some posted documents not found")
        
        return print_test("GET /api/submissions", True, "All collections present and documents persisted")
    
    except Exception as e:
        return print_test("GET /api/submissions", False, f"Exception: {str(e)}")

def main():
    print("\n" + "="*60)
    print("BesteFixo Backend API Tests")
    print("="*60)
    print(f"Base URL: {BASE_URL}")
    print(f"Test started at: {datetime.now().isoformat()}")
    
    # Initialize global variables for tracking IDs
    global quote_id, contact_id, review_id
    quote_id = None
    contact_id = None
    review_id = None
    
    results = []
    
    # Run all tests in order
    results.append(test_health())
    results.append(test_quote_valid())
    results.append(test_quote_missing_fields())
    results.append(test_contact_valid())
    results.append(test_contact_missing_message())
    results.append(test_review_valid())
    results.append(test_review_invalid_rating_zero())
    results.append(test_review_invalid_rating_six())
    results.append(test_review_text_too_short())
    results.append(test_review_missing_name())
    results.append(test_get_reviews())
    results.append(test_get_reviews_with_limit())
    results.append(test_get_submissions())
    
    # Summary
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    passed = sum(results)
    total = len(results)
    print(f"Passed: {passed}/{total}")
    print(f"Failed: {total - passed}/{total}")
    
    if passed == total:
        print("\n🎉 ALL TESTS PASSED!")
        return 0
    else:
        print(f"\n⚠️  {total - passed} TEST(S) FAILED")
        return 1

if __name__ == "__main__":
    sys.exit(main())
