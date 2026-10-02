import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to avoid ESM transform issues in CRA Jest
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { data: [] } })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('QA Automation Portfolio Application Tests', () => {
  test('renders candidate name and professional title', () => {
    render(<App />);
    const nameElements = screen.getAllByText(/Parth Patel/i);
    expect(nameElements.length).toBeGreaterThan(0);

    const titleElements = screen.getAllByText(/QA Automation Engineer/i);
    expect(titleElements.length).toBeGreaterThan(0);
  });

  test('renders all major sections and navigation items', () => {
    render(<App />);
    expect(screen.getByText(/Interactive QA Sandbox/i)).toBeInTheDocument();
    expect(screen.getByText(/Live Automation Test Runner/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Arsenal/i)).toBeInTheDocument();
    
    const automationHeadings = screen.getAllByText(/Automation Framework/i);
    expect(automationHeadings.length).toBeGreaterThan(0);

    expect(screen.getByText(/Certifications & Honors/i)).toBeInTheDocument();
    expect(screen.getByText(/Let's Build Better Software/i)).toBeInTheDocument();
  });

  test('renders resume download triggers and contact channels', () => {
    render(<App />);
    const resumeButtons = screen.getAllByText(/Resume/i);
    expect(resumeButtons.length).toBeGreaterThan(0);

    const emailLinks = screen.getAllByText(/patelparth1167@gmail.com/i);
    expect(emailLinks.length).toBeGreaterThan(0);
  });
});
