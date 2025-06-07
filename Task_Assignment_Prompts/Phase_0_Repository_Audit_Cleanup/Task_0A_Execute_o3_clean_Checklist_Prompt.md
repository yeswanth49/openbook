# APM Task Assignment: Execute o3-clean Security & Performance Hardening Checklist

## 1. Agent Role & APM Context

**Introduction:** You are activated as an Implementation Agent within the Agentic Project Management (APM) framework for the OpenBook project.

**Your Role:** As an Implementation Agent, you are responsible for executing assigned tasks diligently and logging your work meticulously to ensure project transparency and continuity.

**Workflow:** You will interact with the Manager Agent (via the User) and must document all significant actions, decisions, and outcomes in the project's Memory Bank system for future reference and project tracking.

## 2. Task Assignment

**Reference Implementation Plan:** This assignment corresponds to `Phase 0: Repository Audit Cleanup / Task 0A` as documented in the Memory Bank structure.

**Objective:** Execute the comprehensive o3-clean security and performance hardening checklist to address critical vulnerabilities and performance issues in the OpenBook codebase.

**Detailed Action Steps:**

1. **Review Security & Performance Task List**

   - Navigate to and examine the complete checklist in `docs/o3-clean/README.md`
   - Review all 7 security and performance hardening tasks listed in the checklist
   - Prioritize tasks based on security criticality (SSRF/DoS vulnerabilities first, then performance optimizations)

2. **Execute Image Proxy Security Hardening**

   - Open and follow implementation steps in `docs/o3-clean/image-proxy-ssrf.md`
   - Implement SSRF (Server-Side Request Forgery) protection measures
   - Add DoS (Denial of Service) prevention for the image proxy functionality
   - Test the implemented security measures against the acceptance checklist provided

3. **Harden Public Upload Endpoint**

   - Follow implementation steps in `docs/o3-clean/public-upload-validation.md`
   - Implement comprehensive input validation for file uploads
   - Add file type, size, and content validation measures
   - Ensure malicious file upload prevention is in place
   - Verify implementation against the provided test checklist

4. **Prevent Environment Secret Leakage**

   - Execute steps outlined in `docs/o3-clean/env-secret-leak.md`
   - Audit current environment variable handling and exposure
   - Implement measures to prevent accidental secret exposure in logs, error messages, or client-side code
   - Validate that sensitive information is properly protected

5. **Implement Global Rate Limiting & Logging**

   - Follow guidelines in `docs/o3-clean/rate-limiting.md`
   - Add comprehensive rate limiting to prevent abuse
   - Implement proper logging for security monitoring and debugging
   - Configure appropriate rate limits for different endpoint types

6. **Enhance Blob Cleanup Resilience**

   - Implement improvements specified in `docs/o3-clean/blob-cleanup-dos.md`
   - Make the blob cleanup cron job more resilient to failures and attacks
   - Add proper error handling and recovery mechanisms
   - Ensure cleanup operations don't impact application performance

7. **Optimize Streaming Memory Management**

   - Execute optimizations detailed in `docs/o3-clean/streaming-memory-opt.md`
   - Implement true streaming back-pressure to prevent memory issues
   - Optimize memory usage for large data streams
   - Test streaming performance improvements

8. **Enable Dependency Hygiene**
   - Follow setup instructions in `docs/o3-clean/dependabot.md`
   - Configure Dependabot for automatic dependency updates
   - Review and address any existing dependency vulnerabilities
   - Establish ongoing dependency security monitoring

**Execution Notes:**

- Work through tasks in the order listed above (security-critical items first)
- Each task file contains specific "Implementation Steps" and an acceptance checklist
- Test each implementation thoroughly before proceeding to the next task
- Document any deviations from the prescribed steps and rationale

## 3. Expected Output & Deliverables

**Define Success:** Successful completion requires:

- All 7 security and performance hardening tasks completed as specified
- Each task's acceptance checklist validated and passed
- No introduction of breaking changes or regression issues
- Proper error handling and logging implemented for all security measures

**Specify Deliverables:**

- Modified/new code files implementing the security hardening measures
- Updated configuration files for rate limiting, logging, and dependency management
- Documentation of any configuration changes or environment setup requirements
- Test results demonstrating successful implementation of each security measure
- Summary report of completed tasks and their security/performance impact

**Critical Requirements:**

- Maintain backward compatibility with existing functionality
- Ensure all changes follow existing code patterns and architectural decisions
- Validate that new security measures don't interfere with legitimate user workflows
- Document any new environment variables or configuration requirements

## 4. Memory Bank Logging Instructions

**Instruction:** Upon successful completion of this task, you **must** log your work comprehensively to the project's Memory Bank at `Memory/Phase_0_Repository_Audit_Cleanup/Task_0A_Execute_o3_clean_Checklist_Log.md`.

**Format Adherence:** Adhere strictly to the established logging format as defined in `agentic-project-m/prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`. Ensure your log includes:

- A reference to this assigned task: "Task 0A - Execute o3-clean Checklist"
- Clear description of each security hardening task completed
- Any code snippets for critical security implementations
- Key decisions made regarding security configurations
- Any challenges encountered and how they were resolved
- Confirmation of successful execution with test results
- Impact assessment of security improvements implemented

**Focus on Security Impact:** Emphasize the security improvements achieved and any potential impact on application performance or user experience.

## 5. Clarification Instruction

**Instruction:** If any part of this task assignment is unclear, or if you encounter conflicts between different security requirements, please state your specific questions before proceeding. Security implementations require precision, so clarity is essential.
