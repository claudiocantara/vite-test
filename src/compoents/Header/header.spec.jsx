import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, waitFor } from "../../utils/test-utils";
import { Header } from "./index";

describe('Testing Header Compoment', () => {
  it('should render <Header />', async () => {
    render(<Header />)
    expect(screen.queryByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Sobre' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Fake' })).not.toBeInTheDocument()
  
  });
});