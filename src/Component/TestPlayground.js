import React, { useState, useEffect, useRef } from "react";
import "../Style/TestPlayground.css";
import {
  FaPlay,
  FaRedo,
  FaCheckCircle,
  FaTerminal,
  FaVial,
  FaServer,
  FaDatabase,
  FaClock,
  FaCheckDouble,
} from "react-icons/fa";

export default function TestPlayground() {
  const [activeSuite, setActiveSuite] = useState("ui");
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const timeoutsRef = useRef([]);
  const consoleBottomRef = useRef(null);

  const testSuites = {
    ui: {
      id: "ui",
      title: "UI E2E Automation Suite",
      framework: "Selenium WebDriver + TestNG + POM",
      icon: <FaVial />,
      badgeColor: "cyan",
      steps: [
        { name: "Driver Setup", desc: "Initialize ChromeDriver with headless capabilities & timeouts" },
        { name: "Navigation & Load", desc: "Navigate to target auth endpoint & verify DOM loaded" },
        { name: "Page Object Action", desc: "Interact with login inputs and trigger submission event" },
        { name: "Dashboard Assertions", desc: "Assert element visibility and token persistence" },
      ],
      logStream: [
        { type: "info", text: "[TESTNG] Starting suite: E2E User Authentication Workflow" },
        { type: "info", text: "[SELENIUM] Initializing ChromeDriver in headless mode..." },
        { type: "pass", text: "[DRIVER] Browser session created successfully (SessionId: a8f9-4b12)" },
        { type: "info", text: "[NAVIGATE] driver.get('https://app.qa-portal.io/login')" },
        { type: "pass", text: "[WAIT] ExplicitWait: ExpectedConditions.visibilityOfElementLocated -> OK (120ms)" },
        { type: "info", text: "[POM] LoginPage.enterUsername('qa_automation_user')" },
        { type: "info", text: "[POM] LoginPage.enterPassword('********')" },
        { type: "info", text: "[POM] LoginPage.clickSubmitButton()" },
        { type: "pass", text: "[ASSERT] Assert.assertEquals(driver.getCurrentUrl(), 'https://app.qa-portal.io/dashboard')" },
        { type: "pass", text: "[ASSERT] Assert.assertTrue(dashboardPage.isMetricCardVisible()) -> PASSED" },
        { type: "report", text: "[TESTNG-REPORT] Test Execution Summary: 4 Tests, 4 Passed, 0 Failed" },
      ],
    },
    api: {
      id: "api",
      title: "REST API Contract Validation Suite",
      framework: "Java REST Automation + JSON Schema",
      icon: <FaServer />,
      badgeColor: "indigo",
      steps: [
        { name: "Request Build", desc: "Construct HTTP POST payload with valid authentication headers" },
        { name: "Endpoint Dispatch", desc: "Send request to /api/v1/orders/validate and await response" },
        { name: "Status & Headers", desc: "Validate HTTP 200 OK and response Content-Type headers" },
        { name: "JSON Schema Assert", desc: "Assert response body schema integrity and order attributes" },
      ],
      logStream: [
        { type: "info", text: "[API-RUNNER] Initializing REST API Test Suite: OrderServiceTest" },
        { type: "info", text: "[REQUEST] POST https://api.qa-portal.io/v1/orders/validate" },
        { type: "info", text: "[HEADERS] Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." },
        { type: "info", text: "[PAYLOAD] {'orderId': 'ORD-8921', 'skuCount': 3, 'currency': 'INR'}" },
        { type: "pass", text: "[RESPONSE] HTTP Status 200 OK received in 142ms" },
        { type: "pass", text: "[HEADER-CHECK] Content-Type equals 'application/json; charset=utf-8'" },
        { type: "pass", text: "[SCHEMA-VALIDATION] JSON Schema conformance test passed (0 schema errors)" },
        { type: "pass", text: "[ASSERT] Assert.assertEquals(response.jsonPath().get('status'), 'CONFIRMED')" },
        { type: "report", text: "[TESTNG-REPORT] REST API Test Suite Completed: 100% Assertion Success" },
      ],
    },
    db: {
      id: "db",
      title: "SQL Database Integrity Suite",
      framework: "SQL Server + JDBC + Backend Verification",
      icon: <FaDatabase />,
      badgeColor: "green",
      steps: [
        { name: "DB Connection", desc: "Establish JDBC connection pool to test SQL Server database" },
        { name: "Query Execution", desc: "Execute parameterized relational query for active order records" },
        { name: "Data State Assert", desc: "Compare database row values against UI transaction state" },
        { name: "Constraint Check", desc: "Validate foreign key integrity, non-null fields & audit logs" },
      ],
      logStream: [
        { type: "info", text: "[JDBC] Establishing connection to SQL Server DB (qa_portfolio_db)..." },
        { type: "pass", text: "[CONNECTION] SQL Server connection pool healthy (Latency: 18ms)" },
        { type: "info", text: "[SQL-EXEC] SELECT order_id, user_id, status FROM tbl_orders WHERE order_id = 'ORD-8921';" },
        { type: "pass", text: "[ROW-FETCH] Record retrieved: {order_id: 'ORD-8921', user_id: 'USR-102', status: 'CONFIRMED'}" },
        { type: "pass", text: "[ASSERT] Assert.assertEquals(dbRecord.getStatus(), uiState.getStatus())" },
        { type: "pass", text: "[INTEGRITY] Foreign key constraint verified: User reference exists in tbl_users" },
        { type: "report", text: "[TESTNG-REPORT] Database Verification Passed: Data consistency guaranteed" },
      ],
    },
  };

  const currentSuiteData = testSuites[activeSuite];

  const clearAllTimeouts = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const runTest = () => {
    if (isRunning) return;
    clearAllTimeouts();
    setIsRunning(true);
    setIsCompleted(false);
    setProgress(0);
    setCurrentStep(0);
    setLogs([]);
    setElapsedTime(0);

    const startTime = Date.now();
    timerRef.current = setInterval(() => {
      setElapsedTime(((Date.now() - startTime) / 1000).toFixed(2));
    }, 50);

    const logItems = currentSuiteData.logStream;
    const totalItems = logItems.length;

    logItems.forEach((log, index) => {
      const timeoutId = setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        const calculatedProgress = Math.round(((index + 1) / totalItems) * 100);
        setProgress(calculatedProgress);

        const stepIdx = Math.floor((index / totalItems) * 4);
        setCurrentStep(stepIdx);

        if (index === totalItems - 1) {
          setIsRunning(false);
          setIsCompleted(true);
          setProgress(100);
          setCurrentStep(4);
          if (timerRef.current) clearInterval(timerRef.current);
        }
      }, (index + 1) * 320);

      timeoutsRef.current.push(timeoutId);
    });
  };

  const resetRunner = () => {
    clearAllTimeouts();
    setIsRunning(false);
    setProgress(0);
    setCurrentStep(0);
    setLogs([]);
    setIsCompleted(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    if (
      consoleBottomRef.current &&
      typeof consoleBottomRef.current.scrollIntoView === "function"
    ) {
      consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  useEffect(() => {
    resetRunner();
    return () => clearAllTimeouts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSuite]);

  return (
    <section className="section-wrapper test-playground-section" id="playground" data-testid="section-playground">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <FaVial className="me-1" /> Interactive QA Sandbox
          </span>
          <h2 className="section-title">Live Automation Test Runner</h2>
          <p className="section-subtitle">
            Run interactive simulated test suites in real-time to witness automated browser flows,
            API contract checks, and SQL database validations in action.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Playground Main Wrapper */}
        <div className="playground-panel">
          {/* Top Suite Selector Bar */}
          <div className="playground-top-bar">
            <div className="suite-tabs">
              <button
                type="button"
                className={`suite-tab-btn ${activeSuite === "ui" ? "active" : ""}`}
                onClick={() => setActiveSuite("ui")}
              >
                <FaVial className="me-2" /> UI E2E Automation
              </button>
              <button
                type="button"
                className={`suite-tab-btn ${activeSuite === "api" ? "active" : ""}`}
                onClick={() => setActiveSuite("api")}
              >
                <FaServer className="me-2" /> REST API Validation
              </button>
              <button
                type="button"
                className={`suite-tab-btn ${activeSuite === "db" ? "active" : ""}`}
                onClick={() => setActiveSuite("db")}
              >
                <FaDatabase className="me-2" /> SQL Data Integrity
              </button>
            </div>

            {/* Run / Reset Controls */}
            <div className="runner-controls">
              <button
                type="button"
                className="btn-run-suite"
                onClick={runTest}
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Executing Suite...
                  </>
                ) : (
                  <>
                    <FaPlay className="me-2" /> Run Test Automation
                  </>
                )}
              </button>

              <button
                type="button"
                className="btn-reset-suite"
                onClick={resetRunner}
                disabled={isRunning && progress === 0}
                title="Reset Suite"
              >
                <FaRedo />
              </button>
            </div>
          </div>

          {/* Suite Info Banner */}
          <div className="suite-info-strip">
            <div className="suite-title-group">
              <span className="suite-icon-box">{currentSuiteData.icon}</span>
              <div>
                <h3 className="suite-name">{currentSuiteData.title}</h3>
                <span className="suite-framework-tag">{currentSuiteData.framework}</span>
              </div>
            </div>

            <div className="suite-stats-group">
              <div className="stat-pill">
                <FaClock className="me-1" /> Time: <strong>{elapsedTime}s</strong>
              </div>
              <div className="stat-pill">
                Status:{" "}
                {isRunning ? (
                  <span className="status-running">Running ⚙</span>
                ) : isCompleted ? (
                  <span className="status-passed">100% Passed ✅</span>
                ) : (
                  <span className="status-ready">Ready to Run</span>
                )}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="playground-progress-wrap">
            <div
              className="playground-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Two-Column Grid: Step Cards + Live Console */}
          <div className="row g-4 playground-content-row">
            {/* Left: Step Sequence */}
            <div className="col-lg-5">
              <div className="steps-container">
                <h4 className="steps-heading">
                  <FaCheckDouble className="me-2" style={{ color: "var(--accent-primary)" }} /> Test Execution Phases
                </h4>

                <div className="steps-list">
                  {currentSuiteData.steps.map((step, idx) => {
                    const isStepPassed = currentStep > idx || isCompleted;
                    const isStepActive = isRunning && currentStep === idx;

                    return (
                      <div
                        className={`step-item-card ${
                          isStepPassed ? "passed" : isStepActive ? "active" : ""
                        }`}
                        key={idx}
                      >
                        <div className="step-num-badge">
                          {isStepPassed ? <FaCheckCircle /> : idx + 1}
                        </div>
                        <div className="step-text-content">
                          <h5 className="step-name">{step.name}</h5>
                          <p className="step-desc">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Terminal Console */}
            <div className="col-lg-7">
              <div className="live-terminal-box">
                <div className="terminal-top-bar">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="terminal-title">
                    <FaTerminal className="me-1 text-muted" /> testng-execution-log.out
                  </div>
                  <span className="terminal-live-badge">
                    {isRunning ? "STREAMING" : isCompleted ? "COMPLETED" : "IDLE"}
                  </span>
                </div>

                <div className="terminal-output-area">
                  {logs.length === 0 ? (
                    <div className="terminal-placeholder">
                      <FaVial className="placeholder-icon" />
                      <p>Click "Run Test Automation" to launch live suite execution stream.</p>
                    </div>
                  ) : (
                    logs.map((log, lIdx) => (
                      <div className={`log-line-item log-${log.type}`} key={lIdx}>
                        <span className="log-timestamp">
                          [{new Date().toLocaleTimeString().split(" ")[0]}.{String(lIdx * 12).padStart(2, "0")}]
                        </span>
                        <span className="log-text">{log.text}</span>
                      </div>
                    ))
                  )}
                  <div ref={consoleBottomRef} />
                </div>

                {isCompleted && (
                  <div className="terminal-report-strip">
                    <span className="report-badge success">
                      <FaCheckCircle className="me-1" /> BUILD SUCCESSFUL — 0 Failures
                    </span>
                    <span className="report-time">Total: {elapsedTime}s</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
