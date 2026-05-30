#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Always update the `test_result.md` file before calling the testing agent
#    - Configure the `test_plan` section to focus on specific tasks
#    - Update the `status_history` and `agent_communication` sections
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the `status_history`
#    - Update the working status based on user feedback
#    - If a user reports an issue, increment the `stuck_count` for that task
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high `stuck_count` values or are marked as stuck
#    - For persistent issues, use websearch or ask for user help
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Test the BACKEND only by default unless explicitly told otherwise.
# After testing, the testing agent will update this file with the results.
# DO NOT manually update this file with test results.
#
#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

user_problem_statement: |
  Premium Dutch cleaning company website "BesteFixo Schoonmaak" with quote/contact forms,
  reviews submission with star ratings, multi-image service gallery, responsive design,
  SEO, WhatsApp button, FAQ. Backend: MongoDB stores quotes, contacts and user-submitted reviews.

backend:
  - task: "POST /api/quote — store quote request in MongoDB"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Implemented with required-field validation (name, email, phone, serviceType). Stores in 'quotes' collection with UUID. Returns Dutch success message."
        -working: true
        -agent: "testing"
        -comment: "✅ PASSED all tests. Valid request returns 200 with {ok:true, id:<uuid>, message:<dutch>}. Missing required fields correctly rejected with 400 and Dutch error message. Document persistence verified via /api/submissions."

  - task: "POST /api/contact — store contact message in MongoDB"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Implemented with validation (name, email, message). Stores in 'contacts' collection."
        -working: true
        -agent: "testing"
        -comment: "✅ PASSED all tests. Valid request returns 200 with {ok:true, id:<uuid>, message:<dutch>}. Missing required fields (message) correctly rejected with 400. Document persistence verified via /api/submissions."

  - task: "POST /api/reviews — submit review with star rating"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Validates rating 1-5 and minimum text length 10 chars. Stores with approved:true (auto-publish). Returns review object."
        -working: true
        -agent: "testing"
        -comment: "✅ PASSED all tests. Valid review returns 200 with {ok:true, review:{id, name, role, rating, text, approved:true, createdAt}, message}. Invalid ratings (0, 6) correctly rejected with 400. Text too short (<10 chars) correctly rejected. Missing name correctly rejected. Document persistence verified."

  - task: "GET /api/reviews — list approved reviews"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Returns approved reviews sorted by createdAt desc, with optional ?limit param."
        -working: true
        -agent: "testing"
        -comment: "✅ PASSED all tests. Returns 200 with {reviews:[...]} array. Reviews correctly sorted by createdAt desc. Posted review found in list. ?limit=2 query parameter correctly limits results. All approved reviews returned."

  - task: "GET /api/health — healthcheck"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "low"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Basic health endpoint."
        -working: true
        -agent: "testing"
        -comment: "✅ PASSED. Returns 200 with {ok:true, service:'BesteFixo API', time:<iso-string>}. All required fields present and correct."

frontend:
  - task: "Full single-page experience (hero, services, reviews, forms, FAQ, contact)"
    implemented: true
    working: "NA"
    file: "app/page.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Built; not requesting frontend automated tests yet."

metadata:
  created_by: "main_agent"
  version: "1.2"
  test_sequence: 2
  run_ui: false

test_plan:
  current_focus: []
  stuck_tasks: []
  test_all: false
  test_priority: "high_first"

agent_communication:
    -agent: "main"
    -message: |
      Please test the backend API endpoints for BesteFixo. All endpoints are under /api on the
      Next.js app. Use the public base URL (NEXT_PUBLIC_BASE_URL from /app/.env) for requests.
      
    -agent: "testing"
    -message: |
      ✅ ALL BACKEND TESTS PASSED (13/13)
      
      Completed comprehensive testing of all BesteFixo API endpoints:
      
      1. GET /api/health - ✅ Working correctly
      2. POST /api/quote - ✅ Valid requests accepted, invalid rejected with 400
      3. POST /api/contact - ✅ Valid requests accepted, invalid rejected with 400
      4. POST /api/reviews - ✅ Valid reviews accepted with auto-approval, all validation working (rating 1-5, text min 10 chars)
      5. GET /api/reviews - ✅ Returns approved reviews sorted by createdAt desc, limit parameter working
      6. GET /api/submissions - ✅ Returns all collections, document persistence verified
      
      All endpoints:
      - Return correct status codes (200 for success, 400 for validation errors)
      - Include proper response fields (ok, id, message for POST; arrays for GET)
      - Validate required fields correctly
      - Store documents in MongoDB successfully
      - Return Dutch error messages as expected
      - Reviews are auto-approved (approved: true)
      
      No critical issues found. Backend is fully functional and ready for production.
      Test results saved in /app/backend_test.py (can be re-run anytime).

      Endpoints to verify:
      1) GET /api/health → 200, returns {ok:true,...}
      2) POST /api/quote with valid body {name,company?,email,phone,serviceType,location?,message?} → 200 ok:true, id. With missing required → 400.
      3) POST /api/contact with {name,email,phone?,message} → 200 ok:true. Missing required → 400.
      4) POST /api/reviews with {name, role?, rating (1-5), text>=10 chars} → 200 ok:true with returned review. Missing/invalid → 400 (test rating=0, rating=6, text too short).
      5) GET /api/reviews → 200 with reviews[] array containing previously posted reviews, sorted newest first.
      6) GET /api/submissions → 200 with quotes/contacts/reviews lists (admin peek).
      
      MongoDB is local via MONGO_URL. DB name comes from DB_NAME env (default 'bestefixo').
      Confirm documents are actually persisted (use /api/submissions to verify after POSTs).
